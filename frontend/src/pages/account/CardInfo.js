import React from 'react';

const CardInfo = () => {
    return (
        <div className='text-start p-6'>
            <p className='text-lg font-semibold'>Pan Card Information</p>
            <form className=' mt-4 '>
                <div className='flex flex-col gap-4'>
                    <input type="text" placeholder="Pan card number" class="input input-bordered input-md w-full max-w-xs rounded-sm  " />
                    <input type="text" placeholder="Full name" class="input input-bordered input-md w-full max-w-xs rounded-sm  " />
                    <input type="file" placeholder="Type here" class="input input-bordered input-md w-full max-w-xs rounded-sm  pt-2 " />
                </div>

                <div class="form-control">
                    <label class="label cursor-pointer flex justify-start gap-4">
                        <input type="checkbox" class="checkbox" />
                        <span class="label-text">Remember me</span>
                    </label>
                </div>
                <button class="btn btn-primary btn-md rounded-sm   ">Upload </button>
            </form>
        </div>
    );
};

export default CardInfo;