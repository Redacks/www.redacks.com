# https://www.redacks.com

Source code for [www.redacks.com](https://www.redacks.com), my personal website for my projects and blog.

## Stack

* **Framework:** Astro
* **Styling:** Tailwind CSS (v4)
* **Deployment:** Cloudflare Workers / Pages (`wrangler`)

## Development

Due to infinite reload loops caused by the Cloudflare adapter in standard Astro dev mode (`pnpm run dev`), local development requires building and serving via Wrangler:

```bash
pnpm install
pnpm run build
pnpm run generate-types
pnpm exec wrangler dev

```

Open [http://localhost:8787](http://localhost:8787) in your browser.

> **Note:** If you need live rebuilding while using `wrangler dev`, run the Astro build watcher in a separate terminal tab:
> ```bash
> pnpm run build -- --watch
> ```
