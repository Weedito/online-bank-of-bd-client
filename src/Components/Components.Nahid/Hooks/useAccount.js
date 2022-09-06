import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllAccounts } from '../../../Feature/allAccountsSlice';
import auth from '../../../firebase.init';
import Loading from '../Loading';

const useAccount = () => {

    const [user, loading] = useAuthState(auth);
    const [refreshAccount, setRefreshAccount] = useState(false)
    const dispatch = useDispatch();

    // redux toolkit

    const { allAccounts, isLoading, error} = useSelector(state => state?.accounts);
    const myAccount = allAccounts?.filter(accouts => accouts?.email === user?.email);    
    useEffect(() => {
        dispatch(fetchAllAccounts())
    }, [user, dispatch, refreshAccount])

    // redux toolkit


    //////  load user account
    /* const { isLoading, myAccount, error } = useSelector(state => state);
    useEffect(() => {
        dispatch(getUserAccount(user?.email))
    }, [user, dispatch, refreshAccount])
    ////// */

    if (loading || isLoading) {
        return <Loading />
    }

    return { myAccount, isLoading, error, setRefreshAccount, refreshAccount };


};

export default useAccount;