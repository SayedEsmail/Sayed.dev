This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Portfolio content and PDF

- `src/data/work.ts`: company, freelance, and personal work; source for project cards, experience, and the PDF preview.
- `src/data/projects.ts`: the three featured technical case studies.
- `docs/portfolio-plan.md`: implementation plan and content still needed.
- `docs/content-audit.md`: resume reconciliation and screenshot provenance.
- `/portfolio`: nine-page print preview; `/Sayed_Esmail_Portfolio.pdf`: downloadable export.
- `/Sayed_Esmail_Resume.pdf`: the user-supplied resume (kept unchanged).

Install with `corepack pnpm install --frozen-lockfile` (pnpm 8.15.9 is pinned), then run `npm run dev`. In another terminal, regenerate the PDF with:

```sh
CHROME_PATH=/opt/google/chrome/chrome npm run portfolio:pdf
```

The export uses `npx agent-browser` and an installed Chrome/Chromium. Set `CHROME_PATH` for your system or omit it to use agent-browser's configured browser. Set `PORTFOLIO_ORIGIN` if the running server is not at `http://localhost:3000`. Regenerate and inspect the PDF whenever project content or screenshots change, and commit the resulting file along with the source.
