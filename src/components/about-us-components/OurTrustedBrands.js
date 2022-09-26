import React, { useState } from "react";
import OurTrustedBrandIcons from "../../data/OurTrustedBrandIcons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HoverImage from "react-hover-image";
import { useNavigate } from "react-router-dom";

function OurTrustedBrands() {
  let navigate = useNavigate();
  const menuPageRedirect = () => {
    let path = `/menu`;
    navigate(path);
  };

  const [icons, setIcons] = useState(OurTrustedBrandIcons);

  return (
    <Container fluid className="container about-section-4">
      <Row>
        <Col xl={5} md={12} className="section-4-left-col">
          <h2>Our Trusted Brands</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempus
            do eiusmod tempor incididunt ut
          </p>
          <button onClick={menuPageRedirect}>View More</button>
        </Col>

        <Col xl={5} md={12} className="section-4-right-col">
          <Row>
            {icons.map((values, i) => {
              const { image, imageHover, id } = values;

              return (
                <Col
                  key={i}
                  xl={4}
                  sm={4}
                  xs={6}
                  className="img-container-col"
                >
                  <div className={`brand-img-container brand-img-container-${id}`}>
                    <HoverImage
                      src={image}
                      hoverSrc={imageHover}
                      className="brand-icon"
                    />
                  </div>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default OurTrustedBrands;
