import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import { formValidationSchema } from "../../schemas/NewsletterForm";

const initialValues = {
  email: "",
};

function FooterComponent() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: formValidationSchema,

      onSubmit: (values, action) => {
        console.log("🚀 ~ file: FooterComponent.js ~ line 19 ~ FooterComponent ~ values", values)
        action.resetForm();
      },
    });

  return (
    <div className="container footer-container">
      <img src='/images/brand-logo.png' alt="" />
      <p>
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, nostrud exercitation ullamco laboris.”
      </p>
      <h4>STORES</h4>
      <span>Dunsmuir Ave, Los Angeles, CA 90036, USA</span>
      <br />
      <span>Atkins Ave, Brooklyn, NY 11208, USA</span>
      <h3>NEWS AS FRESH AS OUR COFFEE</h3>
      <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            autoComplete="off"
            name="email"
            id="email"
            placeholder="Your email address"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button type="submit" className="newsletter-form-btn">
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
      </form>
      {errors.email && touched.email ? (
        <p className="newsletter-error-message">{errors.email}</p>
      ) : null}
    </div>
  );
}

export default FooterComponent;
