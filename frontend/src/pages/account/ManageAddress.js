import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ManageAddress = () => {
    return (
        <div className='text-start px-8 pt-8'>
            <p className='text-lg font-semibold'>Manage Address</p>
            {/* add new address */}
            <div className='p-6 bg-base-100'>
                <p className='font-semibold text-primary'>ADD NEW ADDRESS</p>
                {/* use my location */}
                <button className='bg-primary mt-6 px-8 py-3 rounded-sm text-base-100'> <FontAwesomeIcon icon={faLocationCrosshairs} /> Use my location</button>
                {/* form */}
                <form className='flex flex-col gap-4 mt-4 '>
                    <div className='flex gap-4'>
                        <input className='border-2 h-12 pl-4 w-[230px]' placeholder='Name' type="text" name="" id="" />
                        <input className='border-2 h-12 pl-4 w-[230px]' placeholder='10-digit mobile number' type="text" name="" id="" />
                    </div>
                    <div className='flex gap-4'>

                        <input className='border-2 h-12  pl-4 w-[230px] ' placeholder='Pincode' type="text" name="" id="" />
                        <input className='border-2 h-12  pl-4 w-[230px] ' placeholder='Locality' type="text" name="" id="" />
                    </div>
                    <textarea className='border-2 pl-4 pt-4  max-w-[476px] h-28' placeholder='Address(Area and street)' name="" id=""></textarea>
                    <div className='flex gap-4'>

                        <input className='border-2 h-12  pl-4 w-[230px] ' placeholder='City/District/Town' type="text" name="" id="" />
                        <select className='border-2 h-12  pl-4 w-[230px] ' name="cars" id="cars">
                            <option value="volvo">State 1</option>
                            <option value="saab">State 2</option>
                            <option value="mercedes">State 3</option>
                            <option value="audi">State 4</option>
                        </select>
                    </div>
                    <div className='flex gap-4'>
                        <input className='border-2 h-12  pl-4 w-[230px] ' placeholder='Landmark(optional)' type="se" name="" id="" />
                        <input className='border-2 h-12  pl-4 w-[230px] ' placeholder='Alt phone(optional)' type="text" name="" id="" />
                    </div>
                    {/* address */}
                    <section className='text-start'>
                        <p className='mb-4'>Address type</p>
                        <div className='flex items-center  gap-4'>
                            <input type="radio" name="radio-1" class="radio" checked />
                            <label >Home</label>
                            <input type="radio" name="radio-1" class="radio" />
                            <label >Office</label>
                        </div>
                    </section>
                    <div>

                        <button className='btn-primary w-52 h-12 text-base-100 rounded-sm'>Save</button> <button className='mx-6'>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ManageAddress;