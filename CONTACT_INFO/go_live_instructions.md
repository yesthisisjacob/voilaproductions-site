# Implementation & Deployment Guide

Since GitHub Pages serves static files, it cannot process backend scripts (like PHP). This guide outlines how to use a serverless handler to make the form functional.

## Step 1: Set up the Form Backend

1. Go to [Formspree.io](https://formspree.io/).
2. Create a new form and name it (e.g., "Portfolio Contact").
3. Copy the **Endpoint ID** (the string at the end of the URL, like `mjvnvpzg`).
4. In `contact-form-html.md`, replace `YOUR_UNIQUE_ID` with your Endpoint ID.

## Step 2: Add to GitHub Repository

1. Save the HTML code into your `index.html` (or `contact.html`).
2. Save the CSS code into your `styles.css`.
3. Ensure the CSS file is linked in your HTML `<head>`:
   `<link rel="stylesheet" href="styles.css">`

## Step 3: Deployment

1. Commit and push your changes to your GitHub repository.
2. Visit your site URL.
3. Submit a test entry. Formspree will ask you to "Activate" the form via an email they send to you.

## Step 4: LLM Customization

If you want an LLM to modify this later:

- **To change colors:** Prompt it to "Update the CSS variables for a dark mode aesthetic."
- **To add fields:** Prompt it to "Add a 'Phone Number' text input before the budget field."
