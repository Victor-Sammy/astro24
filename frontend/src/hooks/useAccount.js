import axios from "axios";
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
    // console.log(account);
    return [account]
};

export default useAccount;