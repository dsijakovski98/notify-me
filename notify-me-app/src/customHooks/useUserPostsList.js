import { useState, useEffect } from "react";
import { firestore } from "../firebase/config";
import { POSTS_TABLE_COLUMNS, TABLE_NAMES } from "../firebase/tables";

const useUserPostsList = (subscribtions, userSubscribtionsData) => {
    const [postsList, setPostsList] = useState(null);

    useEffect(() => {
        const postsRef = firestore.collection(TABLE_NAMES.POSTS_TABLE);
        
        if(!subscribtions) return;

        let unsubscribe = null;

        unsubscribe = 
        postsRef.orderBy(POSTS_TABLE_COLUMNS.TIMESTAMP, 'desc')
        .where(POSTS_TABLE_COLUMNS.CREATOR_ID, 'in', subscribtions)
        .onSnapshot(snapshot => {
            const list = [];

            const docs = snapshot.docs;
            
            docs.map(doc => {
                return list.push(doc.data())
            })

            setPostsList(list);
        })

        if(unsubscribe) return () => unsubscribe();

    }, [userSubscribtionsData]);

    return postsList;
}

export { useUserPostsList };