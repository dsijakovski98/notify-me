import { useState, useEffect } from "react";
import { firestore } from "../firebase/config";
import { TABLE_NAMES } from "../firebase/tables";

const useUserData = (user) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const usersRef = firestore.collection(TABLE_NAMES.USERS_TABLE);

        if(!user) return;

        let unsubscribe = null;

        unsubscribe = usersRef.doc(user.uid)
        .onSnapshot(snapshot => {
            const data = snapshot.data();

            setUserData(data);
        });

        if(unsubscribe) return () => unsubscribe();

    }, [user]);

    return userData;
}

export { useUserData };