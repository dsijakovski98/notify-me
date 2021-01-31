import { firestore, firebase } from "../firebase/config";
import { TABLE_NAMES } from "../firebase/tables";
import { USERS_TABLE_COLUMNS } from "../firebase/tables";
import { COMPANY_TABLE_COLUMNS } from "../firebase/tables";

const unsubscribeCompany = (user, company) => {
    const usersRef = firestore.collection(TABLE_NAMES.USERS_TABLE);

    const targetSubscribtion = {
        type: company[COMPANY_TABLE_COLUMNS.SERVICE_TYPE],
        id: company[COMPANY_TABLE_COLUMNS.COMPANY_ID]
    };

    return usersRef.doc(user.id).update({
        [USERS_TABLE_COLUMNS.SUBSCRIBTIONS]: 
            firebase.firestore.FieldValue.arrayRemove(targetSubscribtion)
    });

}

export { unsubscribeCompany };