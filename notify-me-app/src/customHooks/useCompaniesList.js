import { useState, useEffect } from "react";
import { firestore } from "../firebase/config";
import { TABLE_NAMES, COMPANY_TABLE_COLUMNS } from "../firebase/tables";

const useCompaniesList = (companyName, companyType) => {
    const [companiesList, setCompaniesList] = useState([]);
    const companiesRef = firestore.collection(TABLE_NAMES.COMPANIES_TABLE);

    useEffect(() => {

        let unsubscribe = null;
        // Find specific company, or company with matching 
        if(companyName.length) {
            // databaseReference.orderByChild('_searchLastName')
            //      .startAt(queryText)
            //      .endAt(queryText+"\uf8ff")

            // .startAt("[a-zA-Z0-9]*")
            // .endAt(searchString)
            
            companiesRef.orderBy(COMPANY_TABLE_COLUMNS.COMPANY_NAME)
            .startAt(companyName).endAt(companyName + "\uf8ff")
            .where(COMPANY_TABLE_COLUMNS.SERVICE_TYPE, "==", companyType)
            .get()
            .then((snapshot) => {
                const list = [];
                snapshot.docs.map((doc) => {
                    return list.push(doc.data());
                });
                setCompaniesList(list);
            })
        }
        // Find all companies of type [companyType]
        else {
            unsubscribe = companiesRef.where(COMPANY_TABLE_COLUMNS.SERVICE_TYPE, "==", companyType)
            .onSnapshot((snapshot) => {
                const list = [];
                snapshot.docs.map((doc) => {
                    return list.push(doc.data());
                });
                setCompaniesList(list);
            })
            // TODO: Add error handling CATCH BLOCK
        }

        if(unsubscribe)
            return () => unsubscribe();

    }, [companyName, companyType]);

    return companiesList;
}

export { useCompaniesList };