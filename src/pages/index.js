import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageServices from '@site/src/components/HomepageServices1';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'
import React from "react";

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
          <br />
          <h2 className={clsx(styles.alignCenter, styles.headerUnderline)}>What we do</h2>
          <br />
          <br />
          <br />
          <div className={clsx(styles.iconManagement)}>
            <FontAwesomeIcon icon={fas.faDesktop} size="6x" />
            <FontAwesomeIcon icon={fas.faCloud} size="6x" />
            <FontAwesomeIcon icon={fas.faCode} size="6x" />
          </div>
          <br />
          <br />
          <p className={clsx(styles.alignCenter)}>As an MSP, we offer a full suite of IT services, including Remote Management & Monitoring, networking, structured cabling, and security solutions, among many other things.</p>
        </div>
        <br />
        <br />
        <HomepageFeatures />
        <div>
          <br />
          <br />
          <h2 className={clsx(styles.alignCenter, styles.headerUnderline)}>Service Overview</h2>
          <br />
          <p className={clsx(styles.alignCenter)}>An example selection of services we can provide to better your business and save you time</p>
        </div>
        <br />
        <br />
        <HomepageServices1 />
        <br />
        <HomepageServices2 />
        <br />
        <HomepageServices3 />
        <br />
        <br/>
        <h1 className={clsx(styles.alignCenter, styles.headerUnderline)}>Questions?</h1>
        <br />
        <p className={clsx(styles.alignCenter)}>Take a look how we can benefit your business.</p>
        <br />
        <div className={styles.buttons}>
          <Link
              className="button button--secondary button--lg"
              to="/docs/customers/Learning/alacarte">
            À la Carte Services
          </Link>
          <Link
              className="button button--secondary button--lg"
              to="/docs/customers/Learning/edr">
            EDR
          </Link>
          <Link
              className="button button--secondary button--lg"
              to="/docs/customers/Learning/fixedcostscalability">
            Cost and Scalability
          </Link>
          <Link
              className="button button--secondary button--lg"
              to="/docs/customers/Learning/itcompliance">
            IT Compliance
          </Link>
          <Link
              className="button button--secondary button--lg"
              to="/docs/customers/Learning/macmanagement">
            Mac Management
          </Link>
        </div>
        <br />
        <div className={styles.buttons}>
          <Link
              className="button button--secondary button--lg"
              to="/docs/customers/Learning/managedit">
            Managed IT
          </Link>
          <Link
              className="button button--secondary button--lg"
              to="/docs/customers/Learning/manageditvalue">
            Managed IT Value
          </Link>
          <Link
              className="button button--secondary button--lg"
              to="/docs/customers/Learning/patchmanagement">
            Patch Management
          </Link>
          <Link
              className="button button--secondary button--lg"
              to="/docs/customers/Learning/remoteworkforce">
            Remote Workforce
          </Link>
          <Link
              className="button button--secondary button--lg"
              to="/docs/customers/Learning/voipservices">
            VOIP Services
          </Link>
        </div>
        <br />
        <br />
      </main>
    </Layout>
  );
}
