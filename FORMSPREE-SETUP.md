# Formspree Setup Guide

## What is Formspree?

Formspree is a free service that allows your contact form to send emails directly to your inbox without needing a backend server. Perfect for static websites hosted on GitHub Pages!

## Setup Instructions (5 minutes)

### Step 1: Create a Formspree Account

1. Go to [https://formspree.io/](https://formspree.io/)
2. Click **"Sign Up"** (top right)
3. Sign up using:
   - Email: `madhukuntigorla0410@gmail.com`
   - Or use GitHub account for easier integration

### Step 2: Create a New Form

1. After logging in, click **"+ New Project"**
2. Name it: `Madhu Portfolio` (or any name you prefer)
3. Click **"+ New Form"**
4. Form name: `Contact Form`
5. Click **"Create Form"**

### Step 3: Get Your Form Endpoint

After creating the form, you'll see:

```
https://formspree.io/f/YOUR_FORM_ID
```

**Example:** `https://formspree.io/f/xwpevbyz`

Copy this entire URL!

### Step 4: Update Your Website

Open `index.html` and find this line (around line 295):

```html
<form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Replace `YOUR_FORM_ID` with your actual Form ID:

```html
<form class="contact-form" id="contactForm" action="https://formspree.io/f/xwpevbyz" method="POST">
```

### Step 5: Test Your Form

1. Save the file
2. Push to GitHub (if already deployed) or open locally
3. Fill out the contact form
4. Click "Send Message"
5. Check your email inbox for the message!

## Free Plan Features

✅ **100 submissions per month** (plenty for a portfolio site)
✅ **Email notifications** when someone submits the form
✅ **Spam filtering** built-in
✅ **Auto-responder** option to send confirmation emails
✅ **Export submissions** to CSV

## Additional Configuration (Optional)

### Enable Auto-Responder

1. In Formspree dashboard, go to your form
2. Click **"Settings"**
3. Enable **"Email Autoresponder"**
4. Customize the message visitors receive after submission

### Add reCAPTCHA (Spam Protection)

1. In form settings, click **"Integrations"**
2. Enable **"reCAPTCHA"**
3. Follow the instructions to add Google reCAPTCHA

### Email Notifications

By default, you'll receive emails at the account email. To change:
1. Go to **"Settings"** → **"Notifications"**
2. Add additional email addresses if needed

## Current Fallback

If Formspree is not configured (form ID not updated), the website will:
- Automatically fall back to `mailto:` functionality
- Open the user's default email client
- Pre-fill the email with form data

So the form **works immediately** even without Formspree setup!

## Troubleshooting

### Form not sending

1. Check that you replaced `YOUR_FORM_ID` with actual ID
2. Verify you're using `https://` (not `http://`)
3. Check Formspree dashboard for submission logs

### Not receiving emails

1. Check spam folder
2. Verify email in Formspree account settings
3. Wait a few minutes (sometimes delayed)

### Getting too many spam submissions

1. Enable reCAPTCHA in Formspree settings
2. Add honeypot field (Formspree does this automatically)

## Cost

- **Free Plan**: 100 submissions/month (perfect for portfolio)
- **Gold Plan**: $10/month for unlimited submissions (only if needed)

For a portfolio website, the free plan is more than sufficient!

## Need Help?

- Formspree Documentation: https://help.formspree.io/
- Formspree Support: help@formspree.io
- Contact: madhukuntigorla0410@gmail.com

---

**Quick Summary:**
1. Sign up at formspree.io
2. Create new form
3. Copy form endpoint URL
4. Replace `YOUR_FORM_ID` in index.html
5. Test and enjoy! ✓
