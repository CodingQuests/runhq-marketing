const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const csvPath = '/app/data/home/project/leads/all_emails.csv';
const contactedPath = '/app/data/home/project/leads/contacted.json';

if (!fs.existsSync(csvPath)) { console.log('No master CSV found, skipping outreach.'); process.exit(0); }

const csv = fs.readFileSync(csvPath, 'utf8').trim().split('\n').slice(1);
const allEmails = csv.map(l => l.split(',')[0].replace(/^"|"$/g,'')).filter(Boolean);

let contacted = [];
if (fs.existsSync(contactedPath)) {
  try { contacted = JSON.parse(fs.readFileSync(contactedPath,'utf8')); } catch(e) { contacted = []; }
}

const toContact = allEmails.filter(e => !contacted.includes(e));
console.log('Total emails in CSV:', allEmails.length);
console.log('Already contacted:', contacted.length);
console.log('Emails to contact this run:', toContact.length);

if (toContact.length === 0) { console.log('No new leads to contact.'); process.exit(0); }

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

function generateEmail(toEmail) {
  return {
    from: process.env.OUTREACH_FROM_NAME + ' <' + process.env.GMAIL_USER + '>',
    to: toEmail,
    subject: 'Shipping code faster with AI agents — RunHQ',
    text: [
      'Hey,',
      '',
      'I came across your work and wanted to reach out. If you\'re using AI coding agents (Claude Code, Cursor, Codex, etc.), you\'ve probably run into the same friction we kept hitting: agents write code fast, but reviewing, testing, and actually shipping it is still a manual slog.',
      '',
      'We built RunHQ to close that gap — it gives agents a structured ops layer so feedback becomes a task, tasks become reviewed PRs, and PRs ship. Less babysitting, more shipping.',
      '',
      'Would love to show you a quick demo or hear what your current agent workflow looks like.',
      '',
      'Worth a 15-min chat?',
      '',
      process.env.OUTREACH_FROM_NAME,
      'RunHQ — https://runhq.io'
    ].join('\n')
  };
}

async function sendAll() {
  const newlyContacted = [];
  for (const email of toContact) {
    try {
      await transporter.sendMail(generateEmail(email));
      console.log('Sent to:', email);
      newlyContacted.push(email);
    } catch(err) {
      console.error('Failed to send to', email, '-', err.message);
    }
    await new Promise(r => setTimeout(r, 2000));
  }
  const updated = [...new Set([...contacted, ...newlyContacted])];
  fs.writeFileSync(contactedPath, JSON.stringify(updated, null, 2));
  console.log('Done. Sent this run:', newlyContacted.length, '| Total contacted:', updated.length);
}

sendAll().catch(e => { console.error(e); process.exit(1); });
