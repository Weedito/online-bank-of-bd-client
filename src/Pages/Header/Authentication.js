import React from 'react';
import { toast } from 'react-toastify';

import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useToken from '../../Components/Components.Nahid/Hooks/useToken';
import { signOut } from 'firebase/auth';

const Authentication = () => {
    const [user] = useAuthState(auth);
    const [token] = useToken();
    const navigate = useNavigate();


    const handleSignOut = async () => {
        await signOut(auth)
            .then(() => {
                localStorage.removeItem('accessToken');
                if (!token) {
                    navigate('/signin');
                    toast.success("User SignOut Successfully", { position: "top-left" });
                }
            })
    }
    return (
        <div>
            <button className="text-sm lg:text-lg font-bold text-white bg-green-700 hover:bg-rose-600 focus:bg-gray-800 px-5 py-2 rounded-full cursor-pointer">
                {
                    user ? <button onClick={handleSignOut} >SignOut</button> : <NavLink to="/signin">SignIn Your Account</NavLink>
                }
                
            </button>
        </div>
    );
};

export default Authentication;