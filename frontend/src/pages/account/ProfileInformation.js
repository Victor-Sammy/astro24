import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAccount from '../../hooks/useAccount';
import UpdateName from './UpdateName';

const ProfileInformation = () => {
    //user from fire base useAuthState hook
    const [user, loading] = useAuthState(auth)
    const [account] = useAccount(user)
    // console.log(account);

    //useState hooks for button toggle

    const [editEmail, setEditEmail] = useState(false)
    const [editPhone, setEditPhone] = useState(false)
    //loading
    if (loading) {
        return <p>Loading...</p>
    }


    return (
        <div className='flex flex-col items-start p-8 justify-start'>
            {/* personal info */}
            <UpdateName />
            {/* gender */}
            <section className='text-start mt-8'>

                <p className='mb-4'>Your gender</p>
                <form className='flex items-center  gap-4'>

                    <input type="radio" name="radio-1" class="radio" checked />
                    <label >Male</label>


                    <input type="radio" name="radio-1" class="radio" />
                    <label >Female</label>

                </form>
            </section>
            {/* email update */}
            <section className='mt-16'>
                <p className='flex gap-4'>
                    <span className='text-lg font-semibold'>Email Address</span>
                    <button onClick={() => setEditEmail(!editEmail)} className='text-primary'>{editEmail ? "Cancel" : "Edit"}</button>
                    <button className='text-primary'>Change password</button>
                </p>
                <form className='flex gap-4 mt-6' >
                    {/*email */}
                    <input className='h-12 rounded-sm border-2 pl-4' disabled={!editEmail ? true : false} defaultValue={user?.email} type="text" name="" id="" />
                    <button className={`h-12 rounded-sm px-8 bg-primary text-base-100 ${editEmail ? "block" : "hidden"}`}>SAVE</button>
                </form>
            </section>
            {/* phone number update update */}
            <section className='mt-16'>
                <p className='flex gap-4'>
                    <span className='text-lg font-semibold'>Mobile Number</span>
                    <button onClick={() => setEditPhone(!editPhone)} className='text-primary'>{editPhone ? "Cancel" : "Edit"}</button>
                </p>
                <form className='flex gap-4 mt-6' >
                    {/*email */}
                    <input className='h-12 rounded-sm border-2 pl-4' disabled={!editPhone ? true : false} defaultValue={`Enter mobile number`} type="text" name="" id="" />
                    <button className={`h-12 rounded-sm px-8 bg-primary text-base-100 ${editPhone ? "block" : "hidden"}`}>SAVE</button>
                </form>
            </section>
        </div>
    );
};

export default ProfileInformation;