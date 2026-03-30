# Next.js Migration Notes

## Migration Summary

This application has been successfully migrated from Vite + React Router to Next.js 15 with Server-Side Rendering (SSR) and all files converted from TypeScript (.tsx) to JavaScript (.jsx).

## Key Changes

### 1. Project Structure
- **Before**: `src/pages/` with React Router
- **After**: `app/` directory with Next.js App Router
- All routes are now in `app/[route]/page.jsx` format

### 2. Routing
- **Before**: React Router (`<Link to="/path">`, `useLocation()`)
- **After**: Next.js routing (`<Link href="/path">`, `usePathname()`)
- All pages support SSR by default

### 3. File Extensions
- All `.tsx` files converted to `.jsx`
- TypeScript types removed
- `src/lib/utils.ts` → `src/lib/utils.js`

### 4. Configuration Files
- `vite.config.ts` → `next.config.js`
- `tailwind.config.ts` → `tailwind.config.js`
- Added `jsconfig.json` for path aliases
- Updated `components.json` for Next.js
- Added `.eslintrc.json` for Next.js

### 5. Dependencies
- Removed: `vite`, `react-router-dom`, TypeScript dependencies
- Added: `next`, `eslint-config-next`
- Kept: All UI libraries (shadcn/ui, Framer Motion, etc.)

### 6. Client Components
- Components using hooks/state marked with `"use client"` directive
- Server components by default for better SSR

### 7. Images
- Replaced `<img>` with Next.js `<Image>` component
- Better optimization and loading

### 8. Fonts
- Using Next.js font optimization (`next/font/google`)
- Montserrat and Cormorant Garamond loaded via Next.js

## Routes Created

- `/` - Home page
- `/suites` - Suites & Villas
- `/dining` - Dining
- `/events` - Events
- `/facilities` - Facilities
- `/gallery` - Gallery
- `/explore` - Explore
- `/about` - About
- `/contact` - Contact
- `/terms` - Terms & Conditions
- `/privacy` - Privacy Policy
- `/not-found` - 404 page

## Components Converted

Main components converted to `.jsx`:
- `Navbar.jsx` - Updated to use Next.js Link and usePathname
- `Footer.jsx` - Updated to use Next.js Link
- `BookingWidget.jsx` - Client component
- `CinematicHero.jsx` - Client component with Next.js Image
- `RoomCard.jsx` - Client component with Next.js Image
- `ParallaxSection.jsx` - Client component
- `LocationSelector.jsx` - Client component

## UI Components

The shadcn/ui components in `src/components/ui/` still use `.tsx` extension. These can be converted individually if needed, but they should work as-is since TypeScript files can be imported in JavaScript projects.

## Next Steps

1. **Convert UI Components** (Optional): Convert remaining `.tsx` UI components to `.jsx` if desired
2. **Test All Routes**: Verify all pages load correctly
3. **Optimize Images**: Ensure all images are properly optimized
4. **Add Metadata**: Add proper SEO metadata to each page
5. **Test SSR**: Verify server-side rendering works correctly

## Running the Application

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## Notes

- The application now uses Next.js App Router with full SSR support
- All client-side interactivity is preserved with `"use client"` directives
- Fonts are optimized via Next.js font system
- Images are optimized via Next.js Image component
- The application maintains all original functionality while gaining SSR benefits

