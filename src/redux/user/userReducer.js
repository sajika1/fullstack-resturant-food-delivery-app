import { getLocalStorage } from "../../helper/localStorage";
const userStorage = getLocalStorage();

const initialState = {
    user : userStorage,
    error: '' , 
    loading: false
}

const userReducer = (state = initialState , action ) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
                error : '',
                loading: true
            }
        case 'SET_USER':
            return {
                ...state , 
                user: action.payload,
                error: '',
                loading:false
            }   
        case 'USER_LOGIN_FUILD':
            return {
                user : null,
                error: action.payload,
                loading: false
            } 
        default:
            return {
                ...state
            }
    }
}

export default userReducer;
