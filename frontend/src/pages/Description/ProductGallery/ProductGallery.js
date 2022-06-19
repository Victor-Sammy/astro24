import React from 'react';
import { useState } from 'react';

const ProductGallery = ({ images }) => {
    // integration of react hooks here
    const [index, setIndex] = useState(0);

    // rendering product gallery component here
    return (
        <div>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='grid grid-cols-5 gap-2 md:block mt-8 md:mt-0'>
                    {
                        images?.map((img, i) => <img
                            key={i}
                            src={img}
                            alt={i}
                            onClick={() => setIndex(i)}
                            className={`md:h-24 md:w-24 ${i !== 0 && 'md:mt-5'} rounded-2xl cursor-pointer hover:scale-110 duration-300 ${i === index && 'border-4 border-secondary'}`}
                        />)
                    }
                </div>
                <div className='md:ml-10 flex-1'>
                    <img className='w-full rounded-2xl' src={images && images[index]} alt={index} />
                </div>
            </div>
        </div>
    );
};

export default ProductGallery;