import { useState, useEffect } from "react";
import { firestore } from "../firebase/config";
import { TABLE_NAMES, USERS_TABLE_COLUMNS, USER_SUBSCRIBE_TABLE_COLUMNS } from "../firebase/tables";

const useUserSubscribtionsData = (user) => {
    const [userSubscribtionData, setUserSubscribtionData] = useState(null);
    
    useEffect(() => {
        const userSubscribtionsRef = firestore.collection(TABLE_NAMES.USER_SUBSCRIBE_TABLE);
        
        if(!user) return;

        let unsubscribe = null;

        unsubscribe = userSubscribtionsRef.doc(user[USERS_TABLE_COLUMNS.UID])
        .onSnapshot(snapshot => {
            const data = snapshot.data();

            // User id
            const userId = user[USERS_TABLE_COLUMNS.UID];
            // Subscribtions array
            const subscribtions = data[USER_SUBSCRIBE_TABLE_COLUMNS.SUBSCRIBTIONS];
            
            const currentUserSubscribtionsData = {
                id: userId,
                subscribtions
            };

            setUserSubscribtionData(currentUserSubscribtionsData);
        });

        if(unsubscribe) return () => unsubscribe();

    }, [user]);

    return userSubscribtionData;
}

export { useUserSubscribtionsData };