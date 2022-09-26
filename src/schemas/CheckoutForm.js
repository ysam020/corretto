import * as Yup from "yup";

const nameRegex = /^[aA-zZ\s]+$/;
const emailRegex = /[a-zA-Z0-9_]+(\.)?[a-zA-Z0-9_]+[@]{1}[a-zA-Z]+\.[a-zA-Z]{2,6}/;
const phoneRegex = /^[6-9][\d]{9}$/;
const zipRegex = /[\d]{6}/;

export const checkoutFormValidationSchema = Yup.object({
  firstName: Yup.string().trim().min(1, "First name must be atleast 1 character").max(25, "Maximun 25 Characters are allowed").required("Please enter your first name").matches(nameRegex, "First name shouldn't include any special character"),

  lastName: Yup.string().trim().min(1, "Last name must be atleast 1 character").max(25, "Maximun 25 Characters are allowed").required("Please enter your last name").matches(nameRegex, "Last name shouldn't include any special character"),

  email: Yup.string().email("Invalid email").required("Please enter your email").matches(emailRegex, "Invalid email"),

  phone: Yup.string()
    .matches(phoneRegex, "Enter a valid phone number")
    .required("Please enter your number"),

  addressLine1: Yup.string().required("Please enter your address"),

  addressLine2: Yup.string().required("Please enter your address"),

  town: Yup.string().required("Please enter your city"),

  zip: Yup.string("Invalid ZIP").min(6, "ZIP must b 6 characters").matches(zipRegex, "Invalid ZIP").required("Please enter your ZIP code"),
   
  state: Yup.string().required("Please select a state"),
});
