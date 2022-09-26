import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

function HomeContactComponent() {
  let navigate = useNavigate(); 
  const contactPageRedirect = () =>{ 
    let path = `/contact`; 
    navigate(path);
  }

  return (
    <Container fluid className="section-7">
      <Row className="home-contact-row">
        <Col xxl={9} xl={9} lg={9} md={12} sm={12} className="home-contact-col">
          <h3>
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO
          </h3>
        </Col>
        <Col xxl={3} xl={3} lg={3} md={12} sm={12} className="home-contact-col">
          <button className="home-contact-btn" onClick={contactPageRedirect}>contact us</button>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeContactComponent;
