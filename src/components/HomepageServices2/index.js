import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {fas} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const FeatureList = [
  {
    icon: <FontAwesomeIcon icon={fas.faDesktop}/>,
    title: 'Email and Website Services',
    description: (
      <>
          We can provide full mail servers, and program and host web servers.
      </>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={fas.faHeadphones} />,
    title: 'A/V & Digital Signage',
    description: (
      <>
          Installation and management of digital signage, displays and speaker systems.
      </>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={fas.faScrewdriver} />,
    title: 'Fast Ticketing',
    description: (
      <>
          Expedient ticket submissions and responses.
      </>
    ),
  },
];

function Service2({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{icon} {title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageServices2() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Service2 key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
