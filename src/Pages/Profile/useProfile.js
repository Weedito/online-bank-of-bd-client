import { useEffect, useState } from 'react';

const useProfile = (email) => {
    // const {user} = useFirebase();
    const [profile, setProfile] = useState([]);

    // const email = user?.email;

    useEffect(() => {
        fetch(`https://bank-of-bd.herokuapp.com/profile/${email}`)
        .then(res => res.json())
        .then(data => setProfile(data))
    }, [email]);

    return [profile];
};

export default useProfile;