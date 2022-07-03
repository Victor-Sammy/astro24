import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import WishlistItem from '../WishlistItem/WishlistItem';

const Wishlist = () => {

    // rendering wishlist component here
    return (
        <section className='min-h-screen pt-24'>
            <PageTitle title={'Wishlist'} />
            <div className='w-[95%] 2xl:w-4/5 mx-auto my-10'>
                <h3 className='text-2xl text-center md:text-left font-bold text-secondary'>Wishlist (3)</h3>
                <div className='mx-5'>
                    <WishlistItem />
                    <WishlistItem />
                    <WishlistItem />
                </div>
            </div>
        </section>
    );
};

export default Wishlist;