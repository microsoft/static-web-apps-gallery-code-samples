/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import {sortBy} from '@site/src/utils/jsUtils';
import {TagType, User, Tags} from './tags';

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


// *************** USER ENTERED DATA STARTS HERE *********************************
// Add your site to this list
// prettier-ignore
const Users: User[] = [
  /*
    Pro Tip: add your site in alphabetical order.
    Appending your site at the end (of list) is more likely to produce Git conflicts.
   */
  /*
  {
    title: '',
    description:
      '',
      preview: require('./showcase/catsify.png'),
    website: '',
    source: '',
    tags: ['angular','opensource','archived'],
  },
  */
  {
    title: 'Angular AppStore',
    description:
      'Angular AppStore is a reference app featuring a full search user experience using Algolia and Material Design.',
      preview: require('./showcase/angular-search-experience.gif'),
    website: 'https://www.searchapp.store/',
    source: 'https://github.com/manekinekko/angular-search-experience',
    tags: ['angular', 'opensource', `archived`], 
  },
  {
    title: 'Angular SWA Auth',
    description:
      'Demo app showcasing the use of the npm package angular-swa-auth',
      preview: require('./showcase/angular-swa-auth.gif'),
    website: 'https://angular-swa-auth.codingdemo.co.uk/',
    source: 'https://github.com/christianacca/static-web-apps-auth',
    tags: ['angular','opensource', 'npm'],
  },
  {
    title: 'Angular Universal',
    description:
      'A pre-rendered Angular application built with Angular universal (aka. @angular/platform-server). ',
      preview: require('./showcase/angular-ssr.png'),
    website: '',
    source: 'https://github.com/manekinekko/angular-ssr-swa',
    tags: ['angular','opensource','archived'],
  },
  {
    title: 'Azure Vision',
    description:
      'An Object Detection App which will detect the objects in given image using Azure Cognitive Services (Computer Vision API) built with ❤️ & Angular',
      preview: require('./showcase/azure_vision.gif'),
    website: '',
    source: 'https://github.com/banujan6/azure-cognitive-service-computer-vision',
    tags: ['angular','opensource','archived', 'cognitive-services'],
  },
  {
    title: 'Catsify',
    description:
      'A cat names generator built with Angular',
      preview: require('./showcase/catsify.png'),
    website: 'https://www.catsify.app/',
    source: 'https://github.com/manekinekko/catsify',
    tags: ['angular', 'opensource', 'favorite'],
  },
  {
    title: 'Docusaurus Starter',
    description:
    'A simple starter template for creating documentation website using the Docusaurus framework.',
      preview: require('./showcase/docusaurus-starter.png'),
      website: 'https://ambitious-pebble-02b2d3010.azurestaticapps.net/',
      source: 'https://github.com/sumitkharche/docusaurus-swa-app',
      tags: ['docusaurus','opensource'],
  },
  {
    title: 'Eleventy Blog Starter',
    description:
    'A base blog scaffolded using the Eleventy (11ty.dev) base blog starter.',
      preview: require('./showcase/11ty.png'),
      website: '',
      source: 'https://github.com/manekinekko/11ty-blog-swa',
      tags: ['eleventy','opensource', 'archived'],
  },
  {
    title: 'Gatsby Starter',
    description:
      'A very simple starter scaffolded using the Gatsby framework.',
      preview: require('./showcase/gatsby_starter.png'),
    website: '',
    source: 'https://github.com/floAr/gatsby-starter-azure_swa',
    tags: ['gatsby','opensource', 'archived'],
  },
  {
    title: 'Meme4Fun',
    description:
      'Create custom programming memes from a picture - and identify features in it using Azure Cognitive Services. Built using Angular with Material Design.',
      preview: require('./showcase/meme4fun.gif'),
    website: '',
    source: 'https://github.com/sajeetharan/meme4fun',
    tags: ['angular','opensource', 'archived'],
  },
  {
    title: 'ngVikings Conference',
    description:
      'ngVikings is a non-profit, non-commercial, 100% community-driven event comprised of many Nordic Angular groups with more than 6500 active members in total.',
      preview: require('./showcase/ngvikings2020.png'),
    website: 'https://www.ngvikings.org/',
    source: 'https://github.com/ngvikings/ngvikings-2020',
    tags: ['hugo','opensource','pwa'],
  },
  {
    title: 'ngxtools',
    description:
      'An NPM registry clone made only for Angular packages - built with Angular, TypeScript and Algolia. Progressive Web App.',
      preview: require('./showcase/ngxtools.png'),
    website: 'https://www.ngx.tools/',
    source: 'https://github.com/ngxtools/ngx.tools',
    tags: ['angular','opensource'],
  },
  {
    title: 'PWA Blog',
    description:
      'News and articles about Progressive Web Apps. By Maxim Salnikov',
      preview: require('./showcase/pwablog.png'),
    website: 'https://www.webmax.ru/',
    source: 'https://github.com/webmaxru/webmax.ru',
    tags: ['scully','opensource','pwa'],
  },
  {
    title: 'Rock Paper Scissors',
    description:
      'Play the well known game of Rock-Paper-Scissors. Opponent moves are simulated by an Azure Function. Built with Angular by @stuartleaveruk',
      preview: require('./showcase/angular-rock-paper-scissors.png'),
    website: '',
    source: 'https://github.com/stuartleaver/rock-paper-scissors-static-web-app',
    tags: ['angular', 'opensource','archived'],
  },
  {
    title: 'Shop At Home',
    description:
      '"Shop at Home" is a sample app which is written in four variations: Angular, React, Svelte and Vue. It is shown in the Build 2020 video presentation.',
      preview: require('./showcase/shop-at-home-svelte.png'),
    website: 'https://www.shopathome.dev/',
    source: 'https://github.com/johnpapa/shopathome',
    tags: ['svelte','opensource'],
  },
  {
    title: 'Positive Thought For The Day',
    description:
      'A simple demo for Azure SWAG (Static Web Apps on GitHub) that you can use as a template for your own apps.',
      preview: require('./showcase/positive-quote.png'),
    website: 'https://aka.ms/swag-demo',
    source: 'https://github.com/sinedied/azure-swag/',
    tags: ['vanillajs','opensource','archived'],
  },
  {
    title: 'xLayers',
    description:
      'Generate Code from SketchApp - built with Angular and TypeScript',
      preview: require('./showcase/xlayers-1.png'),
    website: '',
    source: 'https://github.com/xlayers/xlayers',
    tags: ['angular', 'opensource', `archived`],
  },
  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];
// *************** USER ENTERED DATA ENDS HERE *********************************




export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const sortedUsers = sortUsers();