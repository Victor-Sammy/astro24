import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth"
import auth from '../../../firebase.init';
import NavigateAccount from './NavigateAccount';


const Header = () => {
    const [user, Loading] = useAuthState(auth)

    //is loading 
    if (Loading) return <p>Loading...</p>

    // rendering the header component here
    return (
        <header className='bg-primary w-full fixed z-50'>
            <nav className='md:w-4/5 mx-auto'>
                <div className='navbar text-accent py-5'>
                    <div className='navbar-start'>
                        <div className='dropdown'>
                            <label tabIndex='0' className='btn btn-ghost lg:hidden'>
                                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' /></svg>
                            </label>
                            <ul tabIndex='0' className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52'>
                                <li><Link to="/wallet">Wallet</Link></li>
                                <li><Link to="/account">Wallet</Link></li>

                                <a className='btn btn-secondary text-accent capitalize font-normal rounded-xl'>Connect With Us</a>
                            </ul>
                        </div>
                        <a className='btn btn-ghost normal-case text-2xl font-bold'>Astrology<span className='font-extralight text-lg'>24</span></a>
                    </div>
                    <div className='navbar-end hidden md:inline-flex'>
                        <ul className='menu menu-horizontal p-0'>
                            {/* dropdown on hover */}
                            <NavigateAccount user={user} />

                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;