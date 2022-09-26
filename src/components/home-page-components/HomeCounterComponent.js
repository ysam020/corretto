import React, { useState } from "react";
import Counter from "../../data/Counter";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomeCounterComponent() {
  const [data, setData] = useState(Counter);

  return (
    <Container fluid className="section-4">
      <Row className="counter-row">
        {data.map((values, i) => {
          const { count, counterTitle, counterText } = values;

          return (
            <Col key={i} lg={3} xs={6} className="counter-col">
              <div className="counter">
                <span className="counter-number">{count}</span>
                <h3>{counterTitle}</h3>
                <p>{counterText}</p>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default HomeCounterComponent;
