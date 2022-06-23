import React from 'react';

const PickUpAddress = () => {
    return (
        <>
            <div class="collapse">
                <input type="checkbox" class="peer" />
                <div class="collapse-title bg-base-100 text-gray-500 peer-checked:bg-primary peer-checked:text-white h-16  mt-6 px-10 flex justify-start items-center gap-6 rounded-sm">
                    <span className='bg-gray-300 text-primary px-2 rounded-sm shadow-md'>2</span>
                    <span className=' text-lg font-semibold'>PICKUP ADDRESS</span>
                </div>
                <div class="collapse-content bg-primary text-primary-content peer-checked:bg-base-100 peer-checked:text-secondary-content">
                    <div tabindex="0">
                        <div class="form-control">
                            <label class="label cursor-pointer flex justify-start items-start gap-6 pl-6">
                                <input type="radio" name="radio-1" class="radio checked:bg-blue-500" />
                                <div class="label-text flex flex-col gap-2">
                                    <p className='text-lg font-semibold flex gap-4'><span>Amit Shigh</span><span>11551155511</span></p>
                                    <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, necessitatibus- 1000</p>
                                    <button className='btn btn-primary rounded-sm w-[150px]'>Select</button>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>

            </div>
        </>
    );
};

export default PickUpAddress;