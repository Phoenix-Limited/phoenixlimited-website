import React from 'react';
import Footer from '@theme-original/Footer';

export default function FooterWrapper(props) {
    return (
        <>
            <script src="https://support.phoenixlimited.net/assets/chat/chat-no-jquery.min.js"></script>
            <script src="https://phoenixlimited.net/assets/js/zammad.js"></script>
            <Footer {...props} />
        </>
    );
}
