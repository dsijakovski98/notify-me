import { auth } from "../firebase/config";

const logoutUser = () => {
    auth.signOut();
}

const register = (email, password, name, profilePicSource) => {
    if(!profilePicSource.length) {
        profilePicSource = null;
    }
    auth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
        result.user.updateProfile({
            displayName: name,
            photoURL: profilePicSource
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



export { register, login, logoutUser }