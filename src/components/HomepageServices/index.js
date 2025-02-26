import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'RMM & Hardened Security',
    Svg: require('@site/static/img/fixed-costs.svg').default,
    description: (
      <>
          We provide full management and security to all of your laptops, desktops, servers, and mobile devices.
      </>
    ),
  },
  {
    title: 'Disaster Recovery & Risk Management',
    Svg: require('@site/static/img/fixed-costs.svg').default,
    description: (
      <>
          With automated backups and services like EDR/MDR, we can ensure your network is rock solid.
      </>
    ),
  },
  {
    title: 'Google Workspace / M365 / Nextcloud',
    Svg: require('@site/static/img/fixed-costs.svg').default,
    description: (
      <>
          Domain and user management through either Google Workspace, M365, or NextCloud
      </>
    ),
  },
];

function Service({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageServices() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Service key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
