# Dependencies Documentation

## Current Dependencies (Next.js Migration)

All previous dependencies have been preserved except for build/routing tools that were replaced with Next.js equivalents.

### ✅ Preserved Dependencies

All UI and utility libraries from the original project are still included:

#### UI Component Libraries
- All `@radix-ui/react-*` packages (accordion, alert-dialog, avatar, checkbox, dialog, dropdown-menu, etc.)
- `vaul` - For drawer components
- `embla-carousel-react` - For carousel components
- `recharts` - For chart components
- `react-resizable-panels` - For resizable panels
- `lucide-react` - Icon library

#### Form & Validation
- `react-hook-form` - Form handling
- `@hookform/resolvers` - Form validation resolvers
- `zod` - Schema validation

#### Styling & Utilities
- `tailwind-merge` - Tailwind class merging
- `tailwindcss-animate` - Tailwind animations
- `clsx` - Conditional class names
- `class-variance-authority` - Component variants

#### State Management & Data
- `@tanstack/react-query` - Server state management
- `sonner` - Toast notifications
- `next-themes` - Theme management

#### Date & Time
- `date-fns` - Date utilities
- `react-day-picker` - Date picker component

#### Other Utilities
- `cmdk` - Command menu
- `input-otp` - OTP input component

### 🔄 Replaced Dependencies

These were replaced with Next.js equivalents:

| Removed | Replaced With | Reason |
|---------|---------------|--------|
| `vite` | `next` | Next.js includes its own build system |
| `react-router-dom` | Next.js App Router | Next.js has built-in routing |
| `@vitejs/plugin-react-swc` | Built into Next.js | Next.js includes React support |

### ❌ Removed Dependencies

These were removed as they're not needed for JavaScript-only Next.js:

- `typescript` - Not needed (using `.jsx` files)
- `@types/react` - Not needed (no TypeScript)
- `@types/react-dom` - Not needed (no TypeScript)
- `@types/node` - Not needed (no TypeScript)
- `typescript-eslint` - Not needed (no TypeScript)
- `lovable-tagger` - Development tool specific to Lovable
- `@eslint/js` - Replaced with `eslint-config-next`
- `eslint-plugin-react-hooks` - Included in `eslint-config-next`
- `eslint-plugin-react-refresh` - Not needed for Next.js
- `globals` - Not needed

### ✅ Added Dependencies

- `next` - Next.js framework
- `eslint-config-next` - Next.js ESLint configuration

### 📦 Dev Dependencies

All styling and build dev dependencies are preserved:
- `@tailwindcss/typography` - Typography plugin
- `autoprefixer` - CSS autoprefixer
- `postcss` - CSS processor
- `tailwindcss` - Tailwind CSS
- `eslint` - Linting
- `eslint-config-next` - Next.js ESLint config

## Summary

✅ **All functional dependencies preserved** - No UI libraries, utilities, or features were removed
🔄 **Build tools replaced** - Vite → Next.js (better SSR support)
❌ **TypeScript removed** - Using JavaScript (`.jsx`) as requested
✅ **All features intact** - Everything works the same, just with Next.js SSR benefits

## Installation

Run `npm install` to install all dependencies. All packages are compatible with Next.js 15.

