import React from 'react';
import { GrMail } from 'react-icons/gr';

const ForgotPasswordModal = () => {

    // rendering forgot password modal component here
    return (
        <div>
            <input type='checkbox' id='forgot-password-modal' className='modal-toggle' />
            <div className='modal modal-bottom sm:modal-middle'>
                <div className='modal-box relative'>
                    <label htmlFor='forgot-password-modal' className='btn btn-sm btn-circle absolute right-2 top-2'>✕</label>
                    <h3 className='font-bold text-lg'>Reset Password Verification Email</h3>
                    <p className='pb-4 text-sm'>Please, enter your email. We will send a password reset link into your email.</p>
                    <input type='email' placeholder='Enter Your Email' className='input input-bordered border-secondary border-2 w-full font-semibold text-base text-secondary' />
                    <div className='modal-action'>
                        <label htmlFor='forgot-password-modal' className='btn bg-green-700 text-accent text-base font-light capitalize border-2 border-green-700 rounded-xl hover:bg-accent hover:text-green-700 hover:border-green-700 duration-300'>
                            <GrMail className='mr-2' />
                            Send Email
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordModal;