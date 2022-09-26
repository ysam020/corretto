import React, { useState, useEffect } from "react";
import { Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { CartState } from "../../context/Context";
import { useNavigate } from "react-router-dom";

function CartContainer() {
  // Redirect to checkout Page
  let navigate = useNavigate();
  const checkoutPageRedirect = () => {
    let path = `/checkout`;
    navigate(path);
  };

  const {
    state: { cart },
    dispatch,
  } = CartState();
  
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="cartContainer">
      <ListGroup>
        {cart.map((products, i) => (
          <ListGroup.Item key={i}>
            <Row className="cart-item-row">
              <Col lg={2} sm={10} className="cart-item-col">
                <Image src={products.image} alt={products.name} fluid rounded />
              </Col>
              <Col lg={6} sm={10} className="cart-item-col">
                <h2>{products.title}</h2>
                <p>$ {products.price}</p>
              </Col>
              <Col lg={1} sm={10} className="cart-item-col">
                <Form.Control
                  as="select"
                  className="cart-quantity-input"
                  value='Select Quantity'
                  onChange={(e) =>
                    dispatch({
                      type: "CHANGE_CART_QTY",
                      payload: {
                        id: products.id,
                        qty: e.target.value,
                      },
                    })
                  }
                >
                  {[...Array(products.inStock).keys()].map((x) => (
                    <option key={x + 1}>{x + 1}</option>
                  ))}
                </Form.Control>
              </Col>
              <Col lg={3} sm={10} className="cart-item-col">
                <button
                  className="remove-from-cart-btn"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: products,
                    })
                  }
                >
                  Remove
                </button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className="cart-summary">
        <h1>Cart Totals</h1>
        <h3>Total Items: {cart.length}</h3>
        <p>Total Price: $ {total}</p>
        <button onClick={checkoutPageRedirect} className="checkout-btn">
          Procced to Checkout
        </button>
      </div>
    </div>
  );
}

export default CartContainer;