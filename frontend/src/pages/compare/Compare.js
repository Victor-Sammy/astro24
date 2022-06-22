import React from 'react';
import TableHead from './TableHead';
import TableRow from './TableRow';

const Compare = () => {
    return (
        <div className='pt-24 pb-16 w-[80%] overflow-x-auto mx-auto '>
            <p className='text-lg text-start my-6 font-bold'>PRODUCT COMPARISON</p>
            <p className='flex justify-start items-center text-lg font-semibold  w-[1072px] h-16 pl-6  bg-base-200'>Products Details</p>

            <table class="border-collapse flex ">
                <TableHead />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />

            </table>
        </div>


    );
};

export default Compare;