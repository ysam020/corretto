import * as Yup from "yup";

const nameRegex = /^[aA-zZ\s]+$/;
const emailRegex =
  /[a-zA-Z0-9_]+(\.)?[a-zA-Z0-9_]+[@]{1}[a-zA-Z]+\.[a-zA-Z]{2,6}/;

export const contactFormValidationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(1, "Name must be atleast 1 character")
    .max(25, "Maximum 25 characters allowed")
    .required("Please enter your name")
    .matches(nameRegex, "Name shouldn't include any special character"),

  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email")
    .matches(emailRegex, "Invalid email"),

  subject: Yup.string()
    .trim()
    .min(10, "Subject must be atleast 10 characters")
    .max(25, "Maximun 25 Characters are allowed")
    .required("Please enter subject"),

  message: Yup.string()
    .trim()
    .min(30, "Message must be atleast 30 characters")
    .max(150, "Maximun 25 Characters are allowed")
    .required("Please enter message"),
});
