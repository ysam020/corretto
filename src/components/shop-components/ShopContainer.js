import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProductList from "../../data/ProductList";
import ShopSidebar from "./ShopSidebar";
import MobileFilters from "./MobileFilters";
import { CartState } from "../../context/Context";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";

function ShopContainer() {
  // Cart State
  const {
    state: { products },
  } = CartState();

  const {
    state: { cart },
    dispatch,
  } = CartState();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us - Corretto";
  }, []);

  // Redirect to Cart Page
  let navigate = useNavigate();
  const cartRedirect = () => {
    let path = `/cart`;
    navigate(path);
  };

  // Product Search
  const [searchTerm, setSearchTerm] = useState("");

  // Sorting Ascending
  const [order, setOrder] = useState("");
  const ascSorting = (col) => {
    if (order === "") {
      const sorted = [...data].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setData(sorted);
      setOrder("");
    }
  };

  // Sorting Descending
  const dscSorting = (col) => {
    if (order === "") {
      const sorted = [...data].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setData(sorted);
      setOrder("");
    }
  };

  // Filter Products by Category
  const filterResultByCategory = (categoryItem) => {
    const categoryResult = ProductList.filter((categoryData) => {
      if (categoryData.category.includes(categoryItem)) {
        return categoryData;
      }
      return false;
    });
    setData(categoryResult);
  };

  // Filter Products by Tags
  const filterResultByTag = (tagItem) => {
    const tagResult = ProductList.filter((tagData) => {
      return tagData.tags === tagItem;
    });
    setData(tagResult);
  };

  // // Array Map
  const [data, setData] = useState(ProductList);

  // Modal
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 9;
  const pagesVisited = pageNumber * productsPerPage;
  const displayProducts = data
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .filter((val) => {
      if (searchTerm === "") {
        return products;
      } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
      return false;
    })
    .map((products, i) => {
      return (
        <Col key={i} lg={4} xs={6} className="shop-products-col">
          <div className="product">
            <div className="product-content">
              <div className="product-img">
                <Link
                  to={`product/${products.id}`}
                  className="single-product-link"
                >
                  <img src={products.image} alt="" />
                </Link>
              </div>
              <div className="product-description">
                <Link to={`product/${products.id}`}>
                  <h3>{products.title}</h3>
                </Link>
                <p>{`$ ${products.price.toFixed(2)}`}</p>
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
    });

  const pageCount = Math.ceil(data.length / productsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Container fluid className="shop-products-container">
      <Row className="shop-products-row">
        <Col lg={3} className="shop-sidebar-col">
          <ShopSidebar
            setSearchTerm={setSearchTerm}
            ascSorting={ascSorting}
            dscSorting={dscSorting}
            filterResultByCategory={filterResultByCategory}
            filterResultByTag={filterResultByTag}
          />
        </Col>

        <Col lg={9} className="shop-products-col">
          <div className="shop-products">
            <Row>
              <Row className="search-product-mobile-row">
                <Col>
                  <div className="search-product-form-mobile">
                    <input
                      type="text"
                      placeholder="Search"
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className="search-products-icon-mobile"
                    />
                  </div>
                </Col>
              </Row>
              {displayProducts}
              <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={`paginationBttns page-count-${pageCount}`}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />
            </Row>
          </div>
        </Col>

        <Col className="product-filter-mobile">
          <MobileFilters
            show={show}
            handleShow={handleShow}
            handleClose={handleClose}
            ascSorting={ascSorting}
            dscSorting={dscSorting}
            filterResultByCategory={filterResultByCategory}
            filterResultByTag={filterResultByTag}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ShopContainer;
