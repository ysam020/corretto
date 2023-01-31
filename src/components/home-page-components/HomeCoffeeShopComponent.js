import React, { useEffect } from "react";
import Headings from "../../data/Headings";
import ProductList from "../../data/ProductList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { CartState } from "../../context/Context";

function HomeCoffeeShopComponent() {
  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us - Corretto";
  }, []);

  // Redirect to Product Single Page
  let navigate = useNavigate();
  const productSingleRedirect = () => {
    let path = `/product`;
    navigate(path);
  };

  // Redirect to Cart Page
  const cartRedirect = () => {
    let path = `/cart`;
    navigate(path);
  };

  // Cart State
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <Container fluid className="section-5">
      {Headings.slice(1, 2).map((values, i) => {
        const { heading, titleSeparator, subHeading } = values;

        return (
          <div key={i} className=" container heading-component">
            <h1>{heading}</h1>
            <img src={titleSeparator} alt="" />
            <p>{subHeading}</p>
          </div>
        );
      })}

      <Row className="home-shop-row">
        {ProductList.slice(0, 4).map((products, i) => {
          const { title, price, image } = products;

          return (
            <Col
              xxl={3}
              xl={3}
              lg={3}
              md={6}
              sm={6}
              xs={6}
              className="home-shop-col"
              key={i}
            >
              <div className="product">
                <div className="product-content">
                  <div className="product-img">
                    <img src={image} alt="" onClick={productSingleRedirect} />
                  </div>
                  <div className="product-description">
                    <h3 onClick={productSingleRedirect}>{title}</h3>
                    <p>{`$ ${price.toFixed(2)}`}</p>
                  </div>
                  <div
                    className={`mobile-add-to-cart-btn ${
                      !products.inStock ? "disabled" : "active"
                    }`}
                  >
                    {cart.some((p) => p.id === products.id) ? (
                      <button onClick={cartRedirect}>Go to Cart</button>
                    ) : (
                      <button
                        onClick={() =>
                          dispatch({
                            type: "ADD_TO_CART",
                            payload: products,
                          })
                        }
                        disabled={!products.inStock}
                      >
                        {!products.inStock ? "Out of Stock" : "Add to Cart"}
                      </button>
                    )}
                  </div>
                </div>
                <div className="product-overlay">
                  {cart.some((p) => p.id === products.id) ? (
                    <button onClick={cartRedirect}>Go to Cart</button>
                  ) : (
                    <button
                      onClick={() =>
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: products,
                        })
                      }
                      disabled={!products.inStock}
                      className={`add-to-cart-btn ${
                        !products.inStock ? "disabled" : "active"
                      }`}
                    >
                      {!products.inStock ? "Out of Stock" : "Add to Cart"}
                    </button>
                  )}
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default HomeCoffeeShopComponent;
