/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

import "./IndexNavbar.css";

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99.88 ||
      document.body.scrollTop > 99.88
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container className="my-2 barNeedsWork">
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <span>Without• </span>
            Spot OR Blemish
          </NavbarBrand>

          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="/" onClick={(e) => e.preventDefault()}>
                  <span>Without• </span>
                  Spot OR Blemish
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar className="w-100">
            <div className="mx-auto d-flex align-content-lg-center justify-content-center text-center navClassNew">
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="/"
                  rel="noopener noreferrer"
                  // target="_blank"
                  title="Follow us on Twitter"
                >
                  {/* <i className="fab fa-twitter" /> */}
                  <p className="d-lg d-xl">Home</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="/about-us"
                  rel="noopener noreferrer"
                  // target="_blank"
                  title="Like us on Facebook"
                >
                  {/* <i className="fab fa-facebook-square" /> */}
                  <p className="d-lg d-xl">About </p>
                </NavLink>
              </NavItem>
              {/* <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="/giftcards"
                rel="noopener noreferrer"
                title="Follow us on Instagram"
              >
                <p className="d-lg d-xl">Gift</p>
              </NavLink>
            </NavItem> */}
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="/reviews"
                  rel="noopener noreferrer"
                  // target="_blank"
                  title="Follow us on Instagram"
                >
                  {/* <i className="fab fa-instagram" /> */}
                  <p className="d-lg d-xl">Reviews</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="/careers"
                  rel="noopener noreferrer"
                  // target="_blank"
                  title="Follow us on Instagram"
                >
                  {/* <i className="fab fa-instagram" /> */}
                  <p className="d-lg d-xl">Join Us</p>
                </NavLink>
              </NavItem>
            </div>
            <UncontrolledDropdown nav>
              {/* <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Services
              </DropdownToggle> */}
              {/* <DropdownMenu className="dropdown-with-icons">
                <DropdownItem href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/overview">
                  <i className="tim-icons icon-paper" />
                  Recurring Service
                </DropdownItem>
                <DropdownItem tag={Link} to="/register-page">
                  <i className="tim-icons icon-bullet-list-67" />
                  Deep Cleaning
                </DropdownItem>
                <DropdownItem tag={Link} to="/landing-page">
                  <i className="tim-icons icon-image-02" />
                  Move In/Move Out Cleaning
                </DropdownItem>
                <DropdownItem tag={Link} to="/profile-page">
                  <i className="tim-icons icon-single-02" />
                  Office Cleaning
                </DropdownItem>
              </DropdownMenu> */}
            </UncontrolledDropdown>
            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="primary"
                target="_blank"
                href="https://www.creative-tim.com/product/blk-design-system-pro-react?ref=bdsr-user-archive-index-navbar-upgrade-pro"
              >
                <i className="tim-icons icon-spaceship" /> Get A Quote
              </Button>
            </NavItem>
            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="default"
                onClick={scrollToDownload}
              >
                <i className="tim-icons icon-mobile" /> 1 &#40;800&#41;-842-7891
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
