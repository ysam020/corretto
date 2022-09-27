import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { formValidationSchema } from "../../schemas/CheckoutForm";
import FormikControl from "../form-components/FormikControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PasswordIcon from "@mui/icons-material/Password";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import States from "../../data/States";
import Swal from "sweetalert2";
import Confetti from "react-confetti";

function CheckoutForm() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    town: "",
    zip: "",
    state: "",
    cardNumber: "",
    nameOnCard: "",
    validThru: "",
    cvv: "",
  };

  const [formSuccess, setFormSuccess] = useState(false);

  const onSubmit = (values, action) => {
    console.log(
      "🚀 ~ file: CheckoutForm.js ~ line 36 ~ onSubmit ~ values",
      values
    );

    Swal.fire({
      title: "Great!",
      text: "Your order has been placed",
      icon: "success",
      confirmButtonText: "Track Order",
    }).then(function (result) {
      if (true) {
        window.location = "/";
      }
    });

    window.scrollTo({ top: 0, left: 0 });

    setFormSuccess(true);
  };

  if (formSuccess) {
    return <Confetti />;
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formValidationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Container fluid className="checkout-form-inner-container">
          <Form>
            <Row className="input-field-row">
              <Col className="input-field-col">
                <h2 className="checkout-form-heading">Basic Info</h2>
              </Col>
            </Row>

            <Row className="input-field-row">
              <Col lg={6} xs={12} className="input-field-col">
                <div className="input-field-container">
                  <div className="input-field-icon">
                    <AccountCircle />
                  </div>
                  <div className="input-field-input">
                    <FormikControl
                      control="input"
                      placeholder="First Name"
                      type="text"
                      name="firstName"
                    />
                  </div>
                </div>
              </Col>

              <Col lg={6} xs={12} className="input-field-col">
                <div className="input-field-container">
                  <div className="input-field-icon">
                    <AccountCircle />
                  </div>
                  <div className="input-field-input">
                    <FormikControl
                      control="input"
                      placeholder="Last Name"
                      type="text"
                      name="lastName"
                    />
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="input-field-row">
              <Col className="input-field-col">
                <div className="input-field-container">
                  <div className="input-field-icon">
                    <AlternateEmailIcon />
                  </div>
                  <div className="input-field-input">
                    <FormikControl
                      control="input"
                      placeholder="Email"
                      type="email"
                      name="email"
                    />
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="input-field-row">
              <Col className="input-field-col">
                <div className="input-field-container">
                  <div className="input-field-icon">
                    <PhoneIcon />
                  </div>
                  <div className="input-field-input">
                    <FormikControl
                      control="input"
                      placeholder="Phone"
                      type="text"
                      name="phone"
                      maxLength="10"
                    />
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="input-field-row">
              <h2 className="checkout-form-heading">Shipping Details</h2>
            </Row>

            <Row className="input-field-row">
              <Col className="input-field-col">
                <div className="input-field-container">
                  <div className="input-field-icon">
                    <LocationOnIcon />
                  </div>
                  <div className="input-field-input">
                    <FormikControl
                      control="input"
                      placeholder="Address Line 1"
                      type="text"
                      name="addressLine1"
                    />
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="input-field-row">
              <Col className="input-field-col">
                <div className="input-field-container">
                  <div className="input-field-icon">
                    <LocationOnIcon />
                  </div>
                  <div className="input-field-input">
                    <FormikControl
                      control="input"
                      placeholder="Address Line 2"
                      type="text"
                      name="addressLine2"
                    />
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="input-field-row">
              <Col lg={6} xs={12} className="input-field-col">
                <div className="input-field-container">
                  <div className="input-field-icon">
                    <LocationOnIcon />
                  </div>
                  <div className="input-field-input">
                    <FormikControl
                      control="input"
                      placeholder="Town / City"
                      type="text"
                      name="town"
                    />
                  </div>
                </div>
              </Col>

              <Col lg={6} xs={12} className="input-field-col">
                <div className="input-field-container">
                  <div className="input-field-icon">
                    <LocationOnIcon />
                  </div>
                  <div className="input-field-input">
                    <FormikControl
                      control="input"
                      placeholder="Postal / ZIP Code"
                      type="text"
                      name="zip"
                      maxLength="6"
                    />
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="input-field-row">
              <Col className="input-field-col">
                <div className="input-field-container">
                  <div className="input-field-icon">
                    <LocationOnIcon />
                  </div>
                  <div className="input-field-input">
                    <FormikControl
                      control="select"
                      placeholder="State"
                      //   type="text"
                      name="state"
                      options={States}
                    />
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="input-field-row">
              <h2>Payment Details</h2>
              <p>
                (Payment gateway integration has not been done. Below fields can
                be left empty)
              </p>
            </Row>

            <Row className="input-field-row">
              <Col className="input-field-col">
                <div className="input-field-container">
                  <div className="input-field-icon">
                    <CreditCardIcon />
                  </div>
                  <div className="input-field-input">
                    <FormikControl
                      control="input"
                      placeholder="Card Number"
                      type="text"
                      name="cardNumber"
                      maxLength="16"
                    />
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="input-field-row">
              <Col className="input-field-col">
                <div className="input-field-container">
                  <div className="input-field-icon">
                    <CreditScoreIcon />
                  </div>
                  <div className="input-field-input">
                    <FormikControl
                      control="input"
                      placeholder="Name On Card"
                      type="text"
                      name="nameOnCard"
                    />
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="input-field-row">
              <Col lg={6} xs={12} className="input-field-col">
                <div className="input-field-container">
                  <div className="input-field-icon">
                    <CalendarMonthIcon />
                  </div>
                  <div className="input-field-input">
                    <FormikControl
                      control="input"
                      placeholder="Valid Thru (MM / YY)"
                      type="text"
                      name="validThru"
                    />
                  </div>
                </div>
              </Col>

              <Col lg={6} xs={12} className="input-field-col">
                <div className="input-field-container">
                  <div className="input-field-icon">
                    <PasswordIcon />
                  </div>
                  <div className="input-field-input">
                    <FormikControl
                      control="input"
                      placeholder="CVV"
                      type="password"
                      name="cvv"
                      maxLength="3"
                    />
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="input-field-row">
              <Col className="input-field-col">
                <button
                  disabled={!Formik.isValid && Formik.isSubmitting}
                  className="checkout-form-submit-btn"
                  type="submit"
                >
                  Complete order
                </button>
              </Col>
            </Row>
          </Form>
        </Container>
      )}
    </Formik>
  );
}

export default CheckoutForm;
