const validateUserUpdate = (user) => {
    if(user.profileUrlErr.length) return false;

    // Clear errors from before
    user.setFirstNameErr("");
    user.setLastNameErr("");

    let firstErr = "";
    let lastErr = "";

    // Check date validity
    if(isNaN(user.dateOfBirth.getTime()))  return false;

    // Empty fields
    if(user.firstName.trim() === "") firstErr = "Enter your first name!";
    if(user.lastName.trim() === "") lastErr = "Enter your last name!";

    if(firstErr.length || lastErr.length) {
        user.setFirstNameErr(firstErr);
        user.setLastNameErr(lastErr);
        return false;
    }

    return true;
}

export { validateUserUpdate };