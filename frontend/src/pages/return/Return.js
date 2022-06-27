import React from 'react';
import PickUpAddress from './PickUpAddress';
import ReasonForReturn from './ReasonForReturn';
import ReturnAction from './ReturnAction';

const Return = () => {

    // rendering banner component here
    return (
        <div className='bg-base-200 min-h-screen  pt-28 pb-8 px-8'>
            {/* reason for return */}
            <ReasonForReturn />
            {/* pick up address */}
            <PickUpAddress />
            {/* pick up address */}
            <ReturnAction />
        </div>
    );
};

export default Return;