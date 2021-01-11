import { auth } from "../firebase/config";

const logoutUser = () => {
    auth.signOut();
}

const login = (email, password) => {
    auth.signInWithEmailAndPassword(email, password)
    .then(() => {

    })
    .catch((err) => {
        console.log(err);
    })
}



export { login, logoutUser }