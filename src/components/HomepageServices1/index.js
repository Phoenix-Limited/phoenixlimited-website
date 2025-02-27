import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {fas} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const FeatureList = [
  {
    icon: <FontAwesomeIcon icon={fas.faDesktop} />,
    title: 'RMM & Hardened Security',
    description: (
      <>
          We provide full management and security to all of your laptops, desktops, servers, and mobile devices.
      </>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={fas.faExclamationTriangle} />,
    title: 'DR & Risk Management',
    description: (
      <>
          With automated backups and services like EDR/MDR, we can ensure your network is rock solid.
      </>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={fas.faCloud} />,
    title: 'Cloud Workplaces',
    description: (
      <>
          Domain and user management through either Google Workspace, M365, or NextCloud.
      </>
    ),
  },
];

function Service1({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{icon} {title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageServices1() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Service1 key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
