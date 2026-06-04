const https = require('https');
const fs = require('fs');
const path = require('path');

const HUNTER_API_KEY = process.env.HUNTER_API_KEY;
const LEADS_DIR = '/app/data/home/project/leads';
const MASTER_CSV = path.join(LEADS_DIR, 'all_emails.csv');

if (!fs.existsSync(LEADS_DIR)) fs.mkdirSync(LEADS_DIR, { recursive: true });

// Expanded list of dev-tool / AI-native companies to target
const DOMAINS = [
  'raycast.com','linear.app','railway.app','neon.tech','turso.tech',
  'trigger.dev','inngest.com','resend.com','loops.so','cal.com',
  'documenso.com','infisical.com','papermark.io','dub.co','twenty.com',
  'rallly.co','hoppscotch.io','novu.co','highlight.io','formbricks.com',
  'supabase.com','planetscale.com','fly.io','render.com','vercel.com',
  'netlify.com','sanity.io','contentful.com','prisma.io','drizzle.team',
  'xata.io','convex.dev','partykit.io','liveblocks.io','clerk.com',
  'stytch.com','workos.com','permit.io','oso.dev','okta.com',
  'auth0.com','retool.com','appsmith.com','tooljet.com','budibase.com',
  'n8n.io','pipedream.com','make.com','zapier.com','activepieces.com',
  'temporalio.io','prefect.io','dagster.io','airbyte.com','fivetran.com',
  'dbtlabs.com','metabase.com','posthog.com','amplitude.com','mixpanel.com',
  'segment.com','june.so','plausible.io','fathom.net','splitbee.io',
  'sentry.io','honeycomb.io','datadog.com','newrelic.com','logflare.app',
  'axiom.co','betterstack.com','pagerduty.com','incident.io','rootly.com',
  'linear.app','notion.so','coda.io','airtable.com','rows.com',
  'directus.io','strapi.io','payload.cms','ghost.org','sanity.io',
  'storyblok.com','contentstack.com','hygraph.com','graphcms.com','butter.cms',
  'algolia.com','meilisearch.com','typesense.org','elasticpath.com','coveo.com',
  'openai.com','anthropic.com','cohere.com','mistral.ai','together.ai',
  'replicate.com','modal.com','runpod.io','lambdalabs.com','coreweave.com',
  'langchain.com','llamaindex.ai','deepset.ai','weaviate.io','pinecone.io',
  'qdrant.tech','chromadb.com','vectara.com','zilliz.com','milvus.io',
  'cursor.sh','codeium.com','tabnine.com','sourcegraph.com','github.com',
  'gitlab.com','bitbucket.com','gitpod.io','codelinaro.org','replit.com',
  'codesandbox.io','stackblitz.com','glitch.com','codepen.io','jsfiddle.net',
  'hashnode.com','dev.to','daily.dev','readme.com','gitbook.com',
  'mintlify.com','stoplight.io','bump.sh','fern.dev','speakeasy.dev',
  'refine.dev','chakra-ui.com','mantine.dev','radix-ui.com','shadcn.com',
  'storybook.js.org','chromatic.com','percy.io','applitools.com','browserstack.com',
  'cypress.io','playwright.dev','selenium.dev','testcontainers.com','k6.io',
  'grafana.com','prometheus.io','influxdata.com','timescale.com','questdb.io',
  'cockroachlabs.com','yugabyte.com','fauna.com','edgedb.com','singlestore.com',
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
  console.log('Starting with', existing.size, 'existing emails');
  
  let totalAdded = 0;
  let domainsProcessed = 0;

  for (const domain of DOMAINS) {
    const emails = await fetchHunter(domain);
    const newEmails = emails.filter(e => {
      const alreadySeen = existing.has(e.email.toLowerCase());
      return !alreadySeen;
    });
    
    if (newEmails.length > 0) {
      appendToCSV(newEmails);
      newEmails.forEach(e => {
        existing.add(e.email.toLowerCase());
        console.log('+ ' + e.email + ' (' + e.position + ' @ ' + e.domain + ')');
      });
      totalAdded += newEmails.length;
    }
    
    domainsProcessed++;
    if (domainsProcessed % 10 === 0) {
      const total = loadExistingEmails().size;
      console.log('--- Progress: ' + domainsProcessed + '/' + DOMAINS.length + ' domains, total emails: ' + total + ' ---');
    }
    
    // Respect Hunter rate limits (300ms between requests)
    await new Promise(r => setTimeout(r, 350));
  }
  
  const finalTotal = loadExistingEmails().size;
  console.log('\n=== DONE ===');
  console.log('Domains processed:', domainsProcessed);
  console.log('New emails added this run:', totalAdded);
  console.log('Total emails in master CSV:', finalTotal);
}

main().catch(e => { console.error(e); process.exit(1); });
