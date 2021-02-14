import { firestore, firebase, storage } from "../firebase/config";
import { TABLE_NAMES, USER_SUBSCRIBE_TABLE_COLUMNS } from "../firebase/tables";
import { COMPANY_TABLE_COLUMNS, USER_POSTS_TABLE_COLUMNS } from "../firebase/tables";

const deletePost = (postId) => {
    const postsRef = firestore.collection(TABLE_NAMES.POSTS_TABLE);

    postsRef.doc(postId).delete();
}

const unsubscribeFromCompany = (user, company) => {
    const userSubscribtionsRef = firestore.collection(TABLE_NAMES.USER_SUBSCRIBE_TABLE);

    const targetSubscribtion = {
        type: company[COMPANY_TABLE_COLUMNS.SERVICE_TYPE],
        id: company[COMPANY_TABLE_COLUMNS.COMPANY_ID]
    };

    return userSubscribtionsRef.doc(user.id).update({
        [USER_SUBSCRIBE_TABLE_COLUMNS.SUBSCRIBTIONS]: 
            firebase.firestore.FieldValue.arrayRemove(targetSubscribtion)
    });

}

const unreadPost = (userId, postId) => {
    const userPostsRef = firestore.collection(TABLE_NAMES.USER_POSTS_TABLE);
    
    return userPostsRef.doc(userId)
    .update({
        [USER_POSTS_TABLE_COLUMNS.READ_POSTS]: 
            firebase.firestore.FieldValue.arrayRemove(postId)
    });
};

const unstarPost = (userId, postId) => {
    const userPostsRef = firestore.collection(TABLE_NAMES.USER_POSTS_TABLE);
    
    return userPostsRef.doc(userId)
    .update({
        [USER_POSTS_TABLE_COLUMNS.STARRED_POSTS]: 
            firebase.firestore.FieldValue.arrayRemove(postId)
    });
}

const deletePicture = (url) => {
    // const picRef = storage.refFromURL(url);
}

export { deletePost, unsubscribeFromCompany, unreadPost, unstarPost, deletePicture };