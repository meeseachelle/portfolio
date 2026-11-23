# Case study images

Astro optimizes anything in this folder at build time — it generates responsive
widths, converts to modern formats, and adds correct dimensions to prevent
layout shift. Images in `public/` get none of that, so put them here.

## Getting them out of Notion

In Notion: `•••` menu on the page → Export → Markdown & CSV → include
subpages off. The zip contains an image folder per page.

## Where to put them

One folder per case study, named to match the MDX filename:

```
src/assets/work/
  regenerative-farming/
  maritime-shipping-adherence/
  construction-quote-processing/
  carbon-measurement/
  ai-legal-operations-agent/
```

Name files by what they show, not `image-1.png` — `journey-map.png`,
`stepper-iteration-3.png`. You'll thank yourself in a year.

## Wiring one up

**Cover image** — in the MDX frontmatter:

```yaml
cover: '../../assets/work/regenerative-farming/granular-insights-overview.png'
coverAlt: 'Granular Insights dashboard showing enrolled fields by practice change status'
```

Both the card on the home page and the case study header use this.

**Inline images** — in the MDX body:

```mdx
import { Image } from 'astro:assets';
import journeyMap from '../../assets/work/carbon-measurement/journey-map.png';

<Image src={journeyMap} alt="Customer journey map from data request through upload, marking the handoff to finance as the main friction point" />
```

## Alt text

Every image needs it, and it's read by the people evaluating your work as well
as by screen readers. Describe what the image *shows about the design decision*,
not that it is a screenshot. "Upload page with drop zone and file preview" beats
"design mockup".

Decorative images only — pass `alt=""`.
