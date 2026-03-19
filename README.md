# Defft.ai Marketing Website

Production-ready marketing site for **Defft.ai**, positioned as the **System of Recommendation™** for packaging distributors.

## Tech stack

- **Next.js App Router**
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **framer-motion**
- **recharts**

## Routes

- `/`
- `/problem`
- `/product`
- `/how-it-works`
- `/use-cases`
- `/proof`
- `/pilot`
- `/about`

## Install and run

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm start
```

## AWS Amplify deployment

This repo now includes an `amplify.yml` build spec for AWS Amplify Hosting.

Amplify will:

1. Enable `pnpm` via Corepack
2. Install dependencies with `pnpm install --frozen-lockfile`
3. Build the app with `pnpm build`
4. Publish the `.next` output

To deploy:

1. Connect the repository in **AWS Amplify Hosting**
2. Confirm Amplify detects the included `amplify.yml`
3. Add any required environment variables in the Amplify app settings
4. Deploy the branch

## Notes

- This is a server-rendered Next.js app, not a static SPA
- No Amplify backend resources are configured in this repo
- The included config is for **Amplify Hosting** only

# Defft-Website
