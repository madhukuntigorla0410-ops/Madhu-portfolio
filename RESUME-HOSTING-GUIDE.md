# Resume Hosting Guide

## Current Setup (Recommended)

Your resume is currently stored directly in the GitHub repository alongside your website files. This is the **simplest and most reliable approach** for your use case.

### ✅ Why This Works Best:

1. **Always Available**: Resume lives with your website, no external dependencies
2. **Free Forever**: GitHub provides unlimited bandwidth for static files
3. **Version Control**: Track resume updates with git commits
4. **Fast Loading**: Same server as website, no extra DNS lookups
5. **Easy Updates**: Just replace the PDF file and push to GitHub
6. **No Broken Links**: Resume URL never changes

### 📁 Current File Structure:

```
Madhu/
├── index.html
├── styles.css
├── script.js
├── madhu.png
├── RESUME OF MADHU.pdf  ← Your resume (stays here!)
└── ...other files
```

### 🔗 Resume URL After Deployment:

```
https://USERNAME.github.io/madhu-portfolio/RESUME%20OF%20MADHU.pdf
```

(Spaces in filename are automatically encoded as `%20`)

## How Users Download Your Resume

### Method 1: Download Button (Current)
✅ Already implemented on your website:
- Hero section: "Download Resume" button
- About section: Full-width download button

When clicked, browser downloads the PDF file directly.

### Method 2: Direct Link
Anyone can access your resume directly via:
```
https://USERNAME.github.io/madhu-portfolio/RESUME%20OF%20MADHU.pdf
```

This is useful for:
- Sharing in emails
- LinkedIn profile
- Job applications

## Updating Your Resume

### Option A: Via GitHub Website (No Terminal)

1. Go to your repository: `github.com/USERNAME/madhu-portfolio`
2. Click on `RESUME OF MADHU.pdf`
3. Click the **trash icon** to delete old version
4. Commit the deletion
5. Click **"Add file"** → **"Upload files"**
6. Drag your new resume PDF
7. Commit changes
8. Done! Live in 1-2 minutes

### Option B: Via Git (Terminal/Command Line)

```bash
cd /Users/junaid/Downloads/Madhu

# Replace the resume file (just overwrite it)
# Then commit and push:
git add "RESUME OF MADHU.pdf"
git commit -m "Update resume"
git push

# Live in 1-2 minutes!
```

### Option C: Via GitHub Desktop (GUI)

1. Open GitHub Desktop
2. Replace the PDF file in your local folder
3. See the change appear in GitHub Desktop
4. Add commit message: "Update resume"
5. Click "Commit to main"
6. Click "Push origin"

## Alternative Hosting Options (If Needed)

While GitHub is recommended, here are alternatives:

### Option 1: Google Drive (Not Recommended)
❌ **Cons:**
- Requires "Anyone with link" sharing
- Google Drive viewer wraps the PDF
- Slower loading
- Can be disabled or deleted

### Option 2: Dropbox (Not Recommended)
❌ **Cons:**
- Requires public folder or shared link
- Link can expire
- Extra service to manage

### Option 3: Cloud Storage (AWS S3, Azure Blob)
❌ **Cons:**
- Overkill for single PDF
- May incur costs
- Requires separate configuration

### Option 4: Dedicated Resume Services
❌ **Cons:**
- Monthly fees for features you don't need
- Your resume on someone else's platform
- Unnecessary complexity

## Best Practices

### ✅ DO:
- Keep resume in GitHub repo with your website
- Update resume directly in the repo
- Use descriptive git commit messages ("Update resume - added new role")
- Keep filename simple (consider renaming to `Madhu-Resume.pdf`)

### ❌ DON'T:
- Host resume on external services unnecessarily
- Use Google Drive/Dropbox links (they can break)
- Change filename after deployment (breaks bookmarks)
- Make resume private (defeats the purpose!)

## File Size Considerations

- **Current file**: Perfectly fine size
- **GitHub limit**: 100 MB per file (your PDF is <1 MB)
- **Page load**: PDFs don't slow down page load (downloaded only when clicked)
- **Bandwidth**: GitHub Pages has generous bandwidth (no worries!)

## Renaming Your Resume (Optional)

If you want a cleaner URL, rename the file:

### Before Deployment:
```bash
cd /Users/junaid/Downloads/Madhu
mv "RESUME OF MADHU.pdf" "Madhu-Kuntigorla-Resume.pdf"
```

Then update both download buttons in `index.html`:
```html
<!-- Change from: -->
<a href="RESUME OF MADHU.pdf" download>

<!-- Change to: -->
<a href="Madhu-Kuntigorla-Resume.pdf" download>
```

**New URL:**
```
https://USERNAME.github.io/madhu-portfolio/Madhu-Kuntigorla-Resume.pdf
```

Much cleaner! (But optional - current setup works perfectly)

## Tracking Resume Downloads (Optional)

If you want to know when people download your resume:

### Using Google Analytics (Free)
1. Add Google Analytics to your website
2. Set up "Event Tracking" for resume downloads
3. See download counts in analytics dashboard

### Using Formspree (Already set up)
- Formspree dashboard shows form submissions
- Resume downloads aren't tracked, but contact form submissions are!

## Security & Privacy

Your resume is **intentionally public** because:
- It's a professional document meant to be shared
- Anyone can find you via LinkedIn anyway
- Making it hard to access defeats the purpose
- Employers need easy access to your credentials

**What to avoid in public resume:**
- Home address (use city only) ✓ Already done
- Personal ID numbers
- Bank details
- Private information

Your current resume is perfect for public hosting!

## Summary - Your Setup is Perfect!

✅ Resume stored in GitHub repo (best practice)  
✅ Always available at consistent URL  
✅ Free forever  
✅ Easy to update  
✅ Fast loading  
✅ No external dependencies  
✅ Version controlled  

**No action needed** - your current setup is optimal!

## Quick Reference

**Update resume:** Replace file, commit, push  
**Share resume:** Use your GitHub Pages URL  
**Download works:** Via buttons on your website  
**Cost:** $0 forever  

---

**Questions?** Contact madhukuntigorla0410@gmail.com
