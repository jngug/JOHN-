# JOHN-
Hi there I'm John very much interested to learn more about coding

## Deploying this site to Netlify

There are two easy ways to deploy this project on Netlify:
Ran terminal command: rm -f /workspaces/JOHN-/#style.css


**Production URL:**  
https://brick-business-website-project.netlify.app

You can submit this link to your instructor or Google Classroom. If you need to redeploy, just update your files and repeat the deploy command. Let me know if you need anything else!

1. Manual (UI)
	- Go to https://app.netlify.com and sign in/sign up.
	- Click "Add new site" → "Deploy manually" → drag & drop the project folder or `brick-website.zip`.
	- Or click "New site from Git" and connect your GitHub repo `jngug/JOHN-` to enable auto-deploys.

2. Automatic via GitHub Actions
	- This repository includes a GitHub Actions workflow at `.github/workflows/netlify-deploy.yml`.
	- To enable automatic deploys on push, create two repository secrets:
	  - `NETLIFY_AUTH_TOKEN` — a Personal Access Token from Netlify (User settings → Applications → Personal access tokens).
	  - `NETLIFY_SITE_ID` — your Netlify Site ID (Site settings → Site information).
	- After adding the secrets, pushes to the `main` branch will trigger deployment.

If you want, I can help you create the Personal Access Token or locate the Site ID in Netlify.

---

## Local testing

Run a simple local server to preview the site:

```bash
cd /workspaces/JOHN-
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```
# JOHN-
Hi there I'm John very much interested tolearn more about coding 
