import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {fas} from "@fortawesome/free-solid-svg-icons";

const FeatureList = [
  {
    title: '<FontAwesomeIcon icon={fas.faDesktop} /> RMM & Hardened Security',
    description: (
      <>
          We provide full management and security to all of your laptops, desktops, servers, and mobile devices.
      </>
    ),
  },
  {
    title: 'Disaster Recovery & Risk Management',
    description: (
      <>
          With automated backups and services like EDR/MDR, we can ensure your network is rock solid.
      </>
    ),
  },
  {
    title: 'Google Workspace / M365 / Nextcloud',
    description: (
      <>
          Domain and user management through either Google Workspace, M365, or NextCloud.
      </>
    ),
  },
    <br />,
    {
        title: 'Email and Website Hosting/Development',
        description: (
            <>
                We can provide full mail servers, and program and host web servers.
            </>
        ),
    },
    {
        title: 'A/V Solutions & Digital Signage',
        description: (
            <>
                Installation and management of digital signage, displays and speaker systems.
            </>
        ),
    },
    {
        title: 'Fast Ticketing',
        description: (
            <>
                Our support technicians respond quickly to online integrated tickets that can be submitted directly from the desktop and on-site work is scheduled within a few days with normal operating capacities.
            </>
        ),
    },
    <br />,
    {
        title: 'Security Systems',
        description: (
            <>
                Fully managed Alarm/Camera systems with remote view capabilities.
            </>
        ),
    },
    {
        title: 'VOIP/Phone Solutions',
        description: (
            <>
                Fully managed and integrated phone/video/teleconference solutions to fit your needs.
            </>
        ),
    },
    {
        title: 'Server Deployments',
        description: (
            <>
                New or existing server management and monitoring.
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
