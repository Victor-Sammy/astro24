import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { useQuery } from "react-query";
import { toast } from 'react-toastify';

const UpdatePhone = () => {
    //hook form
    const { register, handleSubmit } = useForm({ mode: onchange });
    //user from fire base useAuthState hook
    const [user, loading] = useAuthState(auth)
    //you should skip code repeat. so we can you use custom hook but when I'm gonna use custom hook it throw me a error. I think I will fix this error later
    const { isLoading, error, data: account } = useQuery('accountData', () =>
        fetch(`http://localhost:5000/users/${user?.email}`).then(res =>
            res.json()
        )
    )

    //------------------------------------
    //use state for toggle edit  button
    const [editPhone, setEditPhone] = useState(false)
    //is loading
    if (loading || isLoading) return <p> Loading...</p>
    //is errors
    if (error) {
        console.log(error);
    }
    // form handle
    const onSubmit = async (phone) => {

        // console.log(UpdateData);
        (async () => {
            const { _id, phoneNumber, ...rest } = account

            const UpdateData = { ...rest, phoneNumber: phone?.phone }
            console.log(phone);
            const { data } = await axios.put(
                `http://localhost:5000/users/${user?.email}`, UpdateData
            );
            console.log(data);
            setEditPhone(false)
            toast.success('Phone number successfully updated!!!')
        })();
    }
    return (
        <section className='mt-16'>
            <p className='flex gap-4'>
                <span
                    className='text-lg font-semibold'>Phone number</span>
                <button
                    onClick={() => setEditPhone(!editPhone)}
                    className='text-primary'>{editPhone ? "Cancel" : "Edit"}</button>
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className='flex gap-4 mt-6' >
                {/*email */}
                <input
                    {...register("phone")}
                    className='h-12 rounded-sm border-2 pl-4'
                    disabled={!editPhone ? true : false} defaultValue={account?.phoneNumber || "Enter phone number"}
                    type="text"
                />
                <button
                    className={`h-12 rounded-sm px-8 bg-primary text-base-100 ${editPhone ? "block" : "hidden"}`}>SAVE</button>
            </form>
        </section>
    );
};

export default UpdatePhone;