import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import useAccount from '../../hooks/useAccount';

const UpdateEmail = () => {
    //hook form
    const { register, handleSubmit } = useForm({ mode: onchange });
    //user from fire base useAuthState hook
    const [user, loading] = useAuthState(auth)
    //get user's account from hook
    // const { account } = useAccount(user)
    //use state for toggle edit  button
    const [editEmail, setEditEmail] = useState(false)
    //is loading
    if (loading) return <p> Loading...</p>
    // form handle
    const onSubmit = async (data) => {
        console.log("email", data);

        /*    // console.log(UpdateData);
           (async () => {
               const { _id, email, ...rest } = account
               const UpdateData = { ...rest, ...data }
               console.log(data);
               const { res } = await axios.put(
                   `http://localhost:5000/users/${email}`, UpdateData
               );
               console.log(res);
           })(); */
    }
    return (
        <section className='mt-16'>
            <p className='flex gap-4'>
                <span className='text-lg font-semibold'>Email Address</span>
                <button onClick={() => setEditEmail(!editEmail)} className='text-primary'>{editEmail ? "Cancel" : "Edit"}</button>
                <button className='text-primary'>Change password</button>
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className='flex gap-4 mt-6' >
                {/*email */}
                <input
                    {...register("email")} className='h-12 rounded-sm border-2 pl-4' disabled={!editEmail ? true : false} defaultValue={user?.email} type="text" name="" id="" />
                <button className={`h-12 rounded-sm px-8 bg-primary text-base-100 ${editEmail ? "block" : "hidden"}`}>SAVE</button>
            </form>
        </section>
    );
};

export default UpdateEmail;