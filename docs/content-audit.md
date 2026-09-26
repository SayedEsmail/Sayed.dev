# Work content audit

This audit records the source details and conflicts considered when creating `src/data/work.ts`. The new entries use the supplied CV and task brief. They do not add stack details, dates, project URLs, or measured outcomes that those sources do not support.

## Date and attribution notes

- **Schoolz / Routz:** The CV says “Schoolz (Routz Platform)” and gives Jan 2025–Present. The work entry retains that employer attribution and period.
- **Untap:** The CV's experience heading gives Dec 2022–Apr 2026. The summary's “Present” applies to Schoolz, not Untap. The prior project data describes Untap as a featured project but does not resolve this date. The new entry uses the explicit CV range.
- **AutoTager:** The CV gives Jan 2022–Dec 2022. The request identifies the company as AutoTager 2022; the more precise CV range is used.
- **Botme:** The CV gives Jan 2018–Jan 2022.
- **MoreCreative, Enjaz, MTC, and Webdivs:** The CV groups all four under a combined 2014–2018 range and does not provide individual dates, titles, or project assignments. They are therefore represented as one grouped experience; the combined period is labeled as such.
- **Zads:** The CV calls this a personal project and gives 2024–Present. At the user’s request, it appears first in the freelance section, retaining its founder role and personal-product attribution.
- **Freelance entries:** The task brief supplies project descriptions. It does not provide dates for Yanfaa, Wellpal, FundSeer, or Kadouscope, so none are added. Movex is dated 2020 as specified in the brief. The brief does not identify specific client legal names, so entries use “Freelance client project.”

## Unsupported metrics in the existing project data

The supplied CV contains two quantified outcomes: Untap's 40% reduction in initial dashboard load time and AutoTager's 50% reduction in design-to-development handoff time. It also states Botme supported 5,000+ active business users each month. Other numerical claims previously present in `src/data/projects.ts` are not supported by the supplied CV or task brief and should not be repeated in new work content without verification. Examples include Routz estimates of approximately 40%, 35%, 50%, 25%, 95%, and 70%; Routz sub-second updates; Untap estimates of approximately 40%, 60%, 15%, and 45%; and Zads estimates of approximately 20%, 30%, 90%, and 40%. Architecture counts and implementation specifics in that file are also not substantiated by the CV unless independently verified.

The updated case studies omit these unsupported metrics and use concise CV-backed descriptions. This does not assert that the previous claims were false; they require confirmation before reuse.

## Current public site screenshots

The Yanfaa and WellPal screenshots in `public/projects/` were captured from the public URLs supplied for this portfolio in September 2026 at a 1440 × 1000 viewport. They document the current public websites, which may have changed since the freelance work was delivered; the captions in `src/data/work.ts` state this limitation.

- Yanfaa: `https://yanfaa.com/` (browser resolved the homepage to `/home`); captured as `public/projects/yanfaa/current-site.png`.
- WellPal: `https://sa.wellpal.net/en/`; the live page identifies itself as “WellPal Web SA” and currently displays a health and wellness retail storefront. Captured as `public/projects/wellpal/current-site.png`.

The live links supplied for Routz, Untap, and Zads are recorded as `https://routz.me`, `https://untap.tech`, and `https://zads.app`, respectively. They were added as provided; this screenshot pass did not verify those destinations.
