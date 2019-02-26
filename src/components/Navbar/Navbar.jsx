import React from "react";

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class AppNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false
    };
  }
  toggleCollapse = () => {
    this.setState({
      collapseOpen: !this.state.collapseOpen
    })
  }
  render() {
    return (
      <Navbar
        className="fixed-top navbar-transparent"
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              href="https://demos.creative-tim.com/blk-design-system/index.html"
              rel="noopener noreferrer"
              target="_blank"
              title="Designed and Coded by Creative Tim"
            >
              <span>BLK•</span>
              Design System
            </NavbarBrand>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            navbar
            isOpen={this.state.collapseOpen}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a>BLK•</a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://twitter.com/CreativeTim"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow us on Twitter"
                >
                  <i className="fab fa-twitter" />
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.facebook.com/CreativeTim"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Like us on Facebook"
                >
                  <i className="fab fa-facebook-square" />
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.instagram.com/CreativeTimOfficial"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow us on Instagram"
                >
                  <i className="fab fa-instagram" />
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="fa fa-cogs d-lg-none d-xl-none" />
                  Getting started
                </DropdownToggle>
                <DropdownMenu className="dropdown-with-icons">
                  <DropdownItem href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/tutorial">
                    <i className="tim-icons icon-paper" />
                    Documentation
                  </DropdownItem>
                  <DropdownItem href="examples/register-page.html">
                    <i className="tim-icons icon-bullet-list-67" />
                    Register Page
                  </DropdownItem>
                  <DropdownItem href="examples/landing-page.html">
                    <i className="tim-icons icon-image-02" />
                    Landing Page
                  </DropdownItem>
                  <DropdownItem href="examples/profile-page.html">
                    <i className="tim-icons icon-single-02" />
                    Profile Page
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Button
                  className="nav-link d-none d-lg-block"
                  color="default"
                  href="javascript:void(0)"
                  onClick="scrollToDownload()"
                >
                  <i className="tim-icons icon-cloud-download-93" />
                  Download
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default AppNavbar;
