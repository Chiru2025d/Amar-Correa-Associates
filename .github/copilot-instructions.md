# Project Guidelines

## Build and Verification
- Install dependencies with npm install.
- Start local development with npm run dev.
- Create a production build with npm run build.
- Run lint checks with npm run lint.
- There is currently no automated test script in package.json.

## Architecture
- This is a Next.js App Router project. Routes live under src/app.
- Root layout is defined in src/app/layout.js and renders global wrappers like DisclaimerModal, Footer, and ContactFloating.
- The home route composes section components through src/components/home/index.jsx.
- Expertise detail pages use a dynamic segment at src/app/expertise/[slug]/page.jsx with generateStaticParams for static generation.

## Conventions
- The codebase uses JavaScript and JSX (no TypeScript).
- Use the @/* import alias (mapped to src/* in jsconfig.json) for internal imports when practical.
- Prefer existing styling patterns:
  - Component-scoped styles with .module.css files.
  - Shared global styles in src/app/globals.css.
- Much of the UI is implemented as client components. Keep or remove "use client" intentionally based on whether client hooks/browser APIs are needed.
- Content for expertise/legal pages is currently hardcoded in page/component files. Follow the existing data shape when extending content.

## Static Export Constraints
- next.config.mjs sets output: "export" and images.unoptimized: true.
- Prefer patterns compatible with static export. Avoid introducing server-only runtime features unless the deployment strategy is also updated.
- For new dynamic routes that should be exported, provide static params generation.

## Known Gotchas
- The contact form UI exists in src/components/contact/contact-form.jsx, but there is no API route or submit handler wired to a backend in this repository.
- Be careful when changing hydration-related behavior. The layout currently uses suppressHydrationWarning.

## Documentation
- Keep this file minimal and project-wide.
- For setup and run basics, refer to README.md.