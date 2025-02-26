import React from 'react';
import Footer from '@theme-original/Footer';

import zammad from './zammad';

export default function FooterWrapper(props) {
    return (
        <>
            <script src="https://support.phoenixlimited.net/assets/chat/chat-no-jquery.min.js"></script>
            <script src={zammad}></script>
            <Footer {...props} />
        </>
    );
}
