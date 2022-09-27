import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Formik, Form } from "formik";
import FormikControl from "../form-components/FormikControl";
import { contactFormValidationSchema } from "../../schemas/ContactForm";
import Swal from "sweetalert2";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const onSubmit = (values) => {
    console.log(
      "🚀 ~ file: FormInput.js ~ line 113 ~ onSubmit ~ values",
      values
    );

    Swal.fire({
      title: "Success!",
      text: "Your message has been received",
      icon: "success",
      confirmButtonText: "Go Back",
    }).then(function (result) {
      if (true) {
        window.location = "/";
      }
    });

    window.scrollTo({ top: 0, left: 0 });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactFormValidationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Container fluid className="contact-form-inner-container">
          <Form className="contact-form">
            <Col xl={12} className="input-field-col">
              <div className="input-field-container">
                <div className="input-field-input">
                  <FormikControl
                    control="input"
                    placeholder="Name"
                    type="text"
                    name="name"
                  />
                </div>
              </div>
            </Col>

            <Col xl={12} className="input-field-col">
              <div className="input-field-container">
                <div className="input-field-input">
                  <FormikControl
                    control="input"
                    placeholder="Email"
                    type="input"
                    name="email"
                  />
                </div>
              </div>
            </Col>

            <Col xl={12} className="input-field-col">
              <div className="input-field-container">
                <div className="input-field-input">
                  <FormikControl
                    control="input"
                    placeholder="Subject"
                    type="text"
                    name="subject"
                  />
                </div>
              </div>
            </Col>

            <FormikControl
              control="textarea"
              placeholder="Message"
              type="text"
              name="message"
              style={{ minHeight: "100px", width: "100%", padding: "15px" }}
            />

            <Col className="input-field-col">
              <button
                disabled={!Formik.isValid && Formik.isSubmitting}
                className="checkout-form-submit-btn"
                type="submit"
              >
                Send Message
              </button>
            </Col>
          </Form>
        </Container>
      )}
    </Formik>
  );
};

export default ContactForm;
