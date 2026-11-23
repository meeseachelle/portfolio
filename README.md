# michellechangdesign.com

Portfolio site for Michelle Chang, product designer. Built with Astro,
Tailwind v4, and MDX. Deployed to Cloudflare Workers Static Assets.

## Running it

```bash
npm install
npm run dev           # local dev server
npm run build         # static build to dist/
npm run check         # type + content schema check
npm run preview:edge  # build, then serve through the real Workers runtime
npm run deploy        # build and push live
```

## Deploying

Hosted on **Cloudflare Workers Static Assets** rather than Pages. Pages still
works and isn't being retired, but Cloudflare is folding its features into
Workers and shipping new capability there first — so this is the surface that
stays current.

There is no Worker script. `wrangler.jsonc` points at `dist/` and Cloudflare
serves it from the edge, which is why the config has no `main` entry.

**First deploy**

```bash
npx wrangler login     # opens the browser, authorizes once
npm run deploy
```

That returns a `*.workers.dev` URL. To use a custom domain, add the domain to
your Cloudflare account, then in the dashboard: Workers & Pages → this worker →
Settings → Domains & Routes → Add custom domain. Also update `site` in
`astro.config.mjs`, since canonical URLs and the sitemap are generated from it.

**Deploy on git push**

In the Cloudflare dashboard, connect the GitHub repo under Workers & Pages, with
build command `npm run build` and output directory `dist`. Pull requests get
preview URLs.

**Why not Vercel:** the free tier prohibits commercial use, and a portfolio
soliciting client work sits inside that restriction. Cloudflare's free tier
allows it, has no bandwidth cap, and keeps serving when limits are exceeded
instead of pausing the site.

## Design decisions

**Terrarium + coastal.** Warm sand ground, sea-glass and tide greens for ink and
accent, moss for land, one shell accent used sparingly. The palette is not
decorative: four of five case studies are ocean, land, climate, and built
environment work, so the visual language matches the subject matter rather than
sitting on top of it.

**One motion idea.** Content unfurls upward from slightly compressed, as if
growing, rather than sliding in. It is used in exactly one place — work cards
entering the viewport — and is fully disabled under `prefers-reduced-motion`.
Content is visible without JavaScript; the reveal class is only applied once the
IntersectionObserver is confirmed running.

**Habitat threading.** Each case study declares a `habitat` (ocean, land, built,
systems). Case studies link to others sharing a habitat, so a reader who cares
about ocean tooling lands on the other ocean project. When a habitat has only
one project, the component falls back to the next projects by order rather than
rendering a dead end.

**Structure over prose.** Every case study frontmatter requires `role` and
encourages `impact`. Both render above the fold, because those are the two
things a hiring manager scans for before deciding whether to read.

**No client-side framework.** The site ships zero external JavaScript bundles.
The only script is a few inlined lines for the scroll reveal.

## Content model

Case studies live in `src/content/work/*.mdx` and are validated by the Zod
schema in `src/content.config.ts`. The schema deliberately caps `tags` at four —
three tags read as focus, eight read as noise.

Set `draft: true` to keep a case study off the live site while you write it.

## Structure

```
src/
  components/    Nav, Footer, WorkCard, RelatedWork
  content/work/  case studies as MDX
  layouts/       Base (head, SEO, skip link, reveal script)
  lib/habitats   ecosystem definitions and colors
  pages/         index, about, work/[...slug]
  styles/        global.css — design tokens live in @theme
```
