import React from 'react';

const ReturnAction = () => {
    return (
        <>
            <div class="collapse">
                <input type="checkbox" class="peer" />
                <div class="collapse-title bg-base-100 text-gray-500 peer-checked:bg-primary peer-checked:text-white h-16  mt-6 px-10 flex justify-start items-center gap-6 rounded-sm">
                    <span className='bg-gray-300 text-primary px-2 rounded-sm shadow-md'>3</span>
                    <span className=' text-lg font-semibold'>RETURN ACTION</span>
                </div>
                <div class="collapse-content bg-primary text-primary-content peer-checked:bg-base-100 peer-checked:text-secondary-content">
                    <div tabindex="0">
                        <div class="form-control">
                            <label class="label cursor-pointer flex justify-start gap-4 ">
                                <input type="radio" name="radio-6" class="radio checked:blue-500 " checked />
                                <span class="label-text">Return</span>
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="label cursor-pointer  flex justify-start gap-4">
                                <input type="radio" name="radio-6" class="radio checked:bg-blue-500" checked />
                                <span class="label-text">Replace</span>
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

export default ReturnAction;