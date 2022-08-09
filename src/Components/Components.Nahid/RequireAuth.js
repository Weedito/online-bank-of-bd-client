import { signOut } from 'firebase/auth';
import { toast } from "react-toastify";
import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';


const RequireAuth = ({ children }) => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <Loading />
    }

    if (!user) {
        signOut(auth);
        return <Navigate to='/signin' state={{ from: location }} replace />
    }

    if (!user.emailVerified) {
        return <div className='text-center'>
            <h1 className='text-3xl text-red-600'>Email not verified!!</h1>
            <h2 className='text-xl text-green-600'>Pleser check your email alredy get a mail for Verification</h2>
            <h2 className='text-xl text-red-600'>If you can't get mail then press the button</h2>
            <button className='btn btn-success mt-5'
                onClick={async () => {
                    await sendEmailVerification();
                    toast.success('email sent')
                }}
            >Send email</button>
        </div>
    }

    return children;
};

export default RequireAuth;