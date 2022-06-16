import React, { useState } from 'react';

const ProfileInformation = () => {
    const [editPersonalInfo, setEditPersonalInfo] = useState(false)
    console.log(editPersonalInfo);
    return (
        <div className='flex flex-col items-start p-8'>
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
        </div>
    );
};

export default ProfileInformation;