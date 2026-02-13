import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Enable React integration for interactive components
  integrations: [react()],
  
  // Configure for hybrid rendering (SSR + SSG)
  // This allows mixing static and server-rendered pages
  output: 'hybrid',
  
  // Site configuration for SEO and deployment
  site: 'https://community-data-libraries.github.io',
  base: '/web',
  
  // Enable content collections
  // Content collections provide type-safe content management
  experimental: {},
  
  // Vite configuration for development
  vite: {
    // Path aliases are configured in tsconfig.json
    ssr: {
      // Externalize dependencies that should not be bundled
      noExternal: [],
    },
  },
});
