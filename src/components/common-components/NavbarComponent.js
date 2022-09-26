import React from "react";
import { NavLink } from "react-router-dom";
import { CartState } from "../../context/Context";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from 'react-bootstrap/Badge';
import { BsCart3 } from "react-icons/bs";

function NavbarComponent() {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <div>
      <Navbar bg={"transparent"} variant={"dark"} expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <NavLink to="/">
              <img
                src='/images/brand-logo.png'
                width="120"
                height="60"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className="navbar-link">
                Home
              </NavLink>
              <NavLink to="/about" className="navbar-link">
                About Us
              </NavLink>
              <NavLink to="/menu" className="navbar-link">
                Menu
              </NavLink>
              <NavLink to="/contact" className="navbar-link">
                Contact
              </NavLink>
              <NavLink to="/shop" className="navbar-link">
                Shop
              </NavLink>
              <NavLink to="/cart">
                <BsCart3 className='navlink-cart' />
                <Badge>{cart.length}</Badge>
              </NavLink>
              <NavLink to="/a">
                A
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
