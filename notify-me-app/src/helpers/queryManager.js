import { firestore } from "../firebase/config";
import { TABLE_NAMES, USERS_TABLE_COLUMNS, COMPANY_TABLE_COLUMNS } from "../firebase/tables";

const IsUserLogin = async (email) => {
    let isUser = false;

    const query = firestore.collection(TABLE_NAMES.USERS_TABLE)
    .where(USERS_TABLE_COLUMNS.EMAIL, "==", email).limit(1)
    .get();

    isUser = await query.then((snapshot) => {
        return (snapshot.docs.length > 0);
    })

    return isUser;
}

const checkUniqueUserEmail = async (email) => {
    let uniqueUserEmail = false;

    const query = firestore.collection(TABLE_NAMES.USERS_TABLE)
    .where(USERS_TABLE_COLUMNS.EMAIL, "==", email)
    .get();

    uniqueUserEmail = await query.then((snapshot) => {
        return (snapshot.docs.length === 0);
    })

    return uniqueUserEmail;
}

const checkUniqueCompanyEmail = async (email) => {
    let uniqueCompanyEmail = false;

    const query = firestore.collection(TABLE_NAMES.COMPANIES_TABLE)
    .where(COMPANY_TABLE_COLUMNS.EMAIL, "==", email)
    .get();

    uniqueCompanyEmail = await query.then((snapshot) => {
        return (snapshot.docs.length === 0);
    })

    return uniqueCompanyEmail;
}





export { IsUserLogin, checkUniqueUserEmail, checkUniqueCompanyEmail };