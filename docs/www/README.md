# Build & Deploy This Site

This website was built using [Docusaurus 2](https://docusaurus.io/) using their default `classic` theme. It will primarily host a [Showcase](https://docusaurus.io/showcase)-like page to display screenshots of submitted projects with ability to filter by technology-specific tags.

<br/>

## 1. Setup & Build Commands

The default site is scaffolded in the `www/` folder under `docs` with the intent of using GitHub Pages as a deployment target.

| Command | Description |
|:--- |:--- |
| `npx create-docusaurus@latest www classic` | Scaffold **a new** classic docusaurus site in www/ folder |
| `cd www; npm install` | Install dependencies if needed (e.g., fresh clone/fork) |
| `cd www; npx docusaurus start` | Preview development site on local device (with hot reload)  |
| `cd www; npm run build` | Build production-ready site (in _build/_ folder by default) |
| `cd www; npm run serve` | Preview production-ready site on local device |
| | |


<br/>

## 2. Customize Site Contents

We only want to have a Showcase page and a Landing page (for convenience) - so customization is more about removing default features (blog, tutorial) and customizing theme/content.

| Action | Outcome |
|:--- |:--- |
| Set `blog: false` in presets under `www/docusaurus.config.js` | Removes blog - establish a [docs-only mode](https://docusaurus.io/docs/docs-introduction#docs-only-mode) with docs as base page. |
| Edit themeConfig in `www/docusaurus.config.js` | Removes `Blog` route in navbar. Now delete `www/blog` folder. |
| Add `src/pages/showcase.md` page for `/showcase` route | Update themeConfig in `www/docusaurus.config.js` to add it to navbar |
| Edit docs sidebar settings in `www/sidebars.js` | Customize [sidebar configuration](https://docusaurus.io/docs/sidebar/items) or learn to use auto-generated versions more effectively. |
| Update [styling and layout](https://docusaurus.io/docs/next/styling-layout) and validate for light & dark theme | Use [colorbox.io](https://colorbox.io/) and [guide](https://justtheskills.com/colorbox/) to define color palette. Create [style variables](https://docusaurus.io/docs/next/styling-layout#styling-your-site-with-infima) to update `custom.css` (based on  the [infima](https://infima.dev/) styling framework) |
| Add [supported plugins](https://docusaurus.io/docs/api/plugins) for enhanced content or behaviors | Default plugins used are [plugin-content-docs](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs) (for `docs/` pages) , [plugin-content-blog](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog) (for `blog/`) and [plugin-content-pages](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-pages) for default pages. Check out [plugin-sitemap](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-sitemap), [plugin-ideal-image](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image) and [plugin-pwa](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-pwa) for other useful features. |
| | |

<br/>