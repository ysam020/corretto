import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../forms/ContactForm";

function GetInTouchComponent() {
  return (
    <>
      <Container className="contact-form-container">
        <Row className="contact-form-row">
          <Col md={6}>
            <h2>get in touch</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea.
            </p>
            <ul>
              <li>
                <span>
                  <FontAwesomeIcon icon={faCircle} className="list-icon" />
                </span>
                Duis aute irure dolor
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faCircle} className="list-icon" />
                </span>
                Duis aute irure dolor
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faCircle} className="list-icon" />
                </span>
                Duis aute irure dolor
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faCircle} className="list-icon" />
                </span>
                Duis aute irure dolor
              </li>
              <li>
                <span>
                  <a href="/#">
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      beat
                      className="social-icon"
                    />
                  </a>
                  <a href="/#">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      beat
                      className="social-icon"
                    />
                  </a>
                  <a href="/#">
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="social-icon"
                      beat
                    />
                  </a>
                  <a href="/#">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      beat
                      className="social-icon"
                    />
                  </a>
                </span>
              </li>
            </ul>
          </Col>

          <Col md={6}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row></Row>
      </Container>
    </>
  );
}

export default GetInTouchComponent;
