import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';

const AccountDashboard = () => {
    return (
        <div className='pt-28 bg-base-200'>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <div className='w-full h-screen bg-base-100'></div>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div class="drawer-side ">

                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <div class="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <div>
                            {/* hello user */}
                            <div className='bg-base-100 flex px-4 py-2 gap-4 rounded-sm'>
                                <div class="avatar">
                                    <div class="w-12 rounded-full">
                                        <img src="https://api.lorem.space/image/face?hash=92310" />
                                    </div>
                                </div>
                                <div className='flex items-start flex-col '>
                                    <p>Hello</p>
                                    <h4 className='text-lg font-semibold'>Dr Someone</h4>
                                </div>
                            </div>
                        </div>

                        {/* dash nav */}
                        <div className='w-full h-screen  bg-base-100 mt-4 px-6'>
                            <p className='text-lg font-semibold  flex justify-start items-center gap-2 mt-4'><FontAwesomeIcon className='text-primary' icon={faUser} /> ACCOUNT SETTING</p>
                            <ul className='flex flex-col  items-start ml-3 '>
                                <li><NavLink to="/">Profile Information</NavLink></li>
                                <li><NavLink to="/">Manage Address</NavLink></li>
                                <li><NavLink to="/">PAN Card Information</NavLink></li>

                            </ul>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AccountDashboard;