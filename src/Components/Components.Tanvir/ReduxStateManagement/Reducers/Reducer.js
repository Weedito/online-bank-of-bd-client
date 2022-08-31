import { USER_ACCOUNT_FAILED, USER_ACCOUNT_REQUEST, USER_ACCOUNT_SUCCESS } from "../Constant/Constant";


 const initailsUserAccount = {
    isLoading: false,
    myAccount:[],
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
                myAccount:action.payload,
                error:null
            }
        case USER_ACCOUNT_FAILED:
            return{
                isLoading:false,
                error:action.payload,
                myAccount:[],
            }
    
        default:
            return state;
    }

}
export default BalanceReducer;