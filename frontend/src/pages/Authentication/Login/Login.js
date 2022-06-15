import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    // integration of react firebase hooks here
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    // integration react hook form here
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // event handler for signing with email and password
    const handleSignInWithEmailAndPassword = async (data) => {
        await signInWithEmailAndPassword(data.email, data.password);
        reset();
    }

    if (user) {
        toast.success('Logged In Successfully!!!');
    }

    if (loading) {
        //loading component will be added later here
    }

    // rendering the login component here
    return (
        <section className='bg-accent min-h-screen flex pt-20'>
            <PageTitle title={'Login'} />
            <div className='w-[70%] bg-secondary hidden md:block'>
                {/* blank for now */}
            </div>
            <div className='w-full md:w-[30%] flex justify-center items-center'>
                <div className='shadow-3xl w-full mx-3 md:mx-10 p-5 rounded-3xl'>
                    <div className='text-left mb-6'>
                        <h3 className='text-left font-semibold text-3xl text-primary'>Login</h3>
                        <p className='text-sm my-1 text-secondary'>Please, Log in to your account.</p>
                    </div>
                    <form onSubmit={handleSubmit(handleSignInWithEmailAndPassword)}>
                        <div className='form-control w-full'>
                            <label className='label'>
                                <span className='label-text text-base text-secondary'>Email</span>
                            </label>
                            <input type='email' placeholder='Enter Your Email' className='input input-bordered border-secondary border-2 w-full font-semibold text-base text-secondary' {...register('email', {
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
                            <input type='password' placeholder='Enter Your Password' className='input input-bordered border-secondary border-2 w-full font-semibold text-base text-secondary' {...register('password', {
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
                        <div className='flex justify-end mb-5'>
                            <button className='capitalize font-normal underline text-primary hover:opacity-60 duration-300 text-sm'>Forgot Password?</button>
                        </div>
                        <button type='submit' className='btn btn-primary w-full text-accent text-base capitalize border-2 rounded-xl hover:bg-accent hover:text-primary duration-300'>Log In</button>
                        <div className='mt-2'>
                            <p className='text-secondary text-sm'>Don't Have an account? <button className='text-primary underline hover:opacity-60 duration-300'>Register Now</button></p>
                        </div>
                        <div className='mt-2'>
                            <p className='text-red-600 text-sm'>{error?.message && 'Invalid ID or Password'}</p>
                        </div>
                    </form>
                    <SocialLogin />
                </div>
            </div>
        </section>
    );
};

export default Login;