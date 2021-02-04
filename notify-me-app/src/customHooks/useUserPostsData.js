import { useState, useEffect } from "react";
import { firestore } from "../firebase/config";
import { TABLE_NAMES, USERS_TABLE_COLUMNS, USER_POSTS_TABLE_COLUMNS } from "../firebase/tables";


const useUserPostData = (user) => {
    const [userPostsData, setUserPostsData] = useState(null);

    useEffect(() => {
        const userPostsRef = firestore.collection(TABLE_NAMES.USER_POSTS_TABLE);

        if(!user) return;

        let unsubscribe = null;

        unsubscribe = userPostsRef.doc(user[USERS_TABLE_COLUMNS.UID])
        .onSnapshot(snapshot => {
            const data = snapshot.data();
            
            // Read posts arary
            const readPosts = data[USER_POSTS_TABLE_COLUMNS.READ_POSTS];
            // Starred posts array
            const starredPosts = data[USER_POSTS_TABLE_COLUMNS.STARRED_POSTS];

            const currentUserPostsData = {
                id: snapshot.id,
                readPosts,
                starredPosts,
            };

            setUserPostsData(currentUserPostsData);
        })

        if(unsubscribe) return () => unsubscribe();

    }, [user]);

    return userPostsData;
}

export { useUserPostData };