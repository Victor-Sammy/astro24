import React, { useState } from 'react';

const AvailableSizes = ({ sizes }) => {
    // integration of react hooks here
    const [index, setIndex] = useState(0);

    // rendering available sizes component here
    return (
        <div className='grid grid-cols-3 gap-5 mt-5 md:mt-0 md:flex'>
            {
                sizes?.map((size, i) => <div
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`px-3 py-2 border rounded-xl flex justify-center items-center cursor-pointer hover:scale-125 duration-300 ${i !== 0 && 'md:ml-5'} ${i === index ? 'text-primary border-primary' : 'border-base-200 text-base-200'}`}
                >
                    <p>{size} <small>Carat</small></p>
                </div>
                )
            }
        </div>
    );
};

export default AvailableSizes;