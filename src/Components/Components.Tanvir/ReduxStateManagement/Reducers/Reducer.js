import { USER_ACCOUNT_FAILED, USER_ACCOUNT_REQUEST, USER_ACCOUNT_SUCCESS } from "../Constant/Constant";


 const initailsUserAccount = {
    isLoading: false,
    account: [],
    error: null
}
const BalanceReducer = (state=initailsUserAccount,action)=>{
    switch (action.type) {
        case USER_ACCOUNT_REQUEST:
            return{
                ...state,
                isLoading:true,
                
            }
        case USER_ACCOUNT_SUCCESS:
            return{
                isLoading:false,
                account:action.payload,
                error:null
            }
        case USER_ACCOUNT_FAILED:
            return{
                isLoading:false,
                account:[],
                error:action.payload
            }
    
        default:
            return state;
    }

}
export default BalanceReducer;