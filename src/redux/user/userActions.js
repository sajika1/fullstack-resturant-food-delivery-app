import { getAuth , getRedirectResult } from 'firebase/auth';
import { app } from '../../firebase.config';
import { resetLocalStorage, setLocalStorage } from '../../helper/localStorage';

const loginRequest = () => {
    return {
        type: 'LOGIN_REQUEST'
    }
}

const setUser = user => {
    return {
        type: 'SET_USER' , 
        payload: user
    }
}

const loginFailed = error => {
    return {
        type: 'USER_LOGIN_FUILD',
        payload: error.message
    }
}

export const fetchUser = () => {
    return (dispatch) => {
        dispatch(loginRequest());
        const auth = getAuth(app);
        getRedirectResult(auth)
            .then( res => {
                dispatch(setUser(res.user));
                setLocalStorage(res.user);
            })
            .catch( error => {
                dispatch(loginFailed(error))
                resetLocalStorage();
            })
    }
}