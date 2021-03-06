import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';


const AccountDashboard = () => {
    //user from firebase useAuthState hook
    const [user, loading] = useAuthState(auth)
    //you should skip code repeat. so we can you use custom hook but when I'm gonna use custom hook it throw me a error. I think I will fix this error later
    const { isLoading, error, data: account } = useQuery('accountData', () =>
        fetch(`http://localhost:5000/users/${user?.email}`).then(res =>
            res.json()
        )
    )

    //------------------------------------
    //is loading
    if (loading || isLoading) return <p>Loading...</p>
    //is error
    if (error) {
        console.log(error);
    }

    return (
        <div className='pt-24 bg-base-200'>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <div className='w-full bg-base-100 min-h-screen my-4'>
                        <Outlet />
                    </div>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div class="drawer-side ">

                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <div class="menu px-4 overflow-y-auto w-80 bg-base-200 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <div>
                            {/* hello user */}
                            <div className='bg-base-100 flex px-4 py-2 gap-4 rounded-sm'>
                                <div class="avatar">
                                    <div class="w-12 h-12 rounded-full">
                                        <img src={`${user?.photoURL || "https://i.ibb.co/yVMbCBF/images.jpg"}`} alt="" />
                                    </div>
                                </div>
                                <div className='flex items-start flex-col '>
                                    <p>Hello</p>
                                    <h4 className='text-lg font-semibold'>{account?.first_name + " " + account?.last_name}</h4>
                                </div>
                            </div>

                        </div>

                        {/* dash  */}
                        <div className='w-full h-screen  bg-base-100 mt-4 px-6'>
                            <p className='text-lg font-semibold  flex justify-start items-center gap-2 mt-4'><FontAwesomeIcon className='text-primary' icon={faUser} /> ACCOUNT SETTING</p>
                            {/* Links */}
                            <ul className='flex flex-col  items-start ml-3 '>
                                <li><Link to="/account">Profile Information</Link></li>
                                <li><Link to="/account/manage-address">Manage Address</Link></li>
                                <li><Link to="/account/card-info">PAN Card Information</Link></li>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AccountDashboard;