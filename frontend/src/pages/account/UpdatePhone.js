import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import useAccount from '../../hooks/useAccount';

const UpdatePhone = () => {
    //hook form
    const { register, handleSubmit } = useForm({ mode: onchange });

    const [user] = useAuthState(auth)
    const email = user?.email;
    const [editPhone, setEditPhone] = useState(false)

    const { account } = useAccount(user)
    console.log(account);

    const { _id, phoneNumber, ...rest } = account
    console.log(_id);
    // form handle
    const onSubmit = async (data) => {
        console.log(data);
        const UpdateData = { PhoneNumber: data?.phone_number, ...rest }
        console.log(UpdateData);
        // console.log(UpdateData);
        (async () => {
            const { data } = await axios.put(
                `http://localhost:5000/users/${email}`,
                UpdateData
            );
            console.log(data);
        })();
    }

    return (
        <section className='mt-16'>
            <p className='flex gap-4'>
                <span className='text-lg font-semibold'>Mobile Number</span>
                <button onClick={() => setEditPhone(!editPhone)} className='text-primary'>{editPhone ? "Cancel" : "Edit"}</button>
            </p>
            <form onSubmit={handleSubmit(onSubmit)}
                className='flex gap-4 mt-6' >
                {/*email */}
                <input  {...register("phone_number")} className='h-12 rounded-sm border-2 pl-4' disabled={!editPhone ? true : false} type="text" defaultValue={/* phoneNumber || */ ""} name="" id="" />
                <button className={`h-12 rounded-sm px-8 bg-primary text-base-100 ${editPhone ? "block" : "hidden"}`}>SAVE</button>
            </form>
        </section>
    );
};

export default UpdatePhone;