import { useState, useEffect } from "react";
import { firestore } from "../firebase/config";
import { TABLE_NAMES, USERS_TABLE_COLUMNS } from "../firebase/tables";

const useUserData = (user) => {
    const [userData, setUserData] = useState(null);
    
    useEffect(() => {
        const usersRef = firestore.collection(TABLE_NAMES.USERS_TABLE);
        
        if(!user) {
            return;
        }

        let unsubscribe = null;

        unsubscribe = usersRef.doc(user[USERS_TABLE_COLUMNS.UID])
        .onSnapshot((snapshot) => {
            const data = snapshot.data();
            const userId = data[USERS_TABLE_COLUMNS.UID];
            const subscribtions = data[USERS_TABLE_COLUMNS.SUBSCRIBTIONS];
            
            const currentUserData = {
                id: userId,
                subscribtions
            };

            setUserData(currentUserData);
        });

        // if(unsubscribe != null) {
            return () => unsubscribe();
        // }

    }, [user]);

    return userData;
}

export { useUserData };