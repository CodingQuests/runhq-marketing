const https = require('https');
const fs = require('fs');
const path = require('path');

const HUNTER_API_KEY = process.env.HUNTER_API_KEY;
const LEADS_DIR = '/app/data/home/project/leads';
const MASTER_CSV = path.join(LEADS_DIR, 'all_emails.csv');
const OUTPUT_FILE = '/tmp/scrape_step_output.txt';
const TARGET = 1000;

if (!fs.existsSync(LEADS_DIR)) fs.mkdirSync(LEADS_DIR, { recursive: true });

// Fresh batch of 500+ AI/SaaS/devtool domains (distinct from v1 list)
const DOMAINS = [
  // AI/ML platforms & tools
  'huggingface.co','stability.ai','midjourney.com','runwayml.com','elevenlabs.io',
  'perplexity.ai','inflection.ai','adept.ai','characterai.co','scale.com',
  'labelbox.com','weights.com','wandb.ai','neptune.ai','comet.ml',
  'clear.ml','dagshub.com','dvc.org','bentoml.com','ray.io',
  'modal.com','banana.dev','lepton.ai','beam.cloud','fal.ai',
  'cerebras.net','groq.com','fireworks.ai','anyscale.com','deepinfra.com',
  'novita.ai','octoai.cloud','hyperbolic.xyz','predibase.com','portkey.ai',
  'litellm.ai','helicone.ai','langsmith.com','promptlayer.com','trulens.org',
  'arize.com','whylabs.ai','evidently.ai','fiddler.ai','arthur.ai',
  // Dev tools / infra
  'doppler.com','vault.hashicorp.com','1password.com','bitwarden.com','lastpass.com',
  'cloudflare.com','fastly.com','akamai.com','bunny.net','imgix.com',
  'uploadcare.com','cloudinary.com','imagekit.io','sirv.com','filestack.com',
  'twilio.com','bandwidth.com','vonage.com','plivo.com','messagebird.com',
  'sendgrid.com','mailgun.com','postmark.com','sparkpost.com','mailchimp.com',
  'klaviyo.com','customer.io','braze.com','iterable.com','sendbird.com',
  'pusher.com','ably.com','soketi.app','centrifugo.dev','getstream.io',
  'livekit.io','daily.co','agora.io','100ms.live','metered.ca',
  'stripe.com','paddle.com','lemon.squeezy','chargebee.com','recurly.com',
  'lago.dev','stigg.io','moesif.com','amberflo.io','octane.co',
  // Analytics / data
  'heap.io','fullstory.com','hotjar.com','contentsquare.com','mouseflow.com',
  'logrocket.com','datadog.com','elastic.co','splunk.com','sumologic.com',
  'papertrail.com','logdna.com','mezmo.com','mezmo.io','humio.com',
  'cribl.io','coralogix.com','logz.io','dynatrace.com','appdynamics.com',
  'lightstep.com','honeycomb.io','signoz.io','uptrace.dev','aspecto.io',
  'jaegertracing.io','zipkin.io','opentelemetry.io','grafana.com','chronosphere.io',
  'tinybird.co','clickhouse.com','databricks.com','snowflake.com','bigquery.cloud.google.com',
  'motherduck.com','hydra.so','neon.tech','supabase.com','pocketbase.io',
  // SaaS productivity / collaboration
  'loom.com','vidyard.com','wistia.com','vimeo.com','cloudapp.com',
  'tella.tv','descript.com','riverside.fm','squadcast.fm','zencastr.com',
  'otter.ai','fireflies.ai','gong.io','chorus.ai','jiminny.com',
  'grain.com','tactiq.io','rewatch.com','streamyard.com','substack.com',
  'beehiiv.com','convertkit.com','lemlist.com','instantly.ai','apollo.io',
  'outreach.io','salesloft.com','lusha.com','rocketreach.com','zoominfo.com',
  'hunter.io','snov.io','findymail.com','anymailfinder.com','voila.ai',
  // No-code / low-code
  'webflow.com','framer.com','wix.com','squarespace.com','weebly.com',
  'carrd.co','super.so','typedream.com','notion.site','softr.io',
  'glideapps.com','adalo.com','bubble.io','flutterflow.io','draftbit.com',
  'thunkable.com','appgyver.com','backendless.com','xano.com','noodl.net',
  'stacker.app','rowy.io','nocodb.com','baserow.io','teable.io',
  'grist.org','ultra.so','rows.com','sigmacomputing.com','retool.com',
  // Customer success / support
  'intercom.com','zendesk.com','freshdesk.com','helpscout.com','gorgias.com',
  'gladly.com','kustomer.com','dixa.com','front.com','missive.app',
  'groove.hq','kayako.com','re.amaze.com','tidio.com','crisp.chat',
  'drift.com','qualified.com','clearbit.com','fullcontact.com','demandbase.com',
  'rollworks.com','6sense.com','terminus.com','triblio.com','bombora.com',
  // Security / DevSecOps
  'snyk.io','sonarqube.io','checkmarx.com','veracode.com','netsparker.com',
  'invicti.com','acunetix.com','cobalt.io','synack.com','hackerone.com',
  'bugcrowd.com','intigriti.com','yeswehack.com','immunefi.com','sherlock.xyz',
  'lacework.com','wiz.io','orca.security','prismacloud.io','bridgecrew.io',
  'aquasec.com','sysdig.com','falco.org','anchore.com','twistlock.com',
  // Dev-native SaaS
  'courier.com','knock.app','novu.co','magicbell.com','engagespot.co',
  'notifi.network','wundergraph.com','hasura.io','fauna.com','stepzen.com',
  'graphql.com','apollo.io','urql.dev','relay.dev','tanstack.com',
  'tRPC.io','drizzle.team','kysely.dev','prisma.io','sequelize.org',
  'typeorm.io','mikro-orm.io','bookshelf.js.org','objection.js','waterline.js',
  'mongoose.js','mongoosastic.com','nestjs.com','fastify.io','elysia.run',
  'hono.dev','expressjs.com','koajs.com','hapidev.com','sails.js',
  // Open-source startups
  'grafana.com','mattermost.com','rocket.chat','matrix.org','zulip.com',
  'cal.com','jitsi.org','bigbluebutton.org','nextcloud.com','seafile.com',
  'owncloud.com','syncthing.org','restic.net','duplicati.com','borgbackup.org',
  'activepieces.com','windmill.dev','prefect.io','apache.org','tldraw.com',
  'excalidraw.com','miro.com','figjam.com','whimsical.com','mural.co',
];

