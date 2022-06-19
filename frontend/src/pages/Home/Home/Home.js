import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';

const Home = () => {

    // rendering home component here
    return (
        <section className='min-h-screen pt-24'>
            <PageTitle title={'Home'} />
            <Banner />
        </section>
    );
};

export default Home;