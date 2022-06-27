import React from 'react';

const ReasonForReturn = () => {
    return (
        <div className='bg-base-100'>
            {/* reason for return */}
            <div className='h-16 bg-primary px-10 flex justify-start items-center gap-6 rounded-sm'>
                <span className='bg-base-100 px-2 rounded-sm shadow-md'>1</span>
                <span className='text-base-100 text-lg font-semibold'>REASON FOR RETURN</span>
            </div>

            {/* form */}
            <form className='lg:w-[80%] mx-auto py-8 flex flex-col gap-8'>
                <div className='flex justify-between'>
                    <label htmlFor="">Reason details</label>
                    <select class="bg-transparent w-full max-w-xs lg:max-w-lg  border-b border-base-200">
                        <option disabled selected>Select reason </option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                </div>
                <div className='flex justify-between'>
                    <label htmlFor="">Reason for return</label>
                    <select class="bg-transparent w-full max-w-xs lg:max-w-lg  border-b border-base-200">
                        <option disabled selected>Select reason details</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                </div>
                <div className='flex justify-between'>
                    <label htmlFor="">Comment</label>
                    <textarea className='textarea w-full max-w-xs lg:max-w-lg  border-b border-base-200 rounded-sm h-32'
                        placeholder='eg: Something is damage.'></textarea>
                </div>

                <div className='text-end'>
                    <button className='btn rounded-sm btn-sm'>Continue</button>
                </div>
            </form>

        </div>
    );
};

export default ReasonForReturn;