function fetchHunter(domain) {
  return new Promise(resolve => {
    const url = 'https://api.hunter.io/v2/domain-search?domain=' + domain + '&limit=10&api_key=' + HUNTER_API_KEY;
    https.get(url, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try {
          const j = JSON.parse(d);
          const emails = (j.data && j.data.emails ? j.data.emails : []).map(e => ({
            email: e.value,
            name: ((e.first_name || '') + ' ' + (e.last_name || '')).trim(),
            domain,
            position: e.position || '',
            confidence: e.confidence || 0
          }));
          resolve(emails);
        } catch(err) { resolve([]); }
      });
    }).on('error', () => resolve([]));
  });
}

function loadExistingEmails() {
  const existing = new Set();
  if (fs.existsSync(MASTER_CSV)) {
    const lines = fs.readFileSync(MASTER_CSV, 'utf8').split('\n').slice(1);
    for (const line of lines) {
      const email = line.split(',')[0].trim().replace(/^"|"$/g, '').toLowerCase();
      if (email) existing.add(email);
    }
  }
  return existing;
}

function appendToCSV(emails) {
  if (emails.length === 0) return;
  const header = 'email,name,domain,position,confidence,scraped_at,source\n';
  const esc = v => '"' + (v || '').replace(/"/g, '""') + '"';
  const rows = emails.map(e => [
    esc(e.email), esc(e.name), esc(e.domain), esc(e.position),
    esc(String(e.confidence)), esc(new Date().toISOString()), esc('hunter')
  ].join(','));
  if (!fs.existsSync(MASTER_CSV)) {
    fs.writeFileSync(MASTER_CSV, header);
  }
  fs.appendFileSync(MASTER_CSV, rows.join('\n') + '\n');
}

async function main() {
  const existing = loadExistingEmails();
  console.log('Starting with', existing.size, 'existing emails. Target:', TARGET);
  
  let totalAdded = 0;
  let domainsProcessed = 0;

  for (const domain of DOMAINS) {
    const currentCount = existing.size;
    if (currentCount >= TARGET) {
      console.log('Target of', TARGET, 'reached! Stopping.');
      break;
    }

    const emails = await fetchHunter(domain);
    const newEmails = emails.filter(e => !existing.has(e.email.toLowerCase()));
    
    if (newEmails.length > 0) {
      appendToCSV(newEmails);
      newEmails.forEach(e => {
        existing.add(e.email.toLowerCase());
        console.log('+ ' + e.email + ' (' + e.position + ' @ ' + e.domain + ')');
      });
      totalAdded += newEmails.length;
    }
    
    domainsProcessed++;
    if (domainsProcessed % 20 === 0) {
      console.log('--- Progress: ' + domainsProcessed + '/' + DOMAINS.length + ' domains, total emails: ' + existing.size + '/' + TARGET + ' ---');
    }
    
    await new Promise(r => setTimeout(r, 350));
  }
  
  const finalTotal = loadExistingEmails().size;
  console.log('\n=== DONE ===');
  console.log('Domains processed:', domainsProcessed);
  console.log('New emails added this run:', totalAdded);
  console.log('Total emails in master CSV:', finalTotal);

  // Read all emails from master CSV for output
  const allEmails = [];
  if (fs.existsSync(MASTER_CSV)) {
    const lines = fs.readFileSync(MASTER_CSV, 'utf8').split('\n').slice(1);
    for (const line of lines) {
      if (!line.trim()) continue;
      const email = line.split(',')[0].trim().replace(/^"|"$/g, '');
      if (email) allEmails.push(email);
    }
  }

  const output = 'EMAILS_JSON:' + JSON.stringify(allEmails);
  fs.writeFileSync(OUTPUT_FILE, output);
  console.log('Output written to', OUTPUT_FILE);
  console.log('Total emails in output:', allEmails.length);
}

main().catch(e => { console.error(e); process.exit(1); });
