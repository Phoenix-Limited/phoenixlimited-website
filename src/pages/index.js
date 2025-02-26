import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageServices from '@site/src/components/HomepageServices';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="mailto:contact@phoenixlimited.net">
            Email Us
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="tel:+1-765-246-7845">
            Call/Text Us
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://office.phoenixlimited.net/index.php/apps/appointments/pub/a3MDbbDB2CEt5NqD/form">
            Book and Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from `}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div>
          <br />
          <br />
          <h2 className={clsx(styles.alignCenter, styles.headerUnderline)}>What we do</h2>
          <br />
          <div className={clsx(styles.iconManagement)}>
            <FontAwesomeIcon icon={fas.faDesktop} size="6x" />
            <FontAwesomeIcon icon={fas.faCloud} size="6x" />
            <FontAwesomeIcon icon={fas.faCode} size="6x" />
          </div>
          <br />
          <p className={clsx(styles.alignCenter)}>As an MSP, we offer a full suite of IT services, including Remote Management & Monitoring, networking, structured cabling, and security solutions, among many other things.</p>
        </div>
        <HomepageFeatures />
        <div>
          <br />
          <h2 className={clsx(styles.alignCenter, styles.headerUnderline)}>Service Overview</h2>
          <p className={clsx(styles.alignCenter)}>An example selection of services we can provide to better your business and save you time</p>
          <br />
        </div>
        <HomepageServices />
        <br />
        <h2 className={clsx(styles.alignCenter, styles.headerUnderline)}>Questions?</h2>
        <p className={clsx(styles.alignCenter)}>Take a look how we can benefit your business.</p>
        <div className={styles.buttons}>
          <Link
              className="button button--secondary button--lg"
              to="/docs/customers/Learning/managedit">
            Managed IT
          </Link>

        </div>
        <br />
        <button id="zammad-feedback-form">Feedback</button>

        <script id="zammad_form_script" src="https://support.phoenixlimited.net/assets/form/form.js"></script>

        <script src={zammadform}></script>
      </main>
    </Layout>
  );
}
