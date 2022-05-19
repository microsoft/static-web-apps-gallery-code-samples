/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE:
 *
 * Requirements for adding your site to our showcase:
 * - It is a production-ready site with real content and decent customizations
 * (different from the init templates)
 * - It is NOT a work-in-progress with empty pages
 * - It has a stable domain (a Netlify/Vercel deploy preview is not allowed)
 *
 * Instructions:
 * - Add your site in the json array below
 * - `title` is your project's name (no need for the "Docs" suffix)
 * - A short (≤120 characters) description of your project
 * - Use relevant tags to categorize your site (read the tag descriptions below)
 * - Add a local image preview (decent screenshot of your Docusaurus site)
 * - The image MUST be added to the GitHub repository, and use `require("img")`
 * - The image has to have minimum width 640 and an aspect of no wider than 2:1
 * - If your website is open-source, add your source link. The link should open
 *   to a directory containing the `docusaurus.config.js` file
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/facebook/docusaurus/pull/3976
 *
 * If you edit this file through the GitHub interface, you can:
 * - Submit first your users.tsx edit PR
 * - This will create a branch on your Docusaurus fork (usually "patch-1")
 * - Go to https://github.com/<username>/docusaurus/tree/<branch>/website/src/data/showcase
 * - Drag-and-drop an image here to add it to your existing PR
 *
 * Please help us maintain this showcase page data:
 * - Update sites with wrong data
 * - Ensure site tags remain correct over time
 * - Remove sites not using Docusaurus anymore
 * - Add missing Docusaurus sites (if the site owner agreed)
 */

export type Tag = {
    label: string;
    description: string;
    color: string;
};
  
  // NN: Updated TagType to suit Static Web Apps
export type TagType =
| 'favorite'
| 'opensource'
| 'archived'
| 'angular'
| 'astro'
| 'blazor'
| 'cognitive-services'
| 'docusaurus'
| 'eleventy'
| 'fast'
| 'gatsby'
| 'gridsome'
| 'hugo'
| 'jekyll'
| 'lit'
| 'next'
| 'npm'
| 'nuxt'
| 'pwa'
| 'react'
| 'remix'
| 'scully'
| 'svelte'
| 'vanillajs'
| 'vuejs'
| 'vuepress';

export type User = {
    title: string;
    description: string;
    preview: string;
    website: string;
    source: string | null;
    tags: TagType[];
};

// LIST OF AVAILABLE TAGS
// Available tags to assign to your site
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, 
// but it's less likely that we add tags.
export const Tags: {[type in TagType]: Tag} = {

    // DO NOT USE THIS TAG: we choose sites to add to favorites
    favorite: {
        label: 'Favorite',
        description:
        'Some must-see Static Web App Examples that we loved!!',
        color: '#ffd60a', //'#e9669e',
    },

    // For open-source sites, a link to the source code is required
    // The source should be your *website's* source, not your project's source!
    opensource: {
        label: 'Open Source',
        description: 'This SWA example has source code available to learn from and build upon!',
        color: '#00ff00',
    },

    // This tag indicates the website is not currently live
    // Tag may be added AUTOMATICALLY by scripted checks
    // Intent is to keep historical contributions for other value
    // e.g., source/screenshot - till owner or maintainer decides
    // to remove them for other reasons.
    archived: {
        label: 'Archived',
        description: 'Au',
        color: '#ff0000',
    },

    angular: {
        label: 'Angular',
        description: 
        'Using Angular Framework (https://angular.io)',
        color: '#ffd300',
    },

    astro: {
        label: 'Astro',
        description: 
        'Using Astro Static Site Generator (https://astro.build)',
        color: '#deff0a',
    },

    blazor: {
        label: 'Blazor',
        description: 
        'Using Blazor with WASM (https://blazor.net)',
        color: '#a1ff0a',
    },

    "cognitive-services": {
        label: 'Azure Cogntive Services',
        description: 
        'Using Azure Cognitive Services for speech, vision and other capabilities.',
        color: '#f0f0f0',
    },

    docusaurus: {
        label: 'Docusaurus',
        description: 
        'Using Docusaurus Static Site Generator (https://docusaurus.io)',
        color: '#a1ff0a',
    },

    eleventy: {
        label: '11ty',
        description: 
        'Using 11ty Static Site Generator (https://www.11ty.dev/)',
        color: '#0aff99',
    },

    fast: {
        label: 'fast',
        description: 
        'Using Fast Web Components (https://www.fast.design/)',
        color: '#0aefff',
    },

    gatsby: {
        label: 'Gatsby',
        description:
        'Using the React-powered Static Site Generator (https://www.gatsbyjs.com/)',
        color: '#147df5',
    },

    gridsome: {
        label: 'Gridsome',
        description:
        'Using the Vue-powered Static Site Generator (https://gridsome.org/)',
        color: '#580aff',
        },

    hugo: {
        label: 'Hugo',
        description:
        'Using the Go-powered Static Site Generator (https://www.gohugo.io/)',
        color: '#70d6ff',
    },

    jekyll: {
        label: 'Jekyll',
        description:
        'Using the Markdown-friendly Static Site Generator (http://jekyllrb.com/)',
        color: '#70d6ff',
        },

    lit: {
        label: 'Lit',
        description:
        'Using the Lit Web Components (https://lit.dev/)',
        color: '#ff9770',
        },

    next: {
        label: 'Next.js',
        description:
        'Using the React-powered Framework (https://nextjs.org/)',
        color: '#ffd670',
    },

    npm: {
        label: 'npm',
        description:
        'Apps showcasing usage of npm packages',
        color: '#ffaabb',
    },

    nuxt: {
        label: 'Nuxt.js',
        description:
        'Using the Vue-powered Framework (https://nuxtjs.org//)',
        color: '#e9ff70',
    },

    pwa: {
        label: 'PWA',
        description: 
        'Also showcases an example of Progressive Web Apps',
        color: '#deff0a',
    },

    react: {
        label: 'React',
        description:
        'Using React UI Framework (https://reactjs.org)',
        color: '#809bce',
    },

    remix: {
        label: 'Remix',
        description:
        'Using the Remix full-stack framework (https://remix.run/)',
        color: '#95b8d1',
    },

    scully: {
        label: 'Scully',
        description:
        'Using Angular-powered Static Site Generator (https://scully.io/)',
        color: '#95b8d1',
    },

    svelte: {
        label: 'Svelte',
        description:
        'Using Svelte Framework (https://svelte.dev/)',
        color: '#95b8d1', 
    },

    vanillajs: {
        label: 'Vanilla JS',
        description:
        'Using Vanilla JS/HTML/CSS',
        color: '#95b8d1',
    },

    vuejs: {
        label: 'Vue JS',
        description:
        'Using Vue.js Framework (https://vuejs.org)',
        color: '#bc8a5f',
    },

    vuepress: {
        label: 'VuePress',
        description:
        'Using Vue-powered Static Site Generator  (https://vuepress.vuejs.org/)',
        color: '#8b5e34',
    },
};

