import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function ShopSidebar(props) {
  return (
    <>
      <div className="shop-sidebar">
        <div>
          <div className="search-product-form">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => {
                props.setSearchTerm(e.target.value);
              }}
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="search-products-icon"
            />
          </div>

          <div className="product-sorting">
            <h3>Sorting</h3>
            <button
              onClick={(e) => {
                props.ascSorting("price");
              }}
              className="product-sorting-btn"
            >
              Price: Low to High
            </button>
            <button
              onClick={() => {
                props.dscSorting("price");
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
              }}
            >
              Show All Products
            </button>
            <button
              onClick={() => {
                props.filterResultByCategory("accessories");
              }}
            >
              Accessories
            </button>
            <button
              onClick={() => {
                props.filterResultByCategory("bean varieties");
              }}
            >
              Bean Varieties
            </button>
            <button
              onClick={() => {
                props.filterResultByCategory("coffee cups");
              }}
            >
              Coffee Cups
            </button>
            <button
              onClick={() => {
                props.filterResultByCategory("espresso machines");
              }}
            >
              Espresso Machines
            </button>
            <button
              onClick={() => {
                props.filterResultByCategory("fresh coffee");
              }}
            >
              Fresh Coffee
            </button>
            <button
              onClick={() => {
                props.filterResultByCategory("italian coffee");
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
              }}
            >
              Fresh
            </button>
            <button
              onClick={() => {
                props.filterResultByTag("aroma");
              }}
            >
              Aroma
            </button>
            <button
              onClick={() => {
                props.filterResultByTag("beans");
              }}
            >
              Beans
            </button>
            <button
              onClick={() => {
                props.filterResultByTag("cream");
              }}
            >
              Cream
            </button>
            <button
              onClick={() => {
                props.filterResultByTag("classic");
              }}
            >
              Classic
            </button>
            <button
              onClick={() => {
                props.filterResultByTag("accessories");
              }}
            >
              Accessories
            </button>
          </div>
          <img
            src="./images/shop-sidebar-img.jpeg"
            alt=""
            className="sidebar-img"
          />
        </div>
      </div>
    </>
  );
}

export default ShopSidebar;
