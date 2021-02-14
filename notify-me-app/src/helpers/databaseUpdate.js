import { firestore } from "../firebase/config";
import { TABLE_NAMES } from "../firebase/tables";
// import { USERS_TABLE_COLUMNS } from "../firebase/tables";
// import { COMPANY_TABLE_COLUMNS } from "../firebase/tables";
// import { USER_POSTS_TABLE_COLUMNS, USER_SUBSCRIBE_TABLE_COLUMNS } from "../firebase/tables";
import { POSTS_TABLE_COLUMNS } from "../firebase/tables";

const updatePost = (post) => {
    const postsRef = firestore.collection(TABLE_NAMES.POSTS_TABLE);

    return postsRef.doc(post.id)
    .update({
      [POSTS_TABLE_COLUMNS.POST_TYPE]: post.type,
      [POSTS_TABLE_COLUMNS.CITIES_POST_APPLIES_TO]: post.citiesAffected,
      [POSTS_TABLE_COLUMNS.POST_TITLE]: post.title,
      [POSTS_TABLE_COLUMNS.POST_CONTENT]: post.content
    })
    .catch(err => {
        console.log(err);
    });
}

export { updatePost };