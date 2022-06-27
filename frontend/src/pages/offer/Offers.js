import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Offers = () => {
    const [offers, setOffers] = useState([])
    useEffect(() => {
        (async () => {
            const { data } = await axios.get("http://localhost:5000/offers")
            console.log(data);
            setOffers(data)
        })()
    }, [])
    return (
        <div className='pt-28 pb-6 w-[90%] lg:w-[80%] mx-auto flex flex-col gap-6'>
            <p className='text-left text-3xl text-primary'>TODAY'S OFFERS</p>
            {
                offers.map(offer => <img src={offer?.img} alt="" />)
            }
        </div>
    );
};

export default Offers;