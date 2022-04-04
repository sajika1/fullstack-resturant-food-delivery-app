import { getAuth,  GoogleAuthProvider , signInWithRedirect  } from 'firebase/auth';
import { app } from "../firebase.config";
import { resetLocalStorage } from './localStorage';

const login = async() => {

    resetLocalStorage();
    const provider = new GoogleAuthProvider();
    const firebaseAuth = getAuth(app);

    await signInWithRedirect(firebaseAuth , provider);
    
}

export default login;