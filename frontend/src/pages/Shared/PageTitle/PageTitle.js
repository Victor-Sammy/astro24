import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({ title }) => {

    // rendering the page title component here
    return (
        <Helmet>
            <title>Astrology24 | {title}</title>
        </Helmet>
    );
};

export default PageTitle;