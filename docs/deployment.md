# Deployment Guide

This guide covers deploying the Public Sector IT Solutions website to various hosting platforms.

## Prerequisites

- Node.js 18+
- Git repository access
- Environment variables configured

## Environment Variables

Before deployment, ensure you have the following environment variables set:

```env
VITE_SITE_URL=https://publicsectoritsolutions.ie
VITE_SITE_NAME="Public Sector IT Solutions"
VITE_COMPANY_NAME="Public Sector IT Solutions"
VITE_CONTACT_EMAIL=info@publicsectoritsolutions.ie
VITE_CONTACT_PHONE="+353 1 234 5678"
VITE_LINKEDIN_URL=https://linkedin.com/company/public-sector-it-solutions
VITE_TWITTER_URL=https://twitter.com/publicsectorit
```

## Netlify Deployment (Recommended)

### Automatic Deployment

1. **Connect Repository**
   - Log in to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your Git repository

2. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Environment Variables**
   - Go to Site settings > Environment variables
   - Add all required environment variables

4. **Custom Domain**
   - Go to Domain settings
   - Add your custom domain
   - Configure DNS records as instructed

### Manual Deployment

```bash
# Build the project
npm run build

# Install Netlify CLI
npm install -g netlify-cli

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

## Vercel Deployment

### Automatic Deployment

1. **Connect Repository**
   - Log in to [Vercel](https://vercel.com)
   - Import your Git repository

2. **Build Settings**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

3. **Environment Variables**
   - Add environment variables in project settings

### Manual Deployment

```bash
# Build the project
npm run build

# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel --prod
```

## AWS S3 + CloudFront

### Prerequisites

- AWS CLI configured
- S3 bucket created
- CloudFront distribution set up

### Deployment Steps

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload to S3**
   ```bash
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```

3. **Invalidate CloudFront cache**
   ```bash
   aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
   ```

### Automated Deployment Script

Create `deploy-aws.sh`:

```bash
#!/bin/bash
set -e

echo "Building project..."
npm run build

echo "Uploading to S3..."
aws s3 sync dist/ s3://your-bucket-name --delete

echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"

echo "Deployment complete!"
```

## GitHub Pages

### Setup

1. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Select source: GitHub Actions

2. **Create Workflow**
   Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
      env:
        VITE_SITE_URL: https://yourusername.github.io/public-sector-it-solutions
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Performance Optimization

### Build Optimization

The project is configured with several optimizations:

- **Code Splitting**: Automatic route-based splitting
- **Tree Shaking**: Removes unused code
- **Asset Optimization**: Minifies CSS and JavaScript
- **Source Maps**: Available for production debugging

### Caching Strategy

Configure your hosting platform with these cache headers:

```
# Static assets (1 year)
/assets/*
  Cache-Control: public, max-age=31536000, immutable

# HTML files (no cache)
/*.html
  Cache-Control: no-cache

# Service worker
/sw.js
  Cache-Control: no-cache
```

## Monitoring and Analytics

### Performance Monitoring

1. **Google PageSpeed Insights**
   - Test your deployed site
   - Monitor Core Web Vitals

2. **Lighthouse CI**
   - Integrate into your deployment pipeline
   - Set performance budgets

### Error Tracking

Consider integrating error tracking services:

- Sentry
- LogRocket
- Bugsnag

### Analytics

Add Google Analytics 4:

```env
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

## Security Considerations

### Content Security Policy

Add CSP headers to your hosting platform:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com;
```

### HTTPS

Ensure HTTPS is enabled on your hosting platform:

- Netlify: Automatic HTTPS
- Vercel: Automatic HTTPS
- AWS: Configure SSL certificate in CloudFront

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (18+)
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Environment Variables**
   - Ensure all required variables are set
   - Variables must be prefixed with `VITE_`

3. **Routing Issues**
   - Configure redirects for SPA routing
   - Netlify: `_redirects` file
   - Vercel: `vercel.json` configuration

### Support

For deployment issues:
- Check hosting platform documentation
- Review build logs
- Contact support team

## Rollback Strategy

### Netlify
- Use deploy history to rollback
- Or redeploy previous Git commit

### Vercel
- Use deployment history
- Or redeploy previous commit

### AWS
- Keep previous build artifacts
- Upload previous version to S3
