import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const UpdateGender = () => {
    //get user from firebase hook
    const [user, loading] = useAuthState(auth)
    const email = user?.email
    //you should skip code repeat. so we can you use custom hook but when I'm gonna use custom hook it throw me a error. I think I will fix this error later
    const { isLoading, error, data: account } = useQuery('accountData', () =>
        fetch(`http://localhost:5000/users/${user?.email}`).then(res =>
            res.json()
        )
    )

    //------------------------------------


    const [isRadioSelected, setIsRadioSelected] = useState(null);
    useEffect(() => {

        setIsRadioSelected(account?.gender)

    }, [account?.gender])
    //is loading
    if (loading || isLoading) return <p>Loading...</p>
    if (error) {
        console.log(error);
    }
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
                            const { gender, _id, ...rest } = account
                            const { data } = await axios.put(
                                `http://localhost:5000/users/${email}`,
                                { ...rest, gender: 'male' }
                            );
                            console.log(data);
                            toast.success('Gender successfully updated!!!')
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
                            const { gender, _id, ...rest } = account
                            const { data } = await axios.put(
                                `http://localhost:5000/users/${email}`,
                                { ...rest, gender: 'female' }
                            );
                            console.log(data);
                            toast.success('Gender successfully updated!!!')
                        })();
                    }}
                />
                <label htmlFor="female">female</label>
            </form>
        </section>
    );
};

export default UpdateGender;