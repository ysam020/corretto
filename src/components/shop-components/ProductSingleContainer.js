import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import ProductList from "../../data/ProductList";
import { CartState } from "../../context/Context";

function ProductSingleContainer() {
  // Redirect to Cart Page
  let navigate = useNavigate();
  const cartRedirect = () => {
    let path = `/cart`;
    navigate(path);
  };

  // Cart State
  const {
    state: { products },
  } = CartState();

  const {
    state: { cart },
    dispatch,
  } = CartState();

  // Retrieve id from url
  const { url } = useParams();
  const product = ProductList.find((product) => product.id === +url);
  const { title, image, price, desc, category, tags, sku, weight, dimensions } =
    product;

  return (
    <Container fluid className="product-single-container">
      <Row>
        <Col lg={6} className="product-single-img-col">
          <img src={image} alt="" />
        </Col>
        <Col lg={4} className="product-single-text-col">
          <h2>{title}</h2>
          <h5>{`$ ${price.toFixed(2)}`}</h5>
          <br />
          <p className="product-short-description">{desc}</p>
          <br />
          {cart.some((p) => p.id === products[url - 1].id) ? (
            <button onClick={cartRedirect}>Go to Cart</button>
          ) : (
            <button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                })
              }
              disabled={!products[url - 1].inStock}
              className={`add-to-cart-btn ${
                !products[url - 1].inStock ? "disabled" : "active"
              }`}
            >
              {!products[url - 1].inStock ? "Out of Stock" : "Add to Cart"}
            </button>
          )}
          <br />
          <br />
          <p className="product-info">
            <span className="product-info-heading">SKU:</span>
            {sku}
          </p>
          <p className="product-info">
            <span className="product-info-heading">CATEGORY:</span>
            {category[1].toUpperCase()}
          </p>
          <p className="product-info">
            <span className="product-info-heading">TAGS:</span>
            {tags.toUpperCase()}
          </p>
          <p className="product-info">
            <span className="product-info-heading">SHARE:</span>
            <span>
              <a href="/#">
                <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
              </a>
              <a href="/#">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
              <a href="/#">
                <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
              </a>
              <a href="/#">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
            </span>
          </p>
          <br />
          <h3>Additional Information</h3>
          <p className="product-info">
            <span className="product-info-heading">Weight:</span>
            {weight}
          </p>
          <p className="product-info">
            <span className="product-info-heading">Dimensions:</span>
            {dimensions}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductSingleContainer;
