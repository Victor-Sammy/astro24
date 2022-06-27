import React, { useEffect, useState } from 'react';
import { BsFillShareFill, BsFillSuitHeartFill, BsCartPlus } from 'react-icons/bs';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import { IoIosGitCompare } from 'react-icons/io';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import AvailableSizes from '../AvailableSizes/AvailableSizes';
import ProductGallery from '../ProductGallery/ProductGallery';
import QuantityChooser from '../QuantityChooser/QuantityChooser';
import { MdArrowForward, MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Description = () => {
    // integration of react hooks here
    const [gem, setGem] = useState({});

    // fetching fake data here temporarily... Will add real data when the database integrated
    useEffect(() => {
        fetch('gems.json')
            .then(res => res.json())
            .then(data => setGem(data));
    }, []);

    // event handler for left slide button
    const slideL = () => {
        var slid = document.getElementById('slid')
        slid.scrollLeft = slid.scrollLeft - 500
    }

    // event handler for right slide button
    const slideR = () => {
        var slid = document.getElementById('slid')
        slid.scrollLeft = slid.scrollLeft + 500
    }

    // rendering description component here
    return (
        <section className='min-h-screen pt-24'>
            <PageTitle title={'Description'} />
            <div className='w-[95%] 2xl:w-4/5 mx-auto my-10 bg-accent shadow-2xl p-3 md:p-5 2xl:p-8 rounded-3xl grid grid-cols-1 2xl:grid-cols-2 gap-10'>
                <ProductGallery images={gem?.images} />
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
                    </div>
                </div>
                <div className='block 2xl:grid grid-cols-3 gap-6 w-full'>
                    <button className='btn btn-primary text-accent capitalize font-normal rounded-xl w-full'>
                        <BiPurchaseTagAlt className='mr-2 text-xl' />
                        Buy Now
                    </button>
                    <button className='btn btn-secondary text-accent capitalize font-normal rounded-xl mt-5 2xl:mt-0 w-full hover:opacity-60'>
                        <BsCartPlus className='mr-2 text-xl' />
                        Add To Cart
                    </button>
                    <button className='btn btn-outline btn-secondary text-accent capitalize font-normal rounded-xl mt-5 2xl:mt-0 w-full'>
                        <IoIosGitCompare className='mr-2 text-xl' />
                        Compare
                    </button>
                </div>
            </div>
            <div className='w-[95%] 2xl:w-4/5 mx-auto mt-32 mb-10 bg-accent shadow-2xl p-3 md:p-5 2xl:p-8 rounded-3xl'>
                <div className='flex items-center justify-between rounded-md'>
                    <div className='cat-title lg:text-2xl md:text-lg font-semibold text-secondary mb-1 rounded-md'>
                        Related Gems
                    </div>
                    <div className='btn btn-link lg:text-lg md:text-sm sm:text-sm font-semibold text-primary bg-transparent rounded-md border-none capitalize p-0 hover:no-underline hover:opacity-60'>
                        <Link to='/upcomingAll'>View all</Link>
                        <MdArrowForward className='text-lg' />
                    </div>
                </div>
                <div className='upcoming relative flex items-center justify-center bg-white mb-10 drop-shadow-3xl rounded-md'>
                    <MdChevronLeft
                        className='cursor-pointer opacity-50 hover:opacity-100'
                        onClick={slideL}
                        size={40}
                    />
                    <div
                        id='slid'
                        className='w-full h-full flex items-center overflow-x-scroll scroll whitespace-nowrap scroll-smooth cursor-pointer'
                    >
                        <div className='lg:mr-5 mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md p-5 2xl:p-0'>
                            <div className='img-con w-full flex justify-center items-center cursor-pointer'>
                                <img
                                    className='w-full'
                                    src='https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg'
                                    alt='white topaz'
                                />
                            </div>
                            <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                                Gem
                            </h1>
                            <p className='text-primary lg:text-xl md:text-lg text-center'>
                                ₹250
                            </p>
                        </div>
                        <div className='lg:mr-5 mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md p-5 2xl:p-0'>
                            <div className='img-con w-full flex justify-center items-center cursor-pointer'>
                                <img
                                    className='w-full'
                                    src='https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg'
                                    alt='white topaz'
                                />
                            </div>
                            <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                                Gem
                            </h1>
                            <p className='text-primary lg:text-xl md:text-lg text-center'>
                                ₹250
                            </p>
                        </div>
                        <div className='lg:mr-5 mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md p-5 2xl:p-0'>
                            <div className='img-con w-full flex justify-center items-center cursor-pointer'>
                                <img
                                    className='w-full'
                                    src='https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg'
                                    alt='white topaz'
                                />
                            </div>
                            <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                                Gem
                            </h1>
                            <p className='text-primary lg:text-xl md:text-lg text-center'>
                                ₹250
                            </p>
                        </div>
                        <div className='lg:mr-5 mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md p-5 2xl:p-0'>
                            <div className='img-con w-full flex justify-center items-center cursor-pointer'>
                                <img
                                    className='w-full'
                                    src='https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg'
                                    alt='white topaz'
                                />
                            </div>
                            <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                                Gem
                            </h1>
                            <p className='text-primary lg:text-xl md:text-lg text-center'>
                                ₹250
                            </p>
                        </div>
                        <div className='lg:mr-5 mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md p-5 2xl:p-0'>
                            <div className='img-con w-full flex justify-center items-center cursor-pointer'>
                                <img
                                    className='w-full'
                                    src='https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg'
                                    alt='white topaz'
                                />
                            </div>
                            <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                                Gem
                            </h1>
                            <p className='text-primary lg:text-xl md:text-lg text-center'>
                                ₹250
                            </p>
                        </div>
                        <div className='lg:mr-5 mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md p-5 2xl:p-0'>
                            <div className='img-con w-full flex justify-center items-center cursor-pointer'>
                                <img
                                    className='w-full'
                                    src='https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg'
                                    alt='white topaz'
                                />
                            </div>
                            <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                                Gem
                            </h1>
                            <p className='text-primary lg:text-xl md:text-lg text-center'>
                                ₹250
                            </p>
                        </div>
                        <div className='lg:mr-5 mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md p-5 2xl:p-0'>
                            <div className='img-con w-full flex justify-center items-center cursor-pointer'>
                                <img
                                    className='w-full'
                                    src='https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg'
                                    alt='white topaz'
                                />
                            </div>
                            <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                                Gem
                            </h1>
                            <p className='text-primary lg:text-xl md:text-lg text-center'>
                                ₹250
                            </p>
                        </div>
                        <div className='lg:mr-5 mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md p-5 2xl:p-0'>
                            <div className='img-con w-full flex justify-center items-center cursor-pointer'>
                                <img
                                    className='w-full'
                                    src='https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg'
                                    alt='white topaz'
                                />
                            </div>
                            <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                                Gem
                            </h1>
                            <p className='text-primary lg:text-xl md:text-lg text-center'>
                                ₹250
                            </p>
                        </div>
                        <div className='lg:mr-5 mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md p-5 2xl:p-0'>
                            <div className='img-con w-full flex justify-center items-center cursor-pointer'>
                                <img
                                    className='w-full'
                                    src='https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg'
                                    alt='white topaz'
                                />
                            </div>
                            <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                                Gem
                            </h1>
                            <p className='text-primary lg:text-xl md:text-lg text-center'>
                                ₹250
                            </p>
                        </div>
                        <div className='lg:mr-5 mr-3 hover:scale-105 ease-in-out duration-300 border rounded-md shadow-md p-5 2xl:p-0'>
                            <div className='img-con w-full flex justify-center items-center cursor-pointer'>
                                <img
                                    className='w-full'
                                    src='https://i.pinimg.com/236x/2a/3b/2b/2a3b2b2e841721454fe9da3023acaa2c.jpg'
                                    alt='white topaz'
                                />
                            </div>
                            <h1 className='text-secondary font-semibold lg:text-lg md:text-sm text-center'>
                                Gem
                            </h1>
                            <p className='text-primary lg:text-xl md:text-lg text-center'>
                                ₹250
                            </p>
                        </div>
                    </div>
                    <MdChevronRight
                        className='cursor-pointer opacity-50 hover:opacity-100'
                        onClick={slideR}
                        size={40}
                    />
                </div>
            </div>
        </section>
    );
};

export default Description;