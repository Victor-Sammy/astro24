import React from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr className='flex flex-col'>
                <th class="border border-base-300 flex justify-center items-center w-28 h-20 text xs font-normal">Product</th>
                <th class="border border-base-300 flex justify-center items-center w-28 h-32 text xs font-normal">Image</th>
                <th class="border border-base-300 flex justify-center items-center w-28 h-14 text xs font-normal">Price</th>
                <th class="border border-base-300 flex justify-center items-center w-28 h-20 text xs font-normal">Model</th>
                <th class="border border-base-300 flex justify-center items-center w-28 h-14 text xs font-normal">Brand</th>
                <th class="border border-base-300 flex justify-center items-center w-28 h-14 text xs font-normal">Availability</th>
                <th class="border border-base-300 flex justify-center items-center w-28 h-20 text xs font-normal">Ratting</th>
                <th class="border border-base-300 flex justify-center  w-28 h-72 text xs font-normal">Summary</th>
                <th class="border border-base-300 flex justify-center items-center w-28 h-14 text xs font-normal">Weight</th>
                <th class="border border-base-300 flex justify-center items-center w-28 h-20 text xs font-normal">Dimensions (L x W x H)</th>
                <th class="border border-base-300 flex justify-center items-center w-28 h-24 text xs font-normal"></th>
            </tr>
        </thead>
    );
};

export default TableHead;