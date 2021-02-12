const TABLE_NAMES = {
    USERS_TABLE: "users",
    COMPANIES_TABLE: "companies",
    USER_POSTS_TABLE: "user_posts",
    USER_SUBSCRIBE_TABLE: "user_subscribe",
    POSTS_TABLE: "posts"
};

const USERS_TABLE_COLUMNS = {
    UID: "uid",
    EMAIL: "email",
    FIRST_NAME: "first_name",
    LAST_NAME: "last_name",
    DATE_OF_BIRTH: "date_of_birth",
    GENDER: "gender",
};

const COMPANY_TABLE_COLUMNS = {
    COMPANY_ID: "company_id",
    COMPANY_NAME: "name",
    EMAIL: "email",
    DATE_OF_CREATION: "date_of_creation",
    CEO_FIRST_NAME: "ceo_first",
    CEO_LAST_NAME: "ceo_last",
    HEADQUARTERS_CITY: "city_head",
    SERVICE_TYPE: "service",
    BRANCHES: "branches",
    PROFILE_URL: "profile_url",
    PHONE_NUMBER: "phone_number",
    WEBSITE: "website"
};

const USER_POSTS_TABLE_COLUMNS = {
    READ_POSTS: "read_posts",
    STARRED_POSTS: "starred_posts"
};

const USER_SUBSCRIBE_TABLE_COLUMNS = {
    SUBSCRIBTIONS: "subscribtions"
};

const POSTS_TABLE_COLUMNS = {
    POST_ID: "post_id",
    CREATOR_ID: "creator_id",
    CREATOR_NAME: "creator_name",
    CREATOR_PROFILE_URL: "creator_profile_url",
    POST_TYPE: "type",
    POST_TITLE: "title",
    POST_CONTENT: "content",
    CITIES_POST_APPLIES_TO: "cities_affected",
    TIMESTAMP: "created_on"
};


export { 
    TABLE_NAMES,
    USERS_TABLE_COLUMNS,
    COMPANY_TABLE_COLUMNS,
    USER_POSTS_TABLE_COLUMNS,
    USER_SUBSCRIBE_TABLE_COLUMNS,
    POSTS_TABLE_COLUMNS
};