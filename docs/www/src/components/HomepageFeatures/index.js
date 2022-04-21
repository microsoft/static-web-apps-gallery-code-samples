import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'React',
    Svg: require('@site/static/img/logo-react.svg').default,
    link: "https://docs.microsoft.com/en-us/azure/static-web-apps/getting-started?tabs=react",
  },
  {
    title: 'Angular',
    Svg: require('@site/static/img/logo-angular.svg').default,
    link: "https://docs.microsoft.com/en-us/azure/static-web-apps/getting-started?tabs=angular",
  },
  {
    title: 'Vue.js',
    Svg: require('@site/static/img/logo-vue.svg').default,
    link: "https://docs.microsoft.com/en-us/azure/static-web-apps/getting-started?tabs=vue",
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

        This is a showcase for community-built projects that use the Azure Static Web Apps service.

        The site is a showcase for community projects that have been built and deployed using the Azure Static Web Apps (SWA) service and tools. Visit the Showcase page to see all projects, or head on to the Contribute page to add your own. Here are some of the popular front-end frameworks and static site generators represented in this showcase. Click a logo to see a relevant starter kit, tutorial, or code sample, that can help you jumpstart your SWA development journey for that target platform.
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
