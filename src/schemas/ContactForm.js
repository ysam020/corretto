import * as Yup from "yup";

export const formValidationSchema = Yup.object({
  name: Yup.string().trim().min(2, "Name must be atleast 2 characters").max(25, "Maximun 25 Characters are allowed").required("Please enter your name").matches(/^[aA-zZ\s]+$/, "Name shouldn't include any special character"),
  email: Yup.string().email().trim().required("Please enter your email"),
  subject: Yup.string().trim().min(5, "Subject must be atleast 5 characters").max(25, "Maximun 25 Characters are allowed").required("Please enter subject"),
  message: Yup.string().trim().min(10, "Message must be atleast 10 characters").max(200, "Maximun 200 Characters are allowed").required("Please enter message")
});