import { firestore, firebase } from "../firebase/config";
import { TABLE_NAMES } from "../firebase/tables";
import { USERS_TABLE_COLUMNS } from "../firebase/tables";
import { COMPANY_TABLE_COLUMNS } from "../firebase/tables";
import { USER_POSTS_TABLE_COLUMNS, USER_SUBSCRIBE_TABLE_COLUMNS } from "../firebase/tables";
import { POSTS_TABLE_COLUMNS } from "../firebase/tables";


const addUser = async (user) => {
    const usersRef = firestore.collection(TABLE_NAMES.USERS_TABLE);
    const userPostsRef = firestore.collection(TABLE_NAMES.USER_POSTS_TABLE);
    const userSubscribeRef = firestore.collection(TABLE_NAMES.USER_SUBSCRIBE_TABLE);

    // Add user to "users" collection
    await usersRef.doc(user.id)
    .set({
        [USERS_TABLE_COLUMNS.UID]: user.id,
        [USERS_TABLE_COLUMNS.EMAIL]: user.email,
        [USERS_TABLE_COLUMNS.FIRST_NAME]: user.firstName,
        [USERS_TABLE_COLUMNS.LAST_NAME]: user.lastName,
        [USERS_TABLE_COLUMNS.GENDER]: user.gender,
        [USERS_TABLE_COLUMNS.DATE_OF_BIRTH]: user.dateOfBirth,
    });

    // Add user info to "user_posts" collection
    await userPostsRef.doc(user.id)
    .set({
        [USER_POSTS_TABLE_COLUMNS.READ_POSTS]: [],
        [USER_POSTS_TABLE_COLUMNS.STARRED_POSTS]: []
    });

    // Add user info to "user_subscribe" collection
    return userSubscribeRef.doc(user.id)
    .set({
        [USER_SUBSCRIBE_TABLE_COLUMNS.SUBSCRIBTIONS]: []
    });
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
        [COMPANY_TABLE_COLUMNS.BRANCHES]: company.branches,
        [COMPANY_TABLE_COLUMNS.PROFILE_URL]: company.profileUrl,
        [COMPANY_TABLE_COLUMNS.PHONE_NUMBER]: company.phoneNumber,
        [COMPANY_TABLE_COLUMNS.WEBSITE]: company.website
    })
    .catch(err => {
        console.log(err);
    })

}

const subscribeToCompany = (user, company) => {
    const userSubscribtionsRef = firestore.collection(TABLE_NAMES.USER_SUBSCRIBE_TABLE);

    const newSubscribtion = {
        type: company[COMPANY_TABLE_COLUMNS.SERVICE_TYPE],
        id: company[COMPANY_TABLE_COLUMNS.COMPANY_ID]
    };

    return userSubscribtionsRef.doc(user.id).update({
        [USER_SUBSCRIBE_TABLE_COLUMNS.SUBSCRIBTIONS]: 
            firebase.firestore.FieldValue.arrayUnion(newSubscribtion)
    });
}

const addPost = (post) => {
    const postsRef = firestore.collection(TABLE_NAMES.POSTS_TABLE);
    const postTimestamp = new Date();

    return postsRef.doc(post.id)
    .set({
        [POSTS_TABLE_COLUMNS.POST_ID]: post.id,
        [POSTS_TABLE_COLUMNS.CREATOR_ID]: post.creatorId,
        [POSTS_TABLE_COLUMNS.CREATOR_NAME]: post.creatorName,
        [POSTS_TABLE_COLUMNS.CREATOR_PROFILE_URL]: post.creatorProfileUrl,
        [POSTS_TABLE_COLUMNS.POST_TYPE]: post.type,
        [POSTS_TABLE_COLUMNS.POST_TITLE]: post.title,
        [POSTS_TABLE_COLUMNS.POST_CONTENT]: post.content,
        [POSTS_TABLE_COLUMNS.CITIES_POST_APPLIES_TO]: post.citiesPostApplies,
        [POSTS_TABLE_COLUMNS.TIMESTAMP]: postTimestamp
    });
}

const readPost = (userId, postId) => {
    const userPostsRef = firestore.collection(TABLE_NAMES.USER_POSTS_TABLE);
    
    return userPostsRef.doc(userId)
    .update({
        [USER_POSTS_TABLE_COLUMNS.READ_POSTS]: 
            firebase.firestore.FieldValue.arrayUnion(postId)
    });
}

const starPost = (userId, postId) => {
    const userPostsRef = firestore.collection(TABLE_NAMES.USER_POSTS_TABLE);
    
    return userPostsRef.doc(userId)
    .update({
        [USER_POSTS_TABLE_COLUMNS.STARRED_POSTS]: 
            firebase.firestore.FieldValue.arrayUnion(postId)
    });

}

export { addUser, addCompany, subscribeToCompany, addPost, readPost, starPost };