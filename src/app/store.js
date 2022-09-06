import {configureStore } from '@reduxjs/toolkit';
import allAccountsSlice from '../Feature/allAccountsSlice';
import requestLoanSlice from '../Feature/requestLoanSlice';


const store = configureStore({
    reducer: {
        accounts: allAccountsSlice,                
        reqLoans: requestLoanSlice,
    }
});

export default store;