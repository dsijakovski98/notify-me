const TABLE_NAMES = {
    USERS_TABLE: "users",
    COMPANIES_TABLE: "companies",
};

const USERS_TABLE_COLUMNS = {
    UID: "uid",
    EMAIL: "email",
    FIRST_NAME: "first_name",
    LAST_NAME: "last_name",
    DATE_OF_BIRTH: "date_of_birth",
    GENDER: "gender"
}

const COMPANY_TABLE_COLUMNS = {
    COMPANY_ID: "company_id",
    COMPANY_NAME: "name",
    EMAIL: "email",
    DATE_OF_CREATION: "date_of_creation",
    CEO_FIRST_NAME: "ceo_first",
    CEO_LAST_NAME: "ceo_last",
    HEADQUARTERS_CITY: "city_head",
    SERVICE_TYPE: "service",
    BRANCHES: "branches"
}


export { TABLE_NAMES, USERS_TABLE_COLUMNS, COMPANY_TABLE_COLUMNS }