import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { BsGoogle } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { toast } from 'react-toastify';

const SocialLogin = () => {
    // integration of react firebase hooks here
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    // event handler for signing in with google
    const handleSignInWithGoogle = async () => {

        await signInWithGoogle();
    }

    if (user) {
        toast.success('Logged In Successfully!!!');
    }

    if (loading) {
        //loading component will be added later here
    }

    // rendering social login component here
    return (
        <div className='mt-10'>
            <h4 className='text-2xl font-semibold text-secondary'>Social Login</h4>
            <div className='mt-5'>
                <button onClick={handleSignInWithGoogle} className='btn btn-primary bg-accent w-full text-primary text-base capitalize border-2 rounded-xl hover:bg-primary hover:text-accent duration-300'>
                    <BsGoogle className='mr-2' />
                    Login With Google
                </button>
                <button className='mt-3 btn btn-primary bg-accent w-full text-primary text-base capitalize border-2 rounded-xl hover:bg-primary hover:text-accent duration-300'>
                    <FaFacebookF className='mr-2' />
                    Login With Facebook
                </button>
            </div>
            <div className='mt-2'>
                <p className='text-red-600 text-sm'>{error?.message && "Failed to Login with Google."}</p>
            </div>
        </div>
    );
};

export default SocialLogin;