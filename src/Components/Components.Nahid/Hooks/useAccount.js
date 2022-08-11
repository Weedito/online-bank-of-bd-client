import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch, useSelector } from 'react-redux';
import auth from '../../../firebase.init';
import { getUserAccount } from '../../Components.Tanvir/ReduxStateManagement/Actions/action';
import Loading from '../Loading';

const useAccount = () => {

    const [user, loading] = useAuthState(auth);
    const dispatch = useDispatch();

    //////  load user account
    const {isLoading,myAccount,error} = useSelector(state=>state)
    useEffect(()=>{
    dispatch(getUserAccount(user?.email))
    },[user, dispatch])
    //////

    
    if (loading || isLoading) {
        return <Loading />
    }


    return {myAccount, isLoading, error};
};

export default useAccount;