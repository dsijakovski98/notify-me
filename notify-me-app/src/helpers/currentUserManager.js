import { auth } from "../firebase/config";

const logoutUser = () => {
    auth.signOut();
}

const login = async (email, password) => {
    let loginData = null;
    const promise = auth.signInWithEmailAndPassword(email, password);

    loginData = await promise.then((result) => {
        return {...result, error: false};
    })
    .catch(err => {
        return {...err, error: true};
    })

    return loginData;
}

const register = async (email, password) => {
    let user = null;
    const promise = auth.createUserWithEmailAndPassword(email, password);

    user = await promise.then((result) => {
        return result.user;
    })

    return user;
}



export { login, logoutUser, register }