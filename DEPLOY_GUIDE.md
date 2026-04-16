# Deployment Guide — Marvel Rivals S7 Dashboard

## Prerequisites

- A GitHub account (free): https://github.com
- Node.js installed on your computer: https://nodejs.org (download the LTS version)
- Git installed: https://git-scm.com/downloads

---

## STEP 1 — Test Locally First

Open a terminal (Command Prompt on Windows, Terminal on Mac) and navigate to the project folder.

```bash
cd marvel-rivals-dashboard
npm install
npm run dev
```

This starts a local server. Open http://localhost:5173 in your browser. You should see the full dashboard. Press Ctrl+C to stop the server when done.

---

## STEP 2 — Create a GitHub Repository

1. Go to https://github.com/new
2. Name it something like `marvel-rivals-dashboard`
3. Set it to **Private** (so only your team can see the code)
4. Do NOT check "Add a README" (we already have one)
5. Click **Create repository**
6. GitHub will show you setup commands. Run these in your terminal from the project folder:

```bash
cd marvel-rivals-dashboard
git init
git add .
git commit -m "Initial commit - S7 team dashboard"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/marvel-rivals-dashboard.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

## STEP 3A — Deploy with Netlify (Recommended — Easiest)

1. Go to https://app.netlify.com and sign up with your GitHub account
2. Click **"Add new site"** then **"Import an existing project"**
3. Choose **GitHub** and authorize Netlify to access your repos
4. Select your `marvel-rivals-dashboard` repository
5. Netlify auto-detects the settings. Verify these match:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **"Deploy site"**
7. Wait 1-2 minutes. Netlify gives you a URL like `random-name-12345.netlify.app`
8. Click **"Site configuration"** then **"Change site name"** to pick something like `marvel-rivals-s7.netlify.app`

Done. Share the URL with your team.

### Updating the site later:

Just push changes to GitHub and Netlify rebuilds automatically:

```bash
git add .
git commit -m "Updated dashboard"
git push
```

---

## STEP 3B — Deploy with Vercel (Alternative)

1. Go to https://vercel.com and sign up with your GitHub account
2. Click **"Add New Project"**
3. Import your `marvel-rivals-dashboard` repository
4. Vercel auto-detects Vite. Settings should be:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"**
6. Wait 1-2 minutes. Vercel gives you a URL like `marvel-rivals-dashboard.vercel.app`
7. Go to **Settings > Domains** to customize the URL

Done. Same auto-deploy on push as Netlify.

---

## Password Protection (Optional)

If you want only your team to access the site:

**Netlify:** Upgrade to Netlify Pro ($19/mo) for password protection, or use Netlify Identity (free, requires each teammate to create an account).

**Vercel:** Use Vercel's password protection on the Pro plan ($20/mo).

**Free alternative:** Keep the GitHub repo private and use Netlify/Vercel's built-in preview deploy links — share links only with your team via Discord/DMs. The URL is obscure enough that random people won't find it.

---

## Custom Domain (Optional)

If you own a domain (like `yourteam.com`):

1. In Netlify/Vercel, go to **Domain Settings**
2. Add your custom domain
3. Follow the DNS instructions (usually adding a CNAME record)
4. SSL certificate is automatic and free

---

## Troubleshooting

**"npm: command not found"** — Install Node.js from https://nodejs.org

**"git: command not found"** — Install Git from https://git-scm.com/downloads

**Build fails on Netlify/Vercel** — Make sure `npm run build` works locally first. The most common issue is a typo in the code.

**Blank page after deploy** — Check that the publish directory is set to `dist` (not `public` or `build`).

**Want to make changes?** — Edit `src/App.jsx` (that is the entire dashboard), then push to GitHub. The site auto-rebuilds.
