# yoerivda.be

Personal portfolio and experimentation site.

## Stack

- Vanilla HTML / CSS / JS — no framework
- D3.js for data visualisation (loaded per-project)
- Hosted on Netlify (auto-deploy from GitHub)
- Domain managed via OVHcloud

## Structure

```
yoerivda.be/
├── index.html
├── projects/
│   ├── port-analytics/   # D3 maps & dashboards on maritime data
│   └── ew-simulation/    # Electronic warfare simulator (WIP)
├── assets/
│   ├── css/main.css
│   └── js/main.js
└── netlify.toml
```

## Local development

No build step — open `index.html` directly in a browser, or use any static file server:

## Deployment

Push to `main` → Netlify auto-deploys.
