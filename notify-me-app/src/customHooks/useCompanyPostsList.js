import { useState, useEffect } from "react";
import { firestore } from "../firebase/config";
import { POSTS_TABLE_COLUMNS, TABLE_NAMES } from "../firebase/tables";

const useCompanyPostsList = (company) => {
    const [companyPosts, setCompanyPosts] = useState([]);

    useEffect(() => {
        const postsRef = firestore.collection(TABLE_NAMES.POSTS_TABLE);

        if(!company) return;

        let unsubscribe = null;

        unsubscribe = postsRef.where(POSTS_TABLE_COLUMNS.CREATOR_ID, '==', company.uid)
        .onSnapshot(snapshot => {
            const list = [];
            
            snapshot.docs.map(doc => {
                const data = doc.data();
                return list.push(data);
            });

            setCompanyPosts(list);
        })

        if(unsubscribe) return () => unsubscribe();

    }, [company]);

    return companyPosts;
}

export { useCompanyPostsList };