import { auth } from "../firebase/config";

const register = (email, password, name) => {
    auth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
        result.user.updateProfile({
            displayName: name
        })
    })
    .catch((err) => {
        console.log(err);
    })
}

const login = (email, password) => {
    auth.signInWithEmailAndPassword(email, password)
    .then(() => {

    })
    .catch((err) => {
        console.log(err);
    })
}

const logout = () => {
    auth.signOut();
}

export { register, login, logout }