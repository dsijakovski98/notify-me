import { useState, useEffect } from "react";
import { firestore } from "../firebase/config";
import { TABLE_NAMES } from "../firebase/tables";

const useCompanyData = (company) => {
    const[companyData, setCompanyData] = useState(null);

    useEffect(() => {
        const companiesRef = firestore.collection(TABLE_NAMES.COMPANIES_TABLE);

        if(!company) return;

        let unsubscribe = null;

        unsubscribe = companiesRef.doc(company.uid)
        .onSnapshot(snapshot => {
            const data = snapshot.data();
            
            setCompanyData(data);
        })

        if(unsubscribe) return () => unsubscribe();

    }, [company]);

    return companyData;
}

export { useCompanyData };