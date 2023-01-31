import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

function MobileFilters(props) {
  return (
    <>
      <Button className="mobile-filter-btn" onClick={props.handleShow}>
        Sort and Filter
      </Button>

      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-filter-title">Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body className="filter-modal">
          <div className="shop-sidebar-mobile">
            <div>
              <div className="product-sorting">
                <h3>Sorting</h3>
                <button
                  onClick={() => {
                    props.ascSorting("price");
                    props.handleClose();
                  }}
                  className="product-sorting-btn"
                >
                  Price: Low to High
                </button>
                <button
                  onClick={() => {
                    props.dscSorting("price");
                    props.handleClose();
                  }}
                  className="product-sorting-btn"
                >
                  Price: High to Low
                </button>
              </div>
              <div className="product-categories">
                <h3>Product Categories</h3>
                <button
                  onClick={() => {
                    props.filterResultByCategory("all");
                    props.handleClose();
                  }}
                >
                  Show All Products
                </button>
                <button
                  onClick={() => {
                    props.filterResultByCategory("accessories");
                    props.handleClose();
                  }}
                >
                  Accessories
                </button>
                <button
                  onClick={() => {
                    props.filterResultByCategory("bean varieties");
                    props.handleClose();
                  }}
                >
                  Bean Varieties
                </button>
                <button
                  onClick={() => {
                    props.filterResultByCategory("coffee cups");
                    props.handleClose();
                  }}
                >
                  Coffee Cups
                </button>
                <button
                  onClick={() => {
                    props.filterResultByCategory("espresso machines");
                    props.handleClose();
                  }}
                >
                  Espresso Machines
                </button>
                <button
                  onClick={() => {
                    props.filterResultByCategory("fresh coffee");
                    props.handleClose();
                  }}
                >
                  Fresh Coffee
                </button>
                <button
                  onClick={() => {
                    props.filterResultByCategory("italian coffee");
                    props.handleClose();
                  }}
                >
                  Italian Coffe
                </button>
              </div>

              <div className="product-tags">
                <h3>Product Tags</h3>
                <button
                  onClick={() => {
                    props.filterResultByTag("fresh");
                    props.handleClose();
                  }}
                >
                  Fresh
                </button>
                <button
                  onClick={() => {
                    props.filterResultByTag("aroma");
                    props.handleClose();
                  }}
                >
                  Aroma
                </button>
                <button
                  onClick={() => {
                    props.filterResultByTag("beans");
                    props.handleClose();
                  }}
                >
                  Beans
                </button>
                <button
                  onClick={() => {
                    props.filterResultByTag("cream");
                    props.handleClose();
                  }}
                >
                  Cream
                </button>
                <button
                  onClick={() => {
                    props.filterResultByTag("classic");
                    props.handleClose();
                  }}
                >
                  Classic
                </button>
                <button
                  onClick={() => {
                    props.filterResultByTag("accessories");
                    props.handleClose();
                  }}
                >
                  Accessories
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={props.handleClose}
            className="mobile-filter-close-btn"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MobileFilters;
