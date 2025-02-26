import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fixed Cost or À la carte',
    description: (
      <>
          Whether you need one service call for a specific issue or full IoT management, we can dynamically generate the best package for you.
      </>
    ),
  },
  {
    title: 'Fast Response',
    description: (
      <>
          We guarantee a same day response to new tickets and calls within reasonable hours
      </>
    ),
  },
  {
    title: 'What you can you expect from Phoenix Limited',
    description: (
      <>
          You can expect same-day response and regularly same day fixes for many IoT issues, including ones related to networking, apps, services, and management.
      </>
    ),
  },
];

function Service({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
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
