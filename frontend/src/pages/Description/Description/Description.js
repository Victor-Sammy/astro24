import React, { useEffect, useState } from 'react';
import { BsFillShareFill, BsFillSuitHeartFill, BsCartPlus } from 'react-icons/bs';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import AvailableSizes from '../AvailableSizes/AvailableSizes';
import ProductGallery from '../ProductGallery/ProductGallery';
import QuantityChooser from '../QuantityChooser/QuantityChooser';

const Description = () => {
    // integration of react hooks here
    const [gem, setGem] = useState({});

    // fetching fake data here temporarily... Will add real data when the database integrated
    useEffect(() => {
        fetch('gems.json')
            .then(res => res.json())
            .then(data => setGem(data));
    }, []);

    // rendering description component here
    return (
        <section className='min-h-screen pt-24'>
            <PageTitle title={'Description'} />
            <div className='w-[95%] 2xl:w-4/5 mx-auto my-10 bg-accent shadow-2xl p-3 md:p-5 2xl:p-8 rounded-3xl grid grid-cols-1 2xl:grid-cols-2 gap-10'>
                <ProductGallery images={gem.images} />
                <div className='2xl:text-left mt-3'>
                    <h3 className='text-4xl font-bold text-secondary'>{gem.name}</h3>
                    <div className='mt-3 flex items-center justify-between'>
                        <div className='flex items-center'>
                            <div className='rating rating-sm'>
                                <input type='radio' name='rating-7' className='mask mask-star-2 bg-orange-400 cursor-default' disabled />
                                <input type='radio' name='rating-7' className='mask mask-star-2 bg-orange-400 cursor-default' disabled />
                                <input type='radio' name='rating-7' className='mask mask-star-2 bg-orange-400 cursor-default' disabled />
                                <input type='radio' name='rating-7' className='mask mask-star-2 bg-orange-400 cursor-default' disabled />
                                <input type='radio' name='rating-7' className='mask mask-star-2 bg-orange-400 cursor-default' checked disabled />
                            </div>
                            <p className='ml-2'><small>{gem.totalVotes} Ratings</small></p>
                        </div>
                        <div className='flex'>
                            <BsFillShareFill className='text-base-200 text-xl hover:scale-125 duration-300 cursor-pointer' />
                            <BsFillSuitHeartFill className='text-base-200 text-xl ml-5 hover:scale-125 duration-300 cursor-pointer' />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p>{gem.description}</p>
                        <h3 className='text-3xl text-primary font-semibold my-6'>₹ {gem.price}</h3>
                        <div className='flex flex-col 2xl:flex-row items-center'>
                            <p className='2xl:mr-5'>Available Size:</p>
                            <AvailableSizes sizes={gem.sizes} />
                        </div>
                        <div className='flex flex-col 2xl:flex-row items-center mt-8'>
                            <p className='mb-5 2xl:mb-0 2xl:mr-5'>Quantity:</p>
                            <QuantityChooser />
                        </div>
                        <div className='block 2xl:flex items-center mt-12'>
                            <button className='btn btn-primary text-accent capitalize font-normal rounded-xl w-full 2xl:w-48'>
                                <BiPurchaseTagAlt className='mr-2 text-xl' />
                                Buy Now
                            </button>
                            <button className='btn btn-outline btn-secondary text-accent capitalize font-normal rounded-xl w-full 2xl:w-48 mt-5 2xl:mt-0 2xl:ml-5'>
                                <BsCartPlus className='mr-2 text-xl' />
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Description;