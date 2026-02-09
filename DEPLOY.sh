#!/bin/bash

# Madhu's Portfolio - GitHub Pages Deployment Script
# ===================================================

echo "🚀 Deploying Madhu's Portfolio to GitHub Pages"
echo "=============================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo -e "${RED}❌ Error: index.html not found!${NC}"
    echo "Please run this script from the Madhu folder"
    exit 1
fi

echo -e "${BLUE}📁 Found portfolio files...${NC}"
echo ""

# Step 2: Initialize git if not already done
if [ ! -d ".git" ]; then
    echo -e "${BLUE}📦 Initializing git repository...${NC}"
    git init
    echo -e "${GREEN}✓ Git initialized${NC}"
    echo ""
else
    echo -e "${GREEN}✓ Git already initialized${NC}"
    echo ""
fi

# Step 3: Add all files
echo -e "${BLUE}📝 Adding files to git...${NC}"
git add .
echo -e "${GREEN}✓ Files added${NC}"
echo ""

# Step 4: Create commit
echo -e "${BLUE}💾 Creating commit...${NC}"
git commit -m "Initial commit: Professional legal portfolio website

- Professional design with navy blue and gold color scheme
- Working Formspree contact form
- Downloadable resume
- Professional headshot
- Mobile responsive
- SEO optimized with Schema.org and Open Graph tags
- All sections: Hero, About, Experience, Education, Practice Areas, Contact
- Ready for production"

echo -e "${GREEN}✓ Commit created${NC}"
echo ""

# Step 5: Check for remote
if git remote | grep -q "origin"; then
    echo -e "${BLUE}🔗 Remote 'origin' already exists${NC}"
    echo -e "${BLUE}📤 Pushing to GitHub...${NC}"
    git branch -M main
    git push -u origin main
    echo -e "${GREEN}✓ Pushed to GitHub${NC}"
else
    echo ""
    echo -e "${RED}⚠️  Git remote not configured yet!${NC}"
    echo ""
    echo "Please run this command (replace YOUR-GITHUB-USERNAME and REPO-NAME):"
    echo ""
    echo -e "${BLUE}git remote add origin https://github.com/YOUR-GITHUB-USERNAME/REPO-NAME.git${NC}"
    echo ""
    echo "Then run this script again!"
    exit 1
fi

echo ""
echo -e "${GREEN}=============================================="
echo "✅ DEPLOYMENT SUCCESSFUL!"
echo "=============================================="
echo ""
echo "📋 NEXT STEPS:"
echo ""
echo "1. Go to your GitHub repository"
echo "2. Click 'Settings' tab"
echo "3. Click 'Pages' in the left sidebar"
echo "4. Under 'Source', select:"
echo "   - Branch: main"
echo "   - Folder: / (root)"
echo "5. Click 'Save'"
echo "6. Wait 2-3 minutes"
echo ""
echo "🌐 Your website will be live at:"
echo "https://YOUR-GITHUB-USERNAME.github.io/REPO-NAME/"
echo ""
echo -e "${NC}"
