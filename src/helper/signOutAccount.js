import { getAuth , signOut } from 'firebase/auth';
import { app } from '../firebase.config';
import { resetLocalStorage } from './localStorage';


const signOutAccount = () => {
    const auth = getAuth(app);
    signOut(auth)
        .then( () => {
            resetLocalStorage();
            window.location.reload();
    })  
}

export default signOutAccount;