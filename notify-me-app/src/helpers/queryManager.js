import { firestore } from "../firebase/config";
import { TABLE_NAMES, USERS_TABLE_COLUMNS } from "../firebase/tables";

const IsUserLogin = async (email) => {
    let isUser = false;
    const promise = firestore.collection(TABLE_NAMES.USERS_TABLE)
    .where(USERS_TABLE_COLUMNS.EMAIL, "==", email).limit(1)
    .get();

    isUser = await promise.then((snapshot) => {
        return (snapshot.docs.length > 0);
    })

    return isUser;
}






export { IsUserLogin };