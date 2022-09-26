import React, {useState} from "react";
import Menu from "../../data/Menu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function BeveragesComponent() {
  const [data, setData] = useState(Menu);

  return (
    <div className="hot-beverages-container">
      <Container fluid className="menu-group-container">
      {data.map((values, i) => {
        const { menuImage, menuTitle, menuText, menuPrice } = values;

        return (
          <Row key={i} className="menu-group-row">
            <Col xxl={6} xl={6} md={12} className="menu-group-col">
              <div className="menu-item-container">
                <div className="menu-img">
                  <img src={menuImage} alt="" />
                </div>
                <div className="menu-text">
                  <div className="menu-heading-container">
                    <div className="menu-heading">
                      <h3>{menuTitle}</h3>
                    </div>
                    <div className="menu-dashed"></div>
                  </div>
                  <p>{menuText}</p>
                </div>
                <div className="menu-price">
                  <p>{menuPrice}</p>
                </div>
              </div>
            </Col>
            <Col xxl={6} xl={6} md={12} className="menu-group-col">
              <div className="menu-item-container">
                <div className="menu-img">
                  <img src={menuImage} alt="" />
                </div>
                <div className="menu-text">
                  <div className="menu-heading-container">
                    <div className="menu-heading">
                      <h3>{menuTitle}</h3>
                    </div>
                    <div className="menu-dashed"></div>
                  </div>
                  <p>{menuText}</p>
                </div>
                <div className="menu-price">
                  <p>{menuPrice}</p>
                </div>
              </div>
            </Col>
          </Row>
        );
      })}
      </Container>
    </div>
  );
}

export default BeveragesComponent;
