import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {fas} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const FeatureList = [
  {
    icon: <FontAwesomeIcon icon={fas.faDesktop} />,
    title: '1',
    description: (
      <>
          1
      </>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={fas.faExclamationTriangle} />,
    title: '2',
    description: (
      <>
          2
      </>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={fas.faCloud} />,
    title: '3',
    description: (
      <>
          3
      </>
    ),
  },
  <br />,
  {
    icon: <FontAwesomeIcon icon={fas.faDesktop}/>,
    title: '4',
    description: (
      <>
          4
      </>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={fas.faHeadphones} />,
    title: '5',
    description: (
      <>
          5
      </>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={fas.faScrewdriver} />,
    title: '6',
    description: (
      <>
          6
      </>
    ),
  },
  <br />,
  {
    icon: <FontAwesomeIcon icon={fas.faCamera} />,
    title: '7',
    description: (
      <>
          7
      </>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={fas.faPhone} />,
    title: '8',
    description: (
      <>
          8
      </>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={fas.faServer} />,
    title: '9',
    description: (
      <>
          9
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
