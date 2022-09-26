import React from "react";
import { useFormik } from "formik";
import { formValidationSchema } from "../../schemas/ContactForm";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const FormInput = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: formValidationSchema,
      
      onSubmit: (values, action) => {
        console.log("🚀 ~ file: FormInput.js ~ line 19 ~ FormInput ~ values", values)
        action.resetForm();
      },
    });

  return ( 
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        name="name"
        id="name"
        placeholder="Name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        className="contact-form-field"
      />
      {errors.name && touched.name ? (
        <p className="form-error-message">{errors.name}</p>
      ) : null}

      <input
        type="email"
        autoComplete="off"
        name="email"
        id="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className="contact-form-field"
      />
      {errors.email && touched.email ? (
        <p className="form-error-message">{errors.email}</p>
      ) : null}

      <input
        type="text"
        autoComplete="off"
        name="subject"
        id="subject"
        placeholder="Subject"
        value={values.subject}
        onChange={handleChange}
        onBlur={handleBlur}
        className="contact-form-field"
      />
      {errors.subject && touched.subject ? (
        <p className="form-error-message">{errors.subject}</p>
      ) : null}

      <textarea
        type="message"
        autoComplete="off"
        name="message"
        id="message"
        placeholder="Message"
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
        className="contact-form-field"
      />
      {errors.message && touched.message ? (
        <p className="form-error-message">{errors.message}</p>
      ) : null}
      <button className="form-submit-btn" type="submit">
        Send Meassage
      </button>
    </form>
  );
};

export default FormInput;
