import { websitePattern } from "../../../helpers/validators";
import { PhoneNumberUtil } from "google-libphonenumber"; 


const validateCompanyUpdate = (company, handleBranchAdd) => {
    const phoneUtil = PhoneNumberUtil.getInstance();

    if(company.profileUrlErr.length) return false;

    // Clear errors from before
    company.setCeoFirstErr("");
    company.setCeoLastErr("");
    company.setCompanyNameErr("");

    let cFirstErr = "";
    let cLastErr = "";
    let companyNameErr = "";

    let compWebsiteErr = "";
    let compNumberErr = "";

    // Check date validity
    if(isNaN(company.dateOfCreation.getTime()))  return false;

    // Empty fields
    if(company.ceoFirst.trim() === "") cFirstErr = "Enter CEO's first name!";
    if(company.ceoLast.trim() === "") cLastErr = "Enter CEO's last name!";
    if(company.companyName.trim() === "") companyNameErr = "Enter company's name!";

    // City validation
    const headCityCapitalized = 
    company.cityHead.slice(0, 1).toUpperCase() + company.cityHead.slice(1);
    company.setCityHead(headCityCapitalized);

    // Add default city (cityHead)
    if(!company.branches.includes(headCityCapitalized)) {
        handleBranchAdd(headCityCapitalized);
    }

    // Phone number validation
    if(company.phoneNumber.trim() !== "+389") {
        // If a number is entered
        const number = phoneUtil.parse(company.phoneNumber, 'MK');
        if(!phoneUtil.isValidNumberForRegion(number, 'MK')) {
            compNumberErr = "Invalid number entered for MK region!";
        }
    }

    // Website validation
    if(company.website.trim() !== "") {
        if(!websitePattern.test(company.website))
            compWebsiteErr = "Invalid website URL!";
    }

    if(cFirstErr.length || cLastErr.length || companyNameErr.length ||
        compWebsiteErr.length || compNumberErr.length) {
            company.setCeoFirstErr(cFirstErr);
            company.setCeoLastErr(cLastErr);
            company.setCompanyNameErr(companyNameErr);
            company.setWebsiteErr(compWebsiteErr);
            company.setPhoneNumberErr(compNumberErr);
            return false;
        }


    return true;
}

export { validateCompanyUpdate };