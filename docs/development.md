# Development Guide

This guide covers the development workflow, coding standards, and best practices for the Public Sector IT Solutions website.

## Development Setup

### Prerequisites

- Node.js 18+
- npm or yarn
- Git
- VS Code (recommended)

### Initial Setup

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

4. **Start development server**
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components (Header, Footer, Navigation)
│   ├── business/        # Business-specific components
│   ├── common/          # Reusable components (ErrorBoundary, LoadingSpinner)
│   └── ui/              # shadcn/ui components
├── data/                # Static business data
│   ├── company.ts       # Company information
│   ├── services.ts      # Service offerings
│   └── projects.ts      # Portfolio projects
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and configurations
│   ├── seo.ts          # SEO utilities
│   ├── images.ts       # Image optimization
│   └── utils.ts        # General utilities
├── pages/               # Page components
├── styles/              # Global styles
└── types/               # TypeScript type definitions
```

## Coding Standards

### TypeScript

- Use strict TypeScript configuration
- Define interfaces for all props and data structures
- Avoid `any` type - use proper typing
- Use type assertions sparingly

```typescript
// Good
interface ServiceProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

// Avoid
const service: any = { ... };
```

### React Components

- Use functional components with hooks
- Follow naming conventions: PascalCase for components
- Use TypeScript interfaces for props
- Implement proper error boundaries

```typescript
// Component structure
interface ComponentProps {
  // Props definition
}

const Component = ({ prop1, prop2 }: ComponentProps) => {
  // Hooks
  // Event handlers
  // Render logic
  
  return (
    // JSX
  );
};

export default Component;
```

### File Naming

- Components: PascalCase (`HomePage.tsx`)
- Utilities: camelCase (`seo.ts`)
- Constants: UPPER_SNAKE_CASE
- Directories: lowercase with hyphens

### CSS/Styling

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Use semantic class names for custom CSS
- Maintain consistent spacing scale

```tsx
// Good
<div className="flex flex-col gap-4 md:flex-row md:gap-8">

// Avoid inline styles
<div style={{ display: 'flex', gap: '16px' }}>
```

## Component Guidelines

### Layout Components

Located in `src/components/layout/`:

- **Layout.tsx**: Main layout wrapper with semantic HTML
- **Navigation.tsx**: Site navigation with accessibility features
- **Footer.tsx**: Site footer with company information

### Business Components

Located in `src/components/business/`:

- Service-specific components
- Project showcase components
- Contact forms and business logic

### Common Components

Located in `src/components/common/`:

- **ErrorBoundary.tsx**: Error handling wrapper
- **LoadingSpinner.tsx**: Loading states
- **ResponsiveImage.tsx**: Optimized image component
- **SEOHead.tsx**: Dynamic meta tag management

## Data Management

### Static Data

Business data is stored in `src/data/`:

- **company.ts**: Company information, team, contact details
- **services.ts**: Service offerings and categories
- **projects.ts**: Portfolio projects and case studies

### State Management

- Use React's built-in state for component state
- TanStack Query for server state (if needed)
- Context API for global state (sparingly)

## SEO Implementation

### Page-Level SEO

Each page should implement SEO:

```typescript
import SEOHead from '@/components/common/SEOHead';
import { generatePageSEO, generateStructuredData } from '@/lib/seo';

const HomePage = () => {
  const seo = generatePageSEO('home');
  const structuredData = generateStructuredData('organization', {});

  return (
    <>
      <SEOHead seo={seo} structuredData={structuredData} />
      {/* Page content */}
    </>
  );
};
```

### Meta Tags

- Use semantic HTML5 elements
- Include proper ARIA labels
- Implement structured data (JSON-LD)
- Optimize for social media sharing

## Accessibility

### Requirements

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Proper color contrast ratios

### Implementation

```typescript
// Semantic HTML
<main role="main" id="main-content">
  <section aria-labelledby="services-heading">
    <h2 id="services-heading">Our Services</h2>
  </section>
</main>

// ARIA labels
<button 
  aria-label="Open navigation menu"
  aria-expanded={isMenuOpen}
>
  <Menu aria-hidden="true" />
</button>

// Focus management
<a 
  href="#main-content"
  className="sr-only focus:not-sr-only"
>
  Skip to main content
</a>
```

## Performance Optimization

### Image Optimization

Use the ResponsiveImage component:

```typescript
import ResponsiveImage from '@/components/common/ResponsiveImage';
import { imageConfigs } from '@/lib/images';

<ResponsiveImage
  src={imageConfigs.hero.src}
  alt={imageConfigs.hero.alt}
  priority={true}
  sizes="100vw"
/>
```

### Code Splitting

- Automatic route-based splitting
- Lazy load non-critical components
- Use dynamic imports for large dependencies

```typescript
// Lazy loading
const HeavyComponent = lazy(() => import('./HeavyComponent'));

// Usage
<Suspense fallback={<LoadingSpinner />}>
  <HeavyComponent />
</Suspense>
```

## Testing

### Unit Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

### E2E Testing

```bash
# Run Playwright tests
npm run test:e2e
```

### Manual Testing

- Test on multiple devices and browsers
- Verify accessibility with screen readers
- Check performance with Lighthouse

## Git Workflow

### Branch Naming

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring

### Commit Messages

Follow conventional commits:

```
feat: add responsive image component
fix: resolve navigation accessibility issue
docs: update deployment guide
refactor: optimize bundle size
```

### Pull Request Process

1. Create feature branch from `main`
2. Implement changes with tests
3. Update documentation if needed
4. Create pull request with description
5. Request code review
6. Merge after approval

## Build Process

### Development Build

```bash
npm run dev          # Start development server
npm run build:dev    # Development build
```

### Production Build

```bash
npm run build        # Production build
npm run preview      # Preview production build
```

### Build Optimization

- Tree shaking removes unused code
- Code splitting for better caching
- Asset optimization and minification
- Source maps for debugging

## Environment Variables

### Development

```env
NODE_ENV=development
VITE_SITE_URL=http://localhost:8080
VITE_CONTACT_EMAIL=dev@example.com
```

### Production

```env
NODE_ENV=production
VITE_SITE_URL=https://publicsectoritsolutions.ie
VITE_CONTACT_EMAIL=info@publicsectoritsolutions.ie
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

## Debugging

### Development Tools

- React Developer Tools
- Redux DevTools (if using Redux)
- Lighthouse for performance
- axe DevTools for accessibility

### Common Issues

1. **Build Errors**
   - Check TypeScript errors
   - Verify import paths
   - Check environment variables

2. **Runtime Errors**
   - Use ErrorBoundary components
   - Check browser console
   - Verify API responses

3. **Performance Issues**
   - Use React Profiler
   - Check bundle size
   - Optimize images and assets

## Code Quality

### Linting

```bash
npm run lint         # Run ESLint
npm run lint:fix     # Fix auto-fixable issues
```

### Formatting

```bash
npm run format       # Format code with Prettier
```

### Pre-commit Hooks

- Lint staged files
- Run type checking
- Format code automatically

## Deployment

See [deployment.md](./deployment.md) for detailed deployment instructions.

## Support

For development questions:
- Check existing documentation
- Review component examples
- Ask team members
- Create GitHub issues for bugs
