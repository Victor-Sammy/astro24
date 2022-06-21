import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faFolder, faHeart, faRightFromBracket, faSort, faSortUp, faUser, faWallet } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const NavigateAccount = ({ user }) => {
    return (
        <div class="group dropdown dropdown-hover dropdown-end">
            <label tabindex="0" class=" m-1">
                {user?.displayName.split(' ')[0]} <FontAwesomeIcon className='text-xs transform duration-200 group-hover:rotate-180' icon={faAngleDown} /></label>
            <ul tabindex="0" class="dropdown-content  shadow bg-base-100 text-primary rounded-sm w-52">
                {/* profile */}
                <li
                    className='flex items-center hover:bg-base-200 border-b border-base-200'> <FontAwesomeIcon
                        className='hover:bg-transparent'
                        icon={faUser} />
                    <Link
                        className='hover:bg-transparent'
                        to="/">Profile</Link></li>
                {/* orders */}
                <li
                    className='flex items-center hover:bg-base-200 border-b border-base-200'> <FontAwesomeIcon
                        className='hover:bg-transparent'
                        icon={faFolder} />
                    <Link
                        className='hover:bg-transparent'
                        to="/">Orders</Link></li>
                {/* wishlist */}
                <li
                    className='flex items-center hover:bg-base-200 border-b border-base-200'> <FontAwesomeIcon
                        className='hover:bg-transparent'
                        icon={faHeart} /><Link
                            className='hover:bg-transparent'
                            to="/">Wishlist</Link></li>
                {/* wallet */}
                <li
                    className='flex items-center hover:bg-base-200 border-b border-base-200'> <FontAwesomeIcon
                        className='hover:bg-transparent'
                        icon={faWallet} />
                    <Link
                        className='hover:bg-transparent'
                        to="/">Wallet</Link></li>
                {/* logout */}
                <li
                    className='flex items-center hover:bg-base-200 border-b border-base-200'> <FontAwesomeIcon
                        className='hover:bg-transparent'
                        icon={faRightFromBracket} />
                    <button
                        className='hover:bg-transparent'
                        to="/">Logout</button></li>
                <FontAwesomeIcon className='absolute text-white text-lg -top-[6px] right-6' icon={faSortUp} />
            </ul>
        </div>
    );
};

export default NavigateAccount;