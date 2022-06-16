import React, { useState } from 'react';

const ProfileInformation = () => {
    const [editPersonalInfo, setEditPersonalInfo] = useState(false)
    const [editEmail, setEditEmail] = useState(false)
    const [editPhone, setEditPhone] = useState(false)

    return (
        <div className='flex flex-col items-start p-8 justify-start'>
            {/* personal info */}
            <div>
                <p className='flex gap-4'>
                    <span className='text-lg font-semibold'>Personal Information</span>
                    <button onClick={() => setEditPersonalInfo(!editPersonalInfo)} className='text-primary'>{editPersonalInfo ? "Cancel" : "Edit"}</button>
                </p>
                <form className='flex gap-4 mt-6' >
                    {/* first name */}
                    <input className='h-12 rounded-sm border-2 pl-4' disabled={!editPersonalInfo ? true : false} defaultValue="Dr" type="text" name="" id="" />
                    {/* last name */}
                    <input className='h-12 rounded-sm border-2 pl-4' disabled={!editPersonalInfo ? true : false} defaultValue="Someone" type="text" name="" id="" />
                    <button className={`h-12 rounded-sm px-8 bg-primary text-base-100 ${editPersonalInfo ? "block" : "hidden"}`}>SAVE</button>
                </form>
            </div>
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
                    <input className='h-12 rounded-sm border-2 pl-4' disabled={!editEmail ? true : false} defaultValue="someone@gmail.com" type="text" name="" id="" />
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
                    <input className='h-12 rounded-sm border-2 pl-4' disabled={!editPhone ? true : false} defaultValue="+91 86306 84627" type="text" name="" id="" />
                    <button className={`h-12 rounded-sm px-8 bg-primary text-base-100 ${editPhone ? "block" : "hidden"}`}>SAVE</button>
                </form>
            </section>
        </div>
    );
};

export default ProfileInformation;