import React from 'react';
import { BsTrash } from 'react-icons/bs';

const WishlistItem = () => {

    // rendering wishlist item component here
    return (
        <div className='bg-accent shadow-2xl p-3 md:p-5 rounded-3xl mt-5 flex flex-col md:flex-row justify-between items-center'>
            <div className='flex flex-col md:flex-row items-center'>
                <div className='md:w-24 rounded-2xl overflow-hidden'>
                    <img className='w-full' src='https://imgpile.com/images/Rfs5Sb.png' alt='dummy wishlist' />
                </div>
                <div className='my-3 md:my-0 md:ml-10 md:text-left'>
                    <h3 className='text-2xl text-secondary'>Purple Sapphire</h3>
                    <h2 className='mt-1 text-primary font-semibold text-2xl'>₹ 53320</h2>
                </div>
            </div>
            <div>
                <button className='btn btn-circle border-0 bg-base-200 p-3 rounded-full hover:scale-110 duration-300 text-secondary hover:bg-red-300 hover:text-red-600'>
                    <BsTrash className='text-xl' />
                </button>
            </div>
        </div>
    );
};

export default WishlistItem;