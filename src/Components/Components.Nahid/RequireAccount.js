
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';

const RequireAccount = ({ children }) => {
    let location = useLocation();
    const [user, loading] = useAuthState(auth);
    const [account,setAccount]=useState(null);
    const [accountLoading,setAccountLoading]=useState(false);
    useEffect(()=>{
        setAccountLoading(true);
        fetch(`http://localhost:5000/accounts?email=${user?.email}`)
        .then(res=>{
            if(res.status=== 200){
                return res.json()
            }else{
                setAccountLoading(false);
            }
        })
        .then(result=>{
            setAccountLoading(false)
            if(result){
                setAccount(result);
            }
        })
    },[user])
    if (loading || accountLoading) {
      return <Loading />;
    }
    if (!user || !account) {
      return <Navigate to="/openaccount" state={{ from: location }} replace />;
    }
    return children;
  };
  
  export default RequireAccount;