
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';

const RequireAccount = ({ children }) => {
    let location = useLocation();
    const [user, loading] = useAuthState(auth);
    const [account,setAccount]=useState([]);
    const [accountLoading,setAccountLoading]=useState(true);
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
            setAccount(result[0]);
            console.log(result);
            console.log("authEmail",user?.email, "accountEmail", result[0]?.email);
            setAccountLoading(false)
        })
    },[user])
    if (loading || accountLoading) {
      return <Loading />;
    }
    if (!account && !accountLoading) {
        console.log("i Am in ");
      return <Navigate to="/openaccount" state={{ from: location }} replace />;
    }
    return children;
  };
  
  export default RequireAccount;