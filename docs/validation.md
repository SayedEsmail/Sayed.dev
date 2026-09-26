# Portfolio validation — 26 September 2026

- ESLint completed without findings.
- Next.js production compilation, TypeScript, and static-page generation completed for home, work, experience, all three case studies, articles, and portfolio preview.
- Browser checked desktop home/work and mobile work/about/Untap at 390 × 844. No horizontal overflow or browser errors were reported on those checked views.
- Mobile menu opens with `aria-expanded=true`, navigates to About, and closes on selection.
- Freelance anchor resolves with no missing category anchors.
- All 11 work entries render; the five company entries include the four earlier agencies as one CV-backed group.
- Home, work, about, three case-study URLs, and portfolio preview returned HTTP 200. An unknown case study returned 404.
- Both download URLs returned HTTP 200 with `application/pdf` content type.
- The final PDF has nine pages, includes all named projects/companies, and contains embedded screenshots. Inspected cover, Routz, company-history, Yanfaa, and Wellpal pages visually; checked extracted text for every named entry.
- PDF export uses Chrome's default Letter output with the CSS print layout scaled to fit. There are no blank overflow pages.
- The original supplied CV is unchanged; legacy assets are retained.
- No production deployment was performed.

## Content limitations

Original screenshots have not been supplied for FundSeer, Kadouscope, Movex, AutoTager, Botme, or earlier agency work. Their summaries and contributions are present, with typographic covers on the website. Yanfaa and Wellpal images show their current public sites, with explicit provenance captions. More granular earlier-company dates require user input.
