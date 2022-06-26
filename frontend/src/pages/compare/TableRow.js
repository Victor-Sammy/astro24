import React from 'react';

const TableRow = () => {
    return (
        <tbody>
            <tr className='flex flex-col'>

                <td
                    class="border border-base-200 flex justify-center items-center w-60 h-20 px-6 text-lg font-semibold">
                    T-SHIRT- BLACK-P.GREEN-YELLOW
                </td>
                <td
                    class="border border-base-200 flex justify-center items-center w-60 h-32">
                    <img
                        className=' w-24 h-24'
                        src="https://shivnaresh.in/image/cache/catalog/AA-All%20Images/T-Shirts/843B/BK-PG-YL/IMG_4184-90x90.JPG"
                        alt="" />
                </td>
                <td
                    class="border border-base-200 flex justify-center items-center gap-2 w-60 h-14">
                    <span
                        className='line-through'>
                        ₹662
                    </span>
                    <span>₹512</span>
                </td>
                <td
                    class="border border-base-200 flex justify-center items-center w-60 h-20">
                    843B INTERLOCK
                </td>
                <td
                    class="border border-base-200 flex justify-center items-center w-60 h-14">
                    Astrology 24
                </td>
                <td
                    class="border border-base-200 flex justify-center items-center w-60 h-14">
                    In Stock
                </td>
                <td
                    class="border border-base-200 flex flex-col justify-center items-center w-60 h-20">
                    {/* stars */}
                    <div class="rating ">
                        <input type="radio" name="rating-1" class="mask mask-star w-4" />
                        <input type="radio" name="rating-1" class="mask mask-star w-4" checked />
                        <input type="radio" name="rating-1" class="mask mask-star w-4" />
                        <input type="radio" name="rating-1" class="mask mask-star w-4" />
                        <input type="radio" name="rating-1" class="mask mask-star w-4" />
                    </div>
                    <p>Based on 0 reviews.</p>
                </td>
                <td
                    class="border border-base-200 text-start px-4 w-60 h-72">
                    T SHIRT DRY FIT MATERIAL IN INTERLOCK FABRIC  DESIGN FOR ALL TYPE OF INDOOR AND OUTDOOR GAMES Athletic wearMachine wash coldwash dark colors separately, delicate cycle.Do not bleach. line dr..
                </td>
                <td
                    class="border border-base-200 flex justify-center items-center w-60 h-14">
                    300.00g
                </td>
                <td
                    class="border border-base-200 flex justify-center items-center w-60 h-20">
                    0.00cm x 0.00cm x 0.00cm
                </td>
                <td
                    class="border border-base-200 flex flex-col justify-center items-center w-60 h-24 gap-2">
                    <button className='btn btn-sm rounded-sm btn-primary '>Add To Cart</button>
                    <button className='btn btn-sm rounded-sm btn-error'>Add To Cart</button>
                </td>
            </tr>

        </tbody>
    );
};

export default TableRow;