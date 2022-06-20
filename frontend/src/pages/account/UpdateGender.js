import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAccount from '../../hooks/useAccount';


const UpdateGender = () => {
    //get user from firebase hook
    const [user, loading] = useAuthState(auth)
    const email = user?.email
    //get user's account from hook
    const [account] = useAccount(user)
    const { gender, _id, ...rest } = account

    const [isRadioSelected, setIsRadioSelected] = useState(null);
    //is loading
    useEffect(() => {
        setIsRadioSelected(gender)

    }, [gender])
    if (loading) return <p>Loading...</p>
    return (
        <section className='text-start mt-8'>

            <p className='mb-4'>Your gender</p>
            <form className="flex items-center gap-4 mb-6 justify-center">
                <input
                    className="radio radio-secondary"
                    type="radio"
                    name=""
                    id="male"
                    value="male"
                    checked={isRadioSelected === "male"}
                    onChange={() => {
                        setIsRadioSelected("male");
                        (async () => {
                            const { data } = await axios.put(
                                `http://localhost:5000/users/${email}`,
                                { ...rest, gender: 'male' }
                            );
                            console.log(data);
                        })();
                    }}
                />
                <label htmlFor="male">Male</label>
                <input
                    className="radio radio-secondary"
                    type="radio"
                    name=""
                    id="female"
                    value="female"
                    checked={isRadioSelected === "female"}
                    onChange={() => {

                        setIsRadioSelected("female");
                        (async () => {
                            const { data } = await axios.put(
                                `http://localhost:5000/users/${email}`,
                                { ...rest, gender: 'female' }
                            );
                            console.log(data);
                        })();
                    }}
                />
                <label htmlFor="female">female</label>
            </form>
        </section>
    );
};

export default UpdateGender;