import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useDarkMode } from "../context/DarkModeContext";
import DarkModeToggle from "./DarkModeToggle";
import { useCart } from "../context/CartContext";
import MyErrorBoundary from "./MyErrorBoundary";

function MyNavbar() {
  const { isDarkMode } = useDarkMode();
  const { cart } = useCart();

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <MyErrorBoundary>
        <Navbar
          className={`nabvar ${isDarkMode ? "navbar-dark" : "navbar-light"}`}
          style={{
            backgroundColor: isDarkMode ? "#05131f" : "#ffffff",
            position: "fixed",
            width: "100%",
            zIndex: 1000,
            top: 0,
          }}
          expand="lg">
          <Navbar.Brand as={Link} to="/">
            blueHike
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto always-visible">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                <div className="cart-indicator">({cartCount}) Cart</div>
              </Nav.Link>
              <Nav.Link as={Link} to="/dashboard">
                Dashboard
              </Nav.Link>
              <NavDropdown title=" Account" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/signin">
                  Login
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/signup">
                  Signup
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="toggle-icon">
              <DarkModeToggle />
            </div>
          </Navbar.Collapse>
        </Navbar>
      </MyErrorBoundary>
    </div>
  );
}

export default MyNavbar;
