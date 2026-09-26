# Portfolio update plan

## Scope and content
- Preserve the existing dark/mint identity and the three featured home case studies.
- Use the supplied resume as the source for employers, dates, roles, and supported outcomes.
- Present company work and freelance work as two primary sections; label Zads as an independent product.
- Include Schoolz/Routz, Untap, AutoTager, Botme, and the grouped MoreCreative / Enjaz / MTC / Webdivs experience.
- Include Yanfaa, Wellpal, FundSeer, Kadouscope, and Movex with explicit personal contributions.
- Keep all work data in `src/data/work.ts`; case-study depth lives in `src/data/projects.ts`.

## Presentation
- Give each entry a project summary, role, available dates, contributions, technology tags, and verified or user-supplied links.
- Reuse original screenshots for Routz, Untap, and Zads.
- Capture the user-supplied current Yanfaa and Wellpal sites and clearly caption their provenance.
- Use typographic covers for entries without screenshots. Do not fabricate dashboards or present unrelated public designs as delivered work.
- Add accessible category navigation, mobile layouts, focus states, reduced-motion support, and a skip link.
- Correct metadata origin and image sizing. Remove JavaScript-dependent hidden content.

## Downloadable materials
- Keep the supplied resume unchanged and make it downloadable separately.
- Add `/portfolio`, an nine-page print layout sharing the work data.
- Generate `public/Sayed_Esmail_Portfolio.pdf` and link it from navigation, home, work, and about.
- Re-export the PDF whenever work content changes.

## Validation
- Run ESLint and production build.
- Browse home, projects, about, all case studies, and the PDF preview.
- Check mobile navigation, category anchors, image loading, overflow, and download responses.
- Inspect the generated PDF page count, extracted text, and visual page layout.

## Remaining content inputs
Original historical screenshots for FundSeer, Kadouscope, Movex, AutoTager, Botme, and earlier agency work are not supplied. Current Yanfaa/Wellpal captures can be replaced by the user's original delivered-work screenshots later. Individual dates for the earlier agencies remain grouped exactly as in the resume.
