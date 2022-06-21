/* import axios from "axios";
import { useEffect, useState } from "react";

const useAccount = (user) => {
    //state for account
    const [account, setAccount] = useState({})
    useEffect(() => {
        const email = user?.email
        if (email) {
            (async () => {
                const { data } = await axios.get(
                    `http://localhost:5000/users/${email}`
                );
                setAccount(data);
            })();
        }
    }, [user]);
    console.log(account && account);
    return { email: account?.email }
};
1.my profile
2. order
whishlist
walet
logout
export default useAccount; */




import { useQuery } from "react-query";

const useAccount = (user) => {
    const email = user?.email
    const { isLoading, error, data: account } = useQuery('accountData', () =>
        fetch(`http://localhost:5000/users/${email}`).then(res =>
            res.json()
        )
    )
    if (isLoading) return <p>Loading</p>
    if (error) {
        console.log(error);
    }

    if (account) {
        // console.log(account);
        return { account }
    }


};

export default useAccount;

