import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageServices from '@site/src/components/HomepageServices';
import tospdf from '@site/static/tos.pdf';
import privacypdf from '@site/static/privacy.pdf';
import alacartepdf from '@site/static/alacarte.pdf';
import edrpdf from '@site/static/edr.pdf';
import fixedcostscalabilitypdf from '@site/static/fixedcostscalability.pdf';
import itcompliancepdf from '@site/static/itcompliance.pdf';
import macmanagementpdf from '@site/static/macmanagement.pdf';
import manageditpdf from '@site/static/managedit.pdf';
import manageditvaluepdf from '@site/static/manageditvalue.pdf';
import patchmanagementpdf from '@site/static/patchmanagement.pdf';
import remoteworkforcepdf from '@site/static/remoteworkforce.pdf';
import voipservicespdf from '@site/static/voipservices.pdf';

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
        <ul>
          <details>
            <summary>Managed IT</summary>
            <iframe src={manageditpdf} width="100%" height="500px" />
          </details>
          <details>
            <summary>Cost and Scalability</summary>
            <iframe src={fixedcostscalabilitypdf} width="100%" height="500px" />
          </details>
          <details>
            <summary>IT Compliance</summary>
            <iframe src={itcompliancepdf} width="100%" height="500px" />
          </details>
          <details>
            <summary>EDR</summary>
            <iframe src={edrpdf} width="100%" height="500px" />
          </details>
          <details>
            <summary>Value of MSP services</summary>
            <iframe src={manageditvaluepdf} width="100%" height="500px" />
          </details>
          <details>
            <summary>A la Carte Services</summary>
            <iframe src={alacartepdf} width="100%" height="500px" />
          </details>
          <details>
            <summary>Patch Management</summary>
            <iframe src={patchmanagementpdf} width="100%" height="500px" />
          </details>
          <details>
            <summary>VOIP</summary>
            <iframe src={voipservicespdf} width="100%" height="500px" />
          </details>
          <details>
            <summary>MacOS Management</summary>
            <iframe src={macmanagementpdf} width="100%" height="500px" />
          </details>
          <details>
            <summary>Remote Workforce Integration</summary>
            <iframe src={remoteworkforcepdf} width="100%" height="500px" />
          </details>
          <details>
            <summary>Privacy Policy</summary>
            <iframe src={privacypdf} width="100%" height="500px" />
          </details>
          <details>
            <summary>Terms of Service</summary>
            <iframe src={tospdf} width="100%" height="500px" />
          </details>
        </ul>
      </main>
    </Layout>
  );

}
