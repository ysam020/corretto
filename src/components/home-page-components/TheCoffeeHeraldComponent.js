import React, { useState } from "react";
import Headings from "../../data/Headings";
import Blogs from "../../data/Blogs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TheCoffeeHeraldComponent() {
  const [heading, setHeading] = useState(Headings);
  const [data, setdata] = useState(Blogs);

  return (
    <div className="section-3">
      {heading.slice(0,1).map((values, i) => {
        const { heading, titleSeparator, subHeading } = values;

        return (
          <div key = {i} className=" container heading-component">
            <h1>{heading}</h1>
            <img src={titleSeparator} alt="" />
            <p>{subHeading}</p>
          </div>
        );
      })}

      <Container fluid className="blog-container">
        <Row>
          {data.map((values, i) => {
            const { blogImage, blogTitle, blogText } = values;

            return (
              <Col
                key={i}
                xxl={4}
                xl={4}
                lg={4}
                md={4}
                sm={10}
                className="blog-col"
                data-aos="zoom-in-up"
              >
                <div className="blog">
                  <div className="blog-img">
                    <img src={blogImage} alt="" />
                  </div>
                  <div className="blog-content">
                    <h3>{blogTitle}</h3>
                    <p>{blogText}</p>
                    <a href="#">
                      <span>READ MORE</span>
                    </a>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default TheCoffeeHeraldComponent;
