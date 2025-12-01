# Public Sector IT Solutions

A professional website for Public Sector IT Solutions, Ireland's leading provider of digital transformation services for government organizations.

## 🏛️ About

Public Sector IT Solutions specializes in delivering innovative IT solutions and digital transformation services tailored specifically for the Irish public sector. We help government organizations modernize their operations, improve citizen services, and enhance operational efficiency.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, TypeScript, and Vite for optimal performance
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Comprehensive meta tags, structured data, and sitemap
- **Accessibility Compliant**: WCAG 2.1 AA compliant with semantic HTML and ARIA labels
- **Performance Focused**: Optimized images, lazy loading, and code splitting
- **Error Handling**: Comprehensive error boundaries and loading states

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Routing**: React Router DOM
- **State Management**: TanStack Query
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Linting**: ESLint with TypeScript support

## 📁 Project Structure

```
public-sector-it-solutions/
├── public/
│   ├── images/           # Optimized images
│   ├── sitemap.xml      # SEO sitemap
│   └── robots.txt       # Search engine directives
├── src/
│   ├── components/
│   │   ├── layout/      # Header, Footer, Navigation
│   │   ├── business/    # Business-specific components
│   │   ├── common/      # Reusable components
│   │   └── ui/          # shadcn/ui components
│   ├── data/           # Business data (services, projects, company)
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utilities and configurations
│   └── pages/          # Page components
├── docs/               # Documentation
├── .env.example        # Environment variables template
└── README.md
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd public-sector-it-solutions
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration values.

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:8080`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Recommended Platforms

1. **Netlify** (Recommended)
   - Automatic deployments from Git
   - Built-in form handling
   - Global CDN
   - Free SSL certificates

2. **Vercel**
   - Excellent performance
   - Automatic deployments
   - Edge functions support

3. **AWS S3 + CloudFront**
   - Enterprise-level control
   - Custom domain support
   - Advanced caching

### Build Configuration

The project is configured for optimal production builds:

- **Code Splitting**: Automatic route-based splitting
- **Asset Optimization**: Minified CSS and JavaScript
- **Image Optimization**: Responsive images with lazy loading
- **SEO**: Pre-configured meta tags and structured data

## 🔧 Configuration

### Environment Variables

Create a `.env` file based on `.env.example`:

```env
VITE_SITE_URL=https://yourdomain.com
VITE_CONTACT_EMAIL=contact@yourdomain.com
VITE_COMPANY_NAME="Your Company Name"
VITE_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### SEO Configuration

SEO settings can be customized in `src/lib/seo.ts`:

- Page-specific meta tags
- Open Graph data
- Structured data (JSON-LD)
- Sitemap generation

## 📊 Performance

The website is optimized for performance:

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Minimized with tree shaking
- **Image Optimization**: WebP format with fallbacks

## ♿ Accessibility

Fully compliant with WCAG 2.1 AA standards:

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance

## 🔒 Security

Security best practices implemented:

- Content Security Policy headers
- XSS protection
- HTTPS enforcement
- Secure cookie settings
- Input validation and sanitization

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software owned by Public Sector IT Solutions.

## 📞 Support

For technical support or questions:

- **Email**: info@publicsectoritsolutions.ie
- **Phone**: +353 1 234 5678
- **Address**: 123 Government Quarter, Dublin, D02 XY12, Ireland

## 🏆 Certifications

- ISO 27001 Certified
- Government Security Clearance
- GDPR Compliant
- Cyber Essentials Plus

---

**Public Sector IT Solutions** - Transforming Government Through Technology
