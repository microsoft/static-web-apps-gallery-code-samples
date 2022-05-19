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
    tags: ['FRONT-END','opensource'],
  },
  */

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
    title: 'Catsify',
    description:
      'A cat names generator built with Angular',
      preview: require('./showcase/catsify.png'),
    website: 'https://www.catsify.app/',
    source: 'https://github.com/manekinekko/catsify',
    tags: ['angular', 'opensource'],
  },

  {
    title: 'Cognitive Search SWA Demo',
    description:
      'A sample faceted search user experience implementation for your Azure Cognitive Search index. Similar to the official demo app, but a bit more modern. ',
      preview: require('./showcase/cognitive-search-demo.png'),
    website: 'https://lively-sand-033e9ec03.azurestaticapps.net/',
    source: 'https://github.com/scale-tone/cognitive-search-static-web-apps-sample-ui',
    tags: ['react','opensource'],
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
    title: 'Hexa CLI Landing Page',
    description:
      'Hexa is the ultimate companion for the Azure CLI. It allows you to seamlessly configure, setup and deploy to different Azure services such as Resource Groups, Storage accounts, Hosting, Azure Functions and Databases (CosmosDB and Table Storage) and more.',
      preview: require('./showcase/hexa.png'),
    website: 'https://www.hexa.run/',
    source: 'https://github.com/manekinekko/hexa/',
    tags: ['vanillajs','opensource'],
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
    title: 'Nitroo Landing Page',
    description:
      'Nitro is a heavily opinionated template for building Serverless applications with NestJS, the fastest-growing NodeJS framework in the world by github stars.',
      preview: require('./showcase/nitrooo.png'),
    website: 'https://victorious-ocean-0337ef81e.azurestaticapps.net/',
    source: 'https://github.com/nitro-stack/website',
    tags: ['vanillajs','opensource'],
  },

  {
    title: 'Nitro Workshop',
    description:
      'Online workshop built with Vuepress to learn how to build a backend using NestJS. This is a practical workshop where you\'ll learn "hands-on" by iteratively building an application from scratch using NestJS and Azure.',
      preview: require('./showcase/nitro.png'),
    website: 'https://nitro-stack.github.io/nitro-workshop/',
    source: 'https://github.com/nitro-stack/nitro-workshop',
    tags: ['vuepress','opensource'],
  },

  {
    title: 'Peacock for Visual Studio Code Documentation',
    description:
      'Peacock is a Visual Studio Code extension with 700,000+ installations. It subtly changes the color of your Visual Studio Code workspace. This is ideal when you have multiple VS Code instances, use VS Live Share, or use VS Code\'s Remote features, and you want to quickly identify your editor.',
      preview: require('./showcase/peacock-icon.png'),
    website: 'https://www.peacockcode.dev/',
    source: 'https://github.com/johnpapa/vscode-peacock',
    tags: ['vuepress','opensource'],
  },

  {
    title: 'Positive Thought For The Day',
    description:
      'A simple demo for Azure SWAG (Static Web Apps on GitHub) that you can use as a template for your own apps.',
      preview: require('./showcase/positive-quote.png'),
    website: 'https://aka.ms/swag-demo',
    source: 'https://github.com/sinedied/azure-swag/',
    tags: ['vanillajs','opensource','favorite'],
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
    title: 'VS Code Can Do That?',
    description:
      'All the best things about VS Code that nobody ever bothered to show you.',
      preview: require('./showcase/vscodecandothat.png'),
    website: 'https://www.vscodecandothat.com/',
    source: 'https://github.com/burkeholland/vscodecandothat/',
    tags: ['vanillajs','opensource', 'favorite'],
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