import React, { useState } from "react";
import Headings from "../../data/Headings";
import HomeCards from "../../data/HomeCards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function OurDeliciousOfferComponent() {
  const [headings, setHeadings] = useState(Headings);
  const [data, setData] = useState(HomeCards);

  return (
    <>
    {headings.slice(2,3).map((values, i) => {
      const {heading, titleSeparator, subHeading} = values;

      return(
        <div key = {i} className=" container heading-component">
            <h1>{heading}</h1>
            <img src={titleSeparator} alt="" />
            <p>{subHeading}</p>
          </div>
      );
    })}

      <Container fluid className="section-6">
        <Row>
          {data.map((values, i) => {
            const { cardImage, cardTitle, cardText } = values;

            return (
              <Col
                key = {i}
                xxl={3}
                xl={3}
                lg={6}
                md={6}
                sm={6}
                xs={6}
                className="our-delicious-col"
              >
                <div className="card">
                  <div className="card-img">
                    <img src={cardImage} alt="" />
                  </div>
                  <div className="card-content">
                    <h3>{cardTitle}</h3>
                    <p>{cardText}</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default OurDeliciousOfferComponent;
