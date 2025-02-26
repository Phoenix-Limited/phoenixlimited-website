import React from 'react';
import Layout from '@theme/Layout';

import tospdf from '@site/static/tos.pdf';

export default function TOS() {
  return (
    <Layout title="TOS" description="Terms of Service">
      <div>
        <iframe src={tospdf} width="100%" height="500px" />
      </div>
    </Layout>
  );
}