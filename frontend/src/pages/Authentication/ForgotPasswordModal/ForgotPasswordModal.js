import React from 'react';
import { GrMail } from 'react-icons/gr';
import { ImCancelCircle } from 'react-icons/im';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const ForgotPasswordModal = ({ setShowPasswordResetModal }) => {
    // integration of react firebase hooks
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    // event handler for password reset mail
    const handlePasswordRest = async (event) => {
        try {

            setShowPasswordResetModal(false);
            const email = event.target.resetEmail.value;
            await sendPasswordResetEmail(email);

            toast.success('Password Reset Email Sent!!!');
        } catch (err) {

        }
    }

    if (sending) {
        // loading component will added later
    }

    if (error) {
        // error message checked here
    }


    // rendering forgot password modal component here
    return (
        <div>
            <input type='checkbox' id='forgot-password-modal' className='modal-toggle' />
            <div className='modal modal-bottom sm:modal-middle'>
                <div className='modal-box relative'>
                    <label htmlFor='forgot-password-modal' className='btn btn-sm btn-circle absolute right-2 top-2'>✕</label>
                    <h3 className='font-bold text-lg'>Reset Password Verification Email</h3>
                    <p className='pb-4 text-sm'>Please, enter your email. We will send a password reset link into your email.</p>
                    <form onSubmit={handlePasswordRest}>
                        <input name='resetEmail' type='email' placeholder='Enter Your Email' className='input input-bordered border-secondary border-2 w-full font-semibold text-base text-secondary' required autoComplete={false} />
                        <div className='modal-action'>
                            <label htmlFor='forgot-password-modal' className='btn bg-red-700 text-accent text-base font-light capitalize border-2 border-red-700 rounded-xl hover:bg-accent hover:text-red-700 hover:border-red-700 duration-300'>
                                <ImCancelCircle className='mr-2' />
                                Cancel
                            </label>
                            <button type='submit' className='btn bg-green-700 text-accent text-base font-light capitalize border-2 border-green-700 rounded-xl hover:bg-accent hover:text-green-700 hover:border-green-700 duration-300'>
                                <GrMail className='mr-2' />
                                Send Email
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordModal;