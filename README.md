# Kuntigorla Madhu - Legal Portfolio Website

A professional, modern portfolio website for Legal Associate Kuntigorla Madhu, specializing in Corporate & Commercial Law.

## 🌟 Features

- **Modern & Professional Design**: Clean, sophisticated design with a legal-professional aesthetic
- **Professional Headshot**: High-quality photo in About section with elegant overlay
- **Downloadable Resume**: One-click resume download buttons in hero and about sections
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Custom animations and micro-interactions for enhanced user experience
- **Interactive Elements**: Parallax effects, scroll animations, and hover states
- **Working Contact Form**: Formspree integration with fallback to mailto functionality
- **SEO Optimized**: Proper meta tags and semantic HTML for better search engine visibility
- **Fast Performance**: Optimized code with lazy loading and debounced scroll events

## 🎨 Design Highlights

- **Color Palette**: Deep navy blue (#0a1f44), gold accents (#d4af37), crisp white
- **Typography**: Playfair Display (serif) for headings, Inter (sans-serif) for body
- **Sections**: Hero, About, Experience, Education, Practice Areas, Legal Knowledge, Contact

## 📂 File Structure

```
Madhu/
├── index.html          # Main HTML file
├── styles.css          # Complete styling with responsive design
├── script.js           # Interactive JavaScript functionality
├── favicon.svg         # Website favicon
├── RESUME OF MADHU.pdf # Original resume document
└── README.md           # This file
```

## 🚀 Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in to Madhu's account
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Name it: `madhu-portfolio` (or any preferred name)
5. Keep it **Public**
6. Do NOT initialize with README (we already have one)
7. Click **"Create repository"**

### Step 2: Push Code to GitHub

Open Terminal/Command Prompt in the `Madhu` folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Professional legal portfolio website"

# Add your GitHub repository as remote
# Replace 'USERNAME' with Madhu's GitHub username
git remote add origin https://github.com/USERNAME/madhu-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** section (left sidebar)
4. Under **"Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **"Save"**
6. Wait 1-2 minutes for deployment

### Step 4: Access Your Website

Your website will be live at:
```
https://USERNAME.github.io/madhu-portfolio/
```

Replace `USERNAME` with Madhu's actual GitHub username.

## 🔧 Customization

### Update Contact Information

Edit `index.html` and update:
- Email address: Search for `madhukuntigorla0410@gmail.com`
- Phone number: Search for `+919133944125`
- LinkedIn URL
- Address details

### Change Colors

Edit `styles.css` and modify the CSS custom properties in `:root`:
```css
:root {
    --primary-navy: #0a1f44;
    --gold-accent: #d4af37;
    /* Modify other colors as needed */
}
```

### Add/Remove Sections

Edit `index.html` to add or remove sections. Make sure to update the navigation menu accordingly.

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance

- **Semantic HTML5** for better SEO and accessibility
- **CSS Grid & Flexbox** for modern, responsive layouts
- **Optimized animations** with CSS transforms and transitions
- **Debounced scroll events** for better performance
- **Intersection Observer API** for efficient scroll animations

## 📧 Contact Form

The contact form is configured to work with **Formspree** (free service, 100 submissions/month).

### Setup Formspree (5 minutes):
1. Go to [formspree.io](https://formspree.io) and sign up
2. Create a new form and get your endpoint
3. Open `index.html` and replace `YOUR_FORM_ID` with your actual ID
4. Done! Form submissions will go straight to your email

**Fallback**: If Formspree is not configured, the form automatically uses `mailto:` functionality.

📖 **Detailed Guide**: See `FORMSPREE-SETUP.md` for step-by-step instructions

## 🔒 Privacy & Security

- No cookies or tracking scripts
- No external dependencies (except Google Fonts)
- All data stays on the client side
- No analytics or third-party services

## 📝 License

© 2026 Kuntigorla Madhu. All rights reserved.

The information provided on this website is for general informational purposes only and does not constitute legal advice.

## 🤝 Support

For any issues or questions:
- Email: madhukuntigorla0410@gmail.com
- LinkedIn: [Madhu Kuntigorla](https://www.linkedin.com/in/madhu-kuntigorla-939a3930a)

---

**Built with:** HTML5, CSS3, Vanilla JavaScript  
**Fonts:** Playfair Display, Inter (Google Fonts)  
**Hosted on:** GitHub Pages  
**Design:** Custom, Professional Legal Theme
