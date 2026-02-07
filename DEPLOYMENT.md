# 🚀 Deployment Guide: GitHub Pages

This guide will walk you through deploying your Valentine's Day app to GitHub Pages so you can easily share it with your girlfriend!

## Prerequisites

Before you start, make sure you have:
- A GitHub account (free at https://github.com)
- Git installed on your computer
- Your romantic and celebration images ready to upload

## Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Create a new repository with the name `valentine`
3. Make sure "Initialize this repository with a README" is **NOT** checked
4. Click "Create repository"

**Keep this page open** - you'll need the repository URL in the next step.

---

## Step 2: Initialize Git and Push Your Code

Open a terminal/command prompt and navigate to your project folder:

```bash
cd E:\workspace\valentine
```

Then run these commands in order:

```bash
# Initialize git (if not already done)
git init

# Add all your code to git
git add .

# Create your first commit
git commit -m "Initial Valentine's Day app commit"

# Add your GitHub repository as the remote origin
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/valentine.git

# Rename branch to main (GitHub's default)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**Note:** You may be asked to log in to GitHub during the `git push` command.

---

## Step 3: Verify Your Images

Your images are already added! They're located at:

1. `src/assets/romantic-image.png` ✅
2. `src/assets/celebration-image.png` ✅

Both images are ready to deploy.

Your images are already included in the project, so they'll be pushed automatically with the next step!

---

## Step 4: Configure Angular for GitHub Pages

Edit the `angular.json` file in your project root and find the `"projects" > "valentine" > "architect" > "build"` section.

Change the `"outputPath"` from:
```json
"outputPath": "dist/valentine"
```

To:
```json
"outputPath": "dist"
```

Also, in the same `build` section, add `"baseHref": "/valentine/"` to the `"options"` object:

```json
"options": {
  "baseHref": "/valentine/",
  "outputPath": "dist",
  ...
}
```

Save the file and commit:

```bash
git add angular.json
git commit -m "Configure Angular for GitHub Pages deployment"
git push
```

---

## Step 5: Build Your App

Run this command to build your app for production:

```bash
npm run build
```

This creates an optimized version in the `dist/` folder.

---

## Step 6: Deploy to GitHub Pages

You have two options for deployment:

### Option A: Using GitHub Actions (Recommended - Automatic)

1. Create a folder: `.github\workflows`
2. Create a file: `.github\workflows\deploy.yml`
3. Paste this content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

4. Commit and push:

```bash
git add .github/
git commit -m "Add GitHub Actions deployment workflow"
git push
```

Now every time you push to the `main` branch, your app will automatically build and deploy!

### Option B: Manual Deployment

1. Build your app:
```bash
npm run build
```

2. Copy everything from the `dist/` folder

3. Go to your GitHub repository on the web and create a new branch called `gh-pages`

4. Upload all files from `dist/` to this branch

---

## Step 7: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Build and deployment":
   - Source: Select **Deploy from a branch**
   - Branch: Select **gh-pages** (or **main** if you used Option B)
   - Folder: Select **/ (root)**
4. Click **Save**

---

## Step 8: View Your Live App

Your app will be live at:
```
https://YOUR_USERNAME.github.io/valentine/
```

Replace `YOUR_USERNAME` with your actual GitHub username.

**Example:** If your username is `john_doe`, the URL would be:
```
https://john_doe.github.io/valentine/
```

It may take a few minutes (1-5 minutes) to deploy for the first time.

---

## Updating Your App

After deployment, if you make changes:

1. Update your files locally
2. Run `git add .`
3. Run `git commit -m "Your message here"`
4. Run `git push`
5. If using GitHub Actions (Option A), it will automatically redeploy
6. If using Option B, you'll need to manually update the `gh-pages` branch

---

## Sharing the Link

Once deployed, share this link with your girlfriend:
```
https://YOUR_USERNAME.github.io/valentine/
```

She can open it on any device with a web browser!

---

## Troubleshooting

### "Page not found" error
- Wait a few minutes for GitHub Pages to finish deploying
- Check that the repository name is `valentine`
- Verify your username in the URL matches your GitHub username

### Images not showing
- Make sure images are in the `src/assets/` folder
- Rebuild with `npm run build`
- Redeploy by pushing your code

### App doesn't load at all
- Check the browser console for errors (F12 → Console)
- Verify the `baseHref` setting in `angular.json`
- Try a hard refresh (Ctrl+F5 on Windows, Cmd+Shift+R on Mac)

---

## Need Help?

If you encounter issues:
1. Check your repository's **Settings** → **Pages** to see deployment status
2. Look at the **Actions** tab to see if builds are failing
3. Check the browser console (F12 key) for error messages

---

**You're all set! 🎉 Your Valentine's Day app is now live and ready to share!**
