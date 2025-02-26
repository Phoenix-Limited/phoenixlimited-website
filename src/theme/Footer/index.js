import React from 'react';
import Footer from '@theme-original/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'

import zammad from '@site/src/components/zammad.js';

export default function FooterWrapper(props) {
    return (
        <>
            <script src="https://support.phoenixlimited.net/assets/chat/chat-no-jquery.min.js"></script>
            <script src={zammad}></script>
            <Footer {...props} />
            <FontAwesomeIcon icon={fas.faCode} size="6x" />
        </>
    );
}
