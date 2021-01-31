import { firestore, firebase } from "../firebase/config";
import { TABLE_NAMES } from "../firebase/tables";
import { USERS_TABLE_COLUMNS } from "../firebase/tables";
import { COMPANY_TABLE_COLUMNS } from "../firebase/tables";


const addUser = (user) => {
    const usersRef = firestore.collection(TABLE_NAMES.USERS_TABLE);

    return usersRef.doc(user.id)
    .set({
        [USERS_TABLE_COLUMNS.UID]: user.id,
        [USERS_TABLE_COLUMNS.EMAIL]: user.email,
        [USERS_TABLE_COLUMNS.FIRST_NAME]: user.firstName,
        [USERS_TABLE_COLUMNS.LAST_NAME]: user.lastName,
        [USERS_TABLE_COLUMNS.GENDER]: user.gender,
        [USERS_TABLE_COLUMNS.DATE_OF_BIRTH]: user.dateOfBirth,
        [USERS_TABLE_COLUMNS.SUBSCRIBTIONS]: []
    })
    .catch(err => {
        console.log(err);
    })

}

const addCompany = (company) => {
    const companiesRef = firestore.collection(TABLE_NAMES.COMPANIES_TABLE);

    return companiesRef.doc(company.id)
    .set({
        [COMPANY_TABLE_COLUMNS.COMPANY_ID]: company.id,
        [COMPANY_TABLE_COLUMNS.EMAIL]: company.email,
        [COMPANY_TABLE_COLUMNS.COMPANY_NAME]: company.companyName,
        [COMPANY_TABLE_COLUMNS.DATE_OF_CREATION]: company.dateOfCreation,
        [COMPANY_TABLE_COLUMNS.CEO_FIRST_NAME]: company.ceoFirstName,
        [COMPANY_TABLE_COLUMNS.CEO_LAST_NAME]: company.ceoLastName,
        [COMPANY_TABLE_COLUMNS.HEADQUARTERS_CITY]: company.cityHeadquarters,
        [COMPANY_TABLE_COLUMNS.SERVICE_TYPE]: company.serviceType,
        [COMPANY_TABLE_COLUMNS.BRANCHES]: company.branches
    })
    .catch(err => {
        console.log(err);
    })

}

const subscribeToCompany = (user, company) => {
    const usersRef = firestore.collection(TABLE_NAMES.USERS_TABLE);

    const newSubscribtion = {
        type: company[COMPANY_TABLE_COLUMNS.SERVICE_TYPE],
        id: company[COMPANY_TABLE_COLUMNS.COMPANY_ID]
    };

    return usersRef.doc(user.id).update({
        [USERS_TABLE_COLUMNS.SUBSCRIBTIONS]: 
            firebase.firestore.FieldValue.arrayUnion(newSubscribtion)
    });
}

export { addUser, addCompany, subscribeToCompany };