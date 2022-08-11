import { useEffect, useState } from 'react';

const UseToken = (user) => {
    const [token, setToken] = useState('');
    useEffect( () => {
        const email = user?.user?.email;
        const currentUser = {email: email};
        if(email){
            fetch(`https://bank-of-bd.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                const accessToken = data.accessToken;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }

    }, [user]);
    return [token];
};

export default UseToken;