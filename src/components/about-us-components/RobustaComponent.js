import React, { useState } from "react";
import RobustaGallery from "../../data/RobustaGallery";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";

function RobustaComponent() {
  const [gallery, setGallery] = useState(RobustaGallery);

  const filterResultByTag = (tagItem) => {
    const tagResult = RobustaGallery.filter((tagData) => {
      if (tagData.tag.includes(tagItem)) {
        return tagData;
      }
      return false;
    });
    setGallery(tagResult);
  };

  const [select, setSelect] = useState("all");

  const onChangeInput = (e) => {
    setSelect(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <div className="container about-section-2">
        <div className="row about-section-2-row">
          <img src="/images/robusta.png" alt="" />
          <h1>ABOUT ROBUSTA</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute
          </p>
        </div>

        <Container fluid className="gallery-container">
          <Row>
            <ul className="gallery-filter">
              <li onClick={() => filterResultByTag("all")}>
                <span className="gallery-filter-btn">Show All</span>
              </li>
              <li onClick={() => filterResultByTag("aroma")}>
                <span className="gallery-filter-btn">Aroma</span>
              </li>
              <li onClick={() => filterResultByTag("break")}>
                <span className="gallery-filter-btn">Break</span>
              </li>
              <li onClick={() => filterResultByTag("cup of coffee")}>
                <span className="gallery-filter-btn">Cup Of Coffee</span>
              </li>
              <li onClick={() => filterResultByTag("filtered")}>
                <span className="gallery-filter-btn">Filtered</span>
              </li>
              <li onClick={() => filterResultByTag("mornings")}>
                <span className="gallery-filter-btn">Mornings</span>
              </li>
            </ul>

            <select
              selected
              value={select}
              onChange={onChangeInput}
              className="gallery-filter-mobile"
            >
              <option value="all">Show All</option>
              <option value="aroma">Aroma</option>
              <option value="break">Break</option>
              <option value="cup of coffee">Cup Of Coffee</option>
              <option value="filtered">Filtered</option>
              <option value="mornings">Mornings</option>
            </select>
          </Row>
          <Row>
            {gallery
              .filter((val) => {
                if (val.tag.includes(select)) {
                  return val;
                }
                return false;
              })
              .map((value, i) => {
                const { image, title } = value;

                return (
                  <Col
                    key={i}
                    xl={3}
                    lg={4}
                    md={6}
                    sm={6}
                    xs={6}
                    className="gallery-col"
                  >
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 3 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img src={image} alt="" />
                      <h2>{title}</h2>
                    </motion.div>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default RobustaComponent;
