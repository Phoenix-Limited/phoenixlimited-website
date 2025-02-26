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
    title: 'Disaster Recovery & Risk Management',
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
  <br />,
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
    title: 'A/V Solutions & Digital Signage',
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
          Our support technicians respond quickly to online integrated tickets that can be submitted directly from the desktop and on-site work is scheduled within a few days with normal operating capacities.
      </>
    ),
  },
  <br />,
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
          Fully managed and integrated phone/video/teleconference solutions to fit your needs.
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

function Service({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{icon} {title}</Heading>
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
