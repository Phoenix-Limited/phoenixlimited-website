import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {fas} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const FeatureList = [
  {
    icon: <FontAwesomeIcon icon={fas.faCamera} />,
    title: 'Security Systems',
    description: (
      <>
          Fully managed Alarm/Camera systems with remote view capabilities.
      </>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={fas.faPhone} />,
    title: 'VOIP/Phone Solutions',
    description: (
      <>
          Fully managed phone/video/teleconference solutions to fit your needs.
      </>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={fas.faServer} />,
    title: 'Server Deployments',
    description: (
      <>
          New or existing server management and monitoring.
      </>
    ),
  },
];

function Service3({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{icon} {title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageServices3() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Service3 key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
