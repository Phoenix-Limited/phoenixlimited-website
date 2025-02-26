import React from 'react';
import Layout from '@theme/Layout';

import privacypdf from '@site/static/privacy.pdf';

export default function Privacy() {
  return (
    <Layout title="Privacy" description="Privacy Policy">
      <div>
        <iframe src={privacypdf} width="100%" height="500px" />
      </div>
    </Layout>
  );
}