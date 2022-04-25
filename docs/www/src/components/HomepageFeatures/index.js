import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Angular',
    Svg: require('@site/static/img/logo-angular.svg').default,
    link: "showcase?tags=angular",
  },
  {
    title: 'Gatsby',
    Svg: require('@site/static/img/logo-gatsby.svg').default,
    link: "showcase?tags=gatsby",
  },
  {
    title: 'Hugo',
    Svg: require('@site/static/img/logo-hugo.svg').default,
    link: "showcase?tags=hugo",
  },
  {
    title: 'Jekyll',
    Svg: require('@site/static/img/logo-jekyll.svg').default,
    link: "showcase?tags=jekyll",
  },
  {
    title: 'Next.js',
    Svg: require('@site/static/img/logo-nextjs.svg').default,
    link: "showcase?tags=next",
  },
  {
    title: 'Nuxt.js',
    Svg: require('@site/static/img/logo-nuxtjs.svg').default,
    link: "showcase?tags=nuxt",
  },
  {
    title: 'Svelte',
    Svg: require('@site/static/img/logo-svelte.svg').default,
    link: "showcase?tags=svelte",
  },
  {
    title: 'React',
    Svg: require('@site/static/img/logo-react.svg').default,
    link: "showcase?tags=react",
  },
  {
    title: 'Vue.js',
    Svg: require('@site/static/img/logo-vue.svg').default,
    link: "showcase?tags=vuejs",
  },
];

function Feature({Svg, title, link}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link}>
        <div className="text--center  padding-horiz--md">
          <Svg className={styles.featureSvg} role="img" />
          <h3>{title}</h3>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row padding-horiz--md">
          <h2>Welcome to The Static Web Apps Gallery</h2>
        </div>
        <div className="row padding-horiz--md">
        This is a showcase of community-created projects that use Azure Static Web Apps (SWA) to simplify their build-deploy experience. SWA works well with a number of modern front-end frameworks and static site generators. Click on  a logo below to filter the Showcase by that technology - if no results exist, consider contributing the first example. Visit "Add Your Project" page to learn more.
        </div> 
        <hr/>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
