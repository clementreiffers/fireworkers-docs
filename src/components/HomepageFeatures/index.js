import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Your own Serverless server',
        Svg: require('@site/static/img/undraw_connected_world_wuay.svg').default,
        description: (
            <>
                Preserve your autonomy through the establishment of your custom Serverless server while maintaining complete sovereignty!
            </>
        ),
    },
    {
        title: 'Fast Deploy',
        Svg: require('@site/static/img/undraw_to_the_stars_re_wq2x.svg').default,
        description: (
          <>
              lightning-fast code deployment
          </>
        ),
    },
    {
        title: 'Security',
        Svg: require('@site/static/img/undraw_secure_server_re_8wsq.svg').default,
        description: (
          <>
              Experience complete workers isolation, ensuring absolute security for all your needs!
          </>
        ),
    },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
