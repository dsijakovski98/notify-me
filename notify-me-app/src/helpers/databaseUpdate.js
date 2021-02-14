import { firestore } from "../firebase/config";
import { TABLE_NAMES } from "../firebase/tables";
import { USERS_TABLE_COLUMNS } from "../firebase/tables";
import { COMPANY_TABLE_COLUMNS } from "../firebase/tables";
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

const updateUser = (user, id) => {
  const usersRef = firestore.collection(TABLE_NAMES.USERS_TABLE);

  return usersRef.doc(id)
  .update({
    [USERS_TABLE_COLUMNS.FIRST_NAME]: user.firstName,
    [USERS_TABLE_COLUMNS.LAST_NAME]: user.lastName,
    [USERS_TABLE_COLUMNS.DATE_OF_BIRTH]: user.dateOfBirth,
    [USERS_TABLE_COLUMNS.GENDER]: user.gender,
    [USERS_TABLE_COLUMNS.PROFILE_URL]: user.profileUrl
  })
  .catch(err => {
    console.log(err);
  });
}

const updateCompany = (company, id) => {
  const companiesRef = firestore.collection(TABLE_NAMES.COMPANIES_TABLE);

  return companiesRef.doc(id)
  .update({
    [COMPANY_TABLE_COLUMNS.CEO_FIRST_NAME]: company.ceoFirst,
    [COMPANY_TABLE_COLUMNS.CEO_LAST_NAME]: company.ceoLast,
    [COMPANY_TABLE_COLUMNS.COMPANY_NAME]: company.companyName,
    [COMPANY_TABLE_COLUMNS.DATE_OF_CREATION]: company.dateOfCreation,
    [COMPANY_TABLE_COLUMNS.PROFILE_URL]: company.profileUrl,
    [COMPANY_TABLE_COLUMNS.BRANCHES]: company.branches,
    [COMPANY_TABLE_COLUMNS.SERVICE_TYPE]: company.serviceType,
    
    [COMPANY_TABLE_COLUMNS.PHONE_NUMBER]: 
    company.phoneNumber.trim() !== "+389" ? company.phoneNumber : "Not Provided",

    [COMPANY_TABLE_COLUMNS.WEBSITE]:
    company.website.trim().length ? company.website : "Not Provided"
  })
  .catch(err => {
    console.log(err);
  })
}

export { updatePost, updateUser, updateCompany };