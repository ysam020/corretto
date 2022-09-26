import * as Yup from "yup";

export const formValidationSchema = Yup.object({
  email: Yup.string().email().trim().required("Please enter your email"),
});