import React from 'react';

const Header = () => {

    // rendering the header component here
    return (
        <header className='bg-primary w-full fixed'>
            <nav className='md:w-4/5 mx-auto'>
                <div className='navbar text-accent py-5'>
                    <div className='navbar-start'>
                        <div className='dropdown'>
                            <label tabIndex='0' className='btn btn-ghost lg:hidden'>
                                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' /></svg>
                            </label>
                            <ul tabIndex='0' className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52'>
                                <li><a>Item 1</a></li>
                                <li><a>Item 3</a></li>
                                <a className='btn btn-secondary text-accent capitalize font-normal rounded-xl'>Connect With Us</a>
                            </ul>
                        </div>
                        <a className='btn btn-ghost normal-case text-2xl font-bold'>Astrology<span className='font-extralight text-lg'>24</span></a>
                    </div>
                    <div className='navbar-end hidden md:inline-flex'>
                        <ul className='menu menu-horizontal p-0'>
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                        <a className='btn btn-secondary text-accent capitalize font-normal rounded-xl'>Connect With Us</a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;