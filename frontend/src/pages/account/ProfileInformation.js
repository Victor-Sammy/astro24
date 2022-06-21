import React from 'react';
import UpdateEmail from './UpdateEmail';
import UpdateGender from './UpdateGender';
import UpdateName from './UpdateName';
import UpdatePhone from './UpdatePhone';

const ProfileInformation = () => {
    return (
        <div className='flex flex-col items-start p-8 justify-start'>
            {/* personal info */}
            <UpdateName />
            {/* gender */}
            <UpdateGender />
            {/* email update */}
            <UpdateEmail />
            {/* phone number update update */}
            <UpdatePhone />
        </div>
    );
};

export default ProfileInformation;