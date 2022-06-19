import React from 'react';
import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const QuantityChooser = () => {
    // integration of react hooks here
    const [quantity, setQuantity] = useState(1);

    const alterQuantity = alterBy => {
        setQuantity(quantity + alterBy);
    }

    // rendering quantity chooser component here
    return (
        <div className='flex'>
            <button
                onClick={() => alterQuantity(-1)}
                className='btn btn-outline border-base-200 hover:bg-transparent hover:border-primary hover:text-primary rounded-r-none disabled:cursor-not-allowed' disabled={quantity === 1}>
                <AiOutlineMinus />
            </button>
            <input type='text' value={quantity} className='border-t border-b border-base-200 w-20 text-center text-base-200 font-semibold text-lg' readOnly disabled />
            <button
                onClick={() => alterQuantity(1)}
                className='btn btn-outline border-base-200 hover:bg-base-200 hover:bg-transparent hover:border-primary hover:text-primary rounded-l-none'>
                <AiOutlinePlus />
            </button>
        </div>
    );
};

export default QuantityChooser;