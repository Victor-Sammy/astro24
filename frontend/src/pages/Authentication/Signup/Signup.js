import { signOut } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import SocialLogin from '../SocialLogin/SocialLogin';

const Signup = () => {
    // integration of react firebase hooks here
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // integration react hook form here
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // integration of react hooks here
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    // event handler for signing up
    const handleSignUp = async (data) => {

        if (data.password === data.confirmPassword) {
            try {

                await createUserWithEmailAndPassword(data.email, data.password);
                await updateProfile({ displayName: data.userName });

                // create REST API for user credentials here...

                toast.success('Sign Up Successful!!! Now Log In To Your Account.');
                signOut(auth);
                navigate('/login');
            } catch (e) {

            }
        } else {
            setErrorMsg('Password Mismatched. Please, Try Again.');
        }

        reset();
    }

    if (user) {

    }

    if (loading || updating) {
        //loading component will be added later here
    }

    // rendering the signup component here
    return (
        <section className='bg-accent min-h-screen flex pt-20'>
            <PageTitle title={'Signup'} />
            <div className='w-[70%] bg-secondary hidden 2xl:block'>
                {/* blank for now */}
            </div>
            <div className='w-full 2xl:w-[30%] flex justify-center items-center'>
                <div className='shadow-3xl w-full mx-3 md:mx-10 p-5 rounded-3xl my-10'>
                    <div className='text-left mb-6'>
                        <h3 className='text-left font-semibold text-3xl text-primary'>Signup</h3>
                        <p className='text-sm my-1 text-secondary'>Please, Create a new account.</p>
                    </div>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div className='form-control w-full'>
                            <label className='label'>
                                <span className='label-text text-base text-secondary'>User Name</span>
                            </label>
                            <input onClick={() => setErrorMsg('')} type='text' placeholder='Enter Your User Name' className='input input-bordered border-secondary border-2 w-full font-semibold text-base text-secondary' {...register('userName', {
                                required: {
                                    value: true,
                                    message: 'Email Required'
                                }
                            })} />
                            <label className='label'>
                                {errors.email?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className='form-control w-full'>
                            <label className='label'>
                                <span className='label-text text-base text-secondary'>Email</span>
                            </label>
                            <input onClick={() => setErrorMsg('')} type='email' placeholder='Enter Your Email' className='input input-bordered border-secondary border-2 w-full font-semibold text-base text-secondary' {...register('email', {
                                required: {
                                    value: true,
                                    message: 'Email Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Invalid Email Address'
                                }
                            })} />
                            <label className='label'>
                                {errors.email?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-600'>{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className='form-control w-full'>
                            <label className='label'>
                                <span className='label-text text-base text-secondary'>Password</span>
                            </label>
                            <input onClick={() => setErrorMsg('')} type='password' placeholder='Enter Your Password' className='input input-bordered border-secondary border-2 w-full font-semibold text-base text-secondary' {...register('password', {
                                required: {
                                    value: true,
                                    message: 'Password Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Password must be 6 characters or longer'
                                }
                            })} />
                            <label className='label'>
                                {errors.password?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-600'>{errors.password.message}</span>}
                            </label>
                        </div>
                        <div className='form-control w-full'>
                            <label className='label'>
                                <span className='label-text text-base text-secondary'>Confirm Password</span>
                            </label>
                            <input onClick={() => setErrorMsg('')} type='password' placeholder='Confirm Your Password' className='input input-bordered border-secondary border-2 w-full font-semibold text-base text-secondary' {...register('confirmPassword', {
                                required: {
                                    value: true,
                                    message: 'Password Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Password must be 6 characters or longer'
                                }
                            })} />
                            <label className='label'>
                                {errors.password?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-600'>{errors.password.message}</span>}
                            </label>
                        </div>
                        <button type='submit' className='mt-5 btn btn-primary w-full text-accent text-base capitalize border-2 rounded-xl hover:bg-accent hover:text-primary duration-300'>Sign Up</button>
                        <div className='mt-2'>
                            <p className='text-secondary text-sm'>Already have an account? <Link to='/login' className='text-primary underline hover:opacity-60 duration-300'>Login Now</Link></p>
                        </div>
                        <div className='mt-2'>
                            <p className='text-red-600 text-sm'>{(error?.message || updateError?.message) && 'Failed to Create New Account'}</p>
                            <p className='text-red-600 text-sm'>{errorMsg}</p>
                        </div>
                    </form>
                    <SocialLogin />
                </div>
            </div>
        </section>
    );
};

export default Signup;