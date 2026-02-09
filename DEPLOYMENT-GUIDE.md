# Quick Deployment Guide to GitHub Pages

## Prerequisites
- GitHub account (Madhu's account)
- Git installed on your computer

## Quick Deploy (Copy & Paste Commands)

### 1. Open Terminal/Command Prompt

Navigate to the Madhu folder:
```bash
cd /Users/junaid/Downloads/Madhu
```

### 2. Initialize and Push to GitHub

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Professional legal portfolio website"

# Add your GitHub repository
# IMPORTANT: Replace 'GITHUB-USERNAME' with Madhu's actual GitHub username
git remote add origin https://github.com/GITHUB-USERNAME/madhu-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to: `https://github.com/GITHUB-USERNAME/madhu-portfolio`
2. Click **Settings** tab
3. Click **Pages** in left sidebar
4. Under **Source**:
   - Select branch: `main`
   - Select folder: `/ (root)`
5. Click **Save**
6. Wait 2-3 minutes

### 4. Your Website is Live! 🎉

Access it at:
```
https://GITHUB-USERNAME.github.io/madhu-portfolio/
```

## Alternative: Using GitHub Desktop (GUI Method)

If you prefer a visual interface:

1. **Download GitHub Desktop**: https://desktop.github.com/
2. **Install and Sign In** with Madhu's GitHub account
3. **Add Local Repository**:
   - File → Add Local Repository
   - Choose the `Madhu` folder
4. **Publish Repository**:
   - Click "Publish repository" button
   - Name: `madhu-portfolio`
   - Keep "Public" checked
   - Uncheck "Keep this code private"
   - Click "Publish Repository"
5. **Enable GitHub Pages** (follow step 3 above)

## Update Website After Changes

Whenever you make changes to the website:

```bash
cd /Users/junaid/Downloads/Madhu
git add .
git commit -m "Update: describe your changes here"
git push
```

Changes will be live in 1-2 minutes!

## Troubleshooting

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/GITHUB-USERNAME/madhu-portfolio.git
```

### Error: "Repository not found"
- Make sure you created the repository on GitHub first
- Check that the username is correct
- Ensure the repository name matches

### Website not showing after enabling Pages
- Wait 2-3 minutes for GitHub to build the site
- Check the "Pages" settings to see the deployment status
- Make sure the branch is set to `main` and folder to `/ (root)`

### Custom Domain (Optional)

If Madhu wants a custom domain like `madhukuntigorla.com`:

1. Buy domain from a registrar (GoDaddy, Namecheap, etc.)
2. In GitHub Pages settings, add your custom domain
3. In domain registrar, add these DNS records:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: GITHUB-USERNAME.github.io
   ```
4. Wait 24-48 hours for DNS propagation

## Need Help?

- GitHub Pages Documentation: https://docs.github.com/en/pages
- Contact: madhukuntigorla0410@gmail.com
