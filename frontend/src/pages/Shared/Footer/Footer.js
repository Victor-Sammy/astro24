import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {

    // rendering the footer component here
    return (
        <footer className='bg-primary h-52'>
            <div className='w-4/5 mx-auto text-accent flex flex-col-reverse md:flex-row justify-center md:justify-between items-center h-full'>
                <div>
                    <p className='mt-8 md:mt-0 text-lg'>©Astrology24, 2022.</p>
                </div>
                <div>
                    <p className='mb-2 text-lg'>Find Us On Social Media</p>
                    <a href="#" >
                        <button className='bg-accent p-4 rounded-full hover:scale-125 hover:rotate-[360deg] duration-300'>
                            <FaFacebookF className='h-6 w-6 text-secondary' />
                        </button>
                    </a>
                    <a href="#" >
                        <button className='ml-5 bg-accent p-4 rounded-full hover:scale-125 hover:rotate-[360deg] duration-300'>
                            <BsInstagram className='h-6 w-6 text-secondary' />
                        </button>
                    </a>
                    <a href="#" >
                        <button className='ml-5 bg-accent p-4 rounded-full hover:scale-125 hover:rotate-[360deg] duration-300'>
                            <BsTwitter className='h-6 w-6 text-secondary' />
                        </button>
                    </a>
                    <a href="#" >
                        <button className='ml-5 bg-accent p-4 rounded-full hover:scale-125 hover:rotate-[360deg] duration-300'>
                            <FaLinkedinIn className='h-6 w-6 text-secondary' />
                        </button>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;