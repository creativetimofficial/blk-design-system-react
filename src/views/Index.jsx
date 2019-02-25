import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";

// reactstrap components
import {
  Alert,
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader
} from "reactstrap";

// core components
import AppNavbar from "components/Navbar/Navbar.jsx";
import Footer from "components/Footer/Footer.jsx";

class Index extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <>
        <AppNavbar />
        <div className=" wrapper">
          <div className=" page-header header-filter">
            <div className=" squares square1" />
            <div className=" squares square2" />
            <div className=" squares square3" />
            <div className=" squares square4" />
            <div className=" squares square5" />
            <div className=" squares square6" />
            <div className=" squares square7" />
            <Container>
              <div className=" content-center brand">
                <h1 className=" h1-seo">BLK•</h1>
                <h3>
                  A beautiful Design System for Bootstrap 4. It's Free and Open
                  Source.
                </h3>
              </div>
            </Container>
          </div>
          <div className=" main">
            <div className=" section section-basic" id="basic-elements">
              <img
                alt="..."
                className=" path"
                src={require("assets/img/path1.png")}
              />
              <Container>
                <h2 className=" title">Basic Elements</h2>
                <h3>Buttons</h3>
                <p className=" category">Pick your style</p>
                <Row>
                  <Col md="10">
                    <Button color="primary" type="button">
                      Default
                    </Button>
                    <Button
                      className=" btn-round"
                      color="primary"
                      type="button"
                    >
                      Round
                    </Button>
                    <Button
                      className=" btn-round"
                      color="primary"
                      type="button"
                    >
                      <i className=" tim-icons icon-heart-2" />
                      With Icon
                    </Button>
                    <Button
                      className=" btn-icon btn-round"
                      color="primary"
                      type="button"
                    >
                      <i className=" tim-icons icon-heart-2" />
                    </Button>
                    <Button
                      className=" btn-simple btn-round"
                      color="primary"
                      type="button"
                    >
                      Simple
                    </Button>
                  </Col>
                </Row>
                <p className=" category">Pick your size</p>
                <Row>
                  <Col md="10">
                    <Button color="primary" size="sm">
                      Small
                    </Button>
                    <Button color="primary">Regular</Button>
                    <Button color="primary" size="lg">
                      Large
                    </Button>
                  </Col>
                </Row>
                <p className=" category">Pick your color</p>
                <Row>
                  <Col md="12">
                    <Button color="default">Default</Button>
                    <Button color="primary">Primary</Button>
                    <Button color="info">Info</Button>
                    <Button color="success">Success</Button>
                    <Button color="warning">Warning</Button>
                    <Button color="danger">Danger</Button>
                    <Button className=" btn-neutral" color="default">
                      Neutral
                    </Button>
                  </Col>
                </Row>
                <br />
                <h3>Links</h3>
                <Row>
                  <Col md="8">
                    <Button color="link">Default</Button>
                    <Button className=" btn-link" color="primary">
                      Primary
                    </Button>
                    <Button className=" btn-link" color="info">
                      Info
                    </Button>
                    <Button className=" btn-link" color="success">
                      Success
                    </Button>
                    <Button className=" btn-link" color="warning">
                      Warning
                    </Button>
                    <Button className=" btn-link" color="danger">
                      Danger
                    </Button>
                  </Col>
                </Row>
                <div className=" space-70" />
                <div id="inputs">
                  <h3>Inputs</h3>
                  <p className=" category">Form Controls</p>
                  <Row>
                    <Col lg="3" sm="6">
                      <FormGroup>
                        <Input
                          defaultValue=""
                          placeholder="Regular"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="3" sm="6">
                      <FormGroup className=" has-success">
                        <Input
                          className=" form-control-success"
                          defaultValue="Success"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="3" sm="6">
                      <FormGroup className=" has-danger">
                        <Input
                          className=" form-control-danger"
                          defaultValue="Error Input"
                          type="email"
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="3" sm="6">
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className=" fa fa-user" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Left Font Awesome Icon"
                          type="text"
                        />
                      </InputGroup>
                    </Col>
                    <Col lg="3" sm="6">
                      <InputGroup>
                        <Input placeholder="Right Nucleo Icon" type="text" />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                            <i className=" tim-icons icon-lock-circle" />
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </Row>
                </div>
                <div className=" space-70" />
                <Row id="checkRadios">
                  <Col lg="3" sm="6">
                    <p className=" category">Checkboxes</p>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" />
                        <span className=" form-check-sign" />
                        Unchecked
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input defaultChecked type="checkbox" />
                        <span className=" form-check-sign" />
                        Checked
                      </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                      <Label check>
                        <Input disabled type="checkbox" />
                        <span className=" form-check-sign" />
                        Disabled Unchecked
                      </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                      <Label check>
                        <Input defaultChecked disabled type="checkbox" />
                        <span className=" form-check-sign" />
                        Disabled Checked
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col lg="3" sm="6">
                    <p className=" category">Radios</p>
                    <FormGroup check className=" form-check-radio">
                      <Label check>
                        <Input
                          defaultValue="option1"
                          id="exampleRadios1"
                          name="exampleRadios"
                          type="radio"
                        />
                        <span className=" form-check-sign" />
                        Radio is off
                      </Label>
                    </FormGroup>
                    <FormGroup check className=" form-check-radio">
                      <Label check>
                        <Input
                          defaultChecked
                          defaultValue="option2"
                          id="exampleRadios1"
                          name="exampleRadios"
                          type="radio"
                        />
                        <span className=" form-check-sign" />
                        Radio is on
                      </Label>
                    </FormGroup>
                    <FormGroup check className=" form-check-radio" disabled>
                      <Label check>
                        <Input
                          defaultValue="option3"
                          disabled
                          id="exampleRadios2"
                          name="exampleRadios1"
                          type="radio"
                        />
                        <span className=" form-check-sign" />
                        Disabled radio is off
                      </Label>
                    </FormGroup>
                    <FormGroup check className=" form-check-radio" disabled>
                      <Label check>
                        <Input
                          defaultChecked
                          defaultValue="option4"
                          disabled
                          id="exampleRadios2"
                          name="exampleRadios1"
                          type="radio"
                        />
                        <span className=" form-check-sign" />
                        Disabled radio is on
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col lg="3" sm="6">
                    <p className=" category">Toggle Buttons</p>
                    <Switch offColor="" offText="" onColor="" onText="" />
                    <br />
                    <Switch defaultValue={false} offColor="" onColor="" />
                  </Col>
                  <Col lg="3" sm="6">
                    <p className=" category">Sliders</p>
                    <div className=" slider" id="sliderRegular" />
                    <br />
                    <div className=" slider slider-primary" id="sliderDouble" />
                  </Col>
                </Row>
              </Container>
            </div>
            <div className=" section section-navbars">
              <img
                alt="..."
                className=" path"
                src={require("assets/img/path3.png")}
              />
              <Container id="menu-dropdown">
                <Row>
                  <Col md="6">
                    <h4>Menu</h4>
                    <Navbar className=" bg-primary" expand="lg">
                      <Container>
                        <NavbarBrand
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Menu
                        </NavbarBrand>
                        <button
                          aria-controls="navbarSupportedContent"
                          aria-expanded={false}
                          aria-label="Toggle navigation"
                          className=" navbar-toggler"
                          data-target="#example-navbar"
                          data-toggle="collapse"
                          id="example-navbar"
                          type="button"
                        >
                          <span className=" navbar-toggler-bar bar1" />
                          <span className=" navbar-toggler-bar bar2" />
                          <span className=" navbar-toggler-bar bar3" />
                        </button>
                        <UncontrolledCollapse
                          id="example-navbar"
                          navbar
                          toggler="#example-navbar"
                        >
                          <Nav navbar>
                            <NavItem className=" active">
                              <NavLink
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <p>Link</p>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <p>Link</p>
                              </NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav>
                              <DropdownToggle
                                aria-expanded={false}
                                aria-haspopup={true}
                                caret
                                color="default"
                                data-toggle="dropdown"
                                href="http://example.com"
                                id="navbarDropdownMenuLink"
                                nav
                              >
                                <p>Dropdown</p>
                              </DropdownToggle>
                              <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                                <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Action
                                </DropdownItem>
                                <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Another action
                                </DropdownItem>
                                <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Something else here
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </Nav>
                        </UncontrolledCollapse>
                      </Container>
                    </Navbar>
                  </Col>
                  <Col md="6">
                    <h4>Menu with Icons</h4>
                    <Navbar className=" bg-info" expand="lg">
                      <Container>
                        <NavbarBrand
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Icons
                        </NavbarBrand>
                        <button
                          aria-controls="navbarSupportedContent"
                          aria-expanded={false}
                          aria-label="Toggle navigation"
                          className=" navbar-toggler"
                          data-target="#example-navbar-icons"
                          data-toggle="collapse"
                          id="example-navbar-icons"
                          type="button"
                        >
                          <span className=" navbar-toggler-bar bar1" />
                          <span className=" navbar-toggler-bar bar2" />
                          <span className=" navbar-toggler-bar bar3" />
                        </button>
                        <UncontrolledCollapse
                          id="example-navbar-icons"
                          navbar
                          toggler="#example-navbar-icons"
                        >
                          <Nav className=" ml-auto" navbar>
                            <NavItem>
                              <NavLink
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <i
                                  aria-hidden={true}
                                  className=" tim-icons icon-send"
                                />
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <i
                                  aria-hidden={true}
                                  className=" tim-icons icon-single-02"
                                />
                              </NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav>
                              <DropdownToggle
                                caret
                                color="default"
                                data-toggle="dropdown"
                                href="#pablo"
                                id="navbarDropdownMenuLink"
                                nav
                                onClick={e => e.preventDefault()}
                              >
                                <i
                                  aria-hidden={true}
                                  className=" tim-icons icon-settings-gear-63"
                                />
                              </DropdownToggle>
                              <DropdownMenu
                                aria-labelledby="navbarDropdownMenuLink"
                                right
                              >
                                <DropdownItem header>
                                  Dropdown header
                                </DropdownItem>
                                <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Action
                                </DropdownItem>
                                <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Another action
                                </DropdownItem>
                                <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Something else here
                                </DropdownItem>
                                <div className=" divider" />
                                <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Separated link
                                </DropdownItem>
                                <div className=" divider" />
                                <DropdownItem
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  One more separated link
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </Nav>
                        </UncontrolledCollapse>
                      </Container>
                    </Navbar>
                  </Col>
                </Row>
                <h3 className=" title mb-3">Navigation</h3>
              </Container>
              <div id="navbar">
                <div className=" navigation-example">
                  {/* Navbar Primary */}
                  <Navbar className=" bg-primary" expand="lg">
                    <Container>
                      <div className=" navbar-translate">
                        <NavbarBrand
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Primary color
                        </NavbarBrand>
                        <button
                          aria-controls="navbarSupportedContent"
                          aria-expanded={false}
                          aria-label="Toggle navigation"
                          className=" navbar-toggler"
                          data-target="#example-navbar-primary"
                          data-toggle="collapse"
                          id="example-navbar-primary"
                          type="button"
                        >
                          <span className=" navbar-toggler-bar bar1" />
                          <span className=" navbar-toggler-bar bar2" />
                          <span className=" navbar-toggler-bar bar3" />
                        </button>
                      </div>
                      <UncontrolledCollapse
                        id="example-navbar-primary"
                        navbar
                        toggler="#example-navbar-primary"
                      >
                        <Nav className=" ml-auto" navbar>
                          <NavItem className=" active">
                            <NavLink
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className=" tim-icons icon-world" />
                              Discover
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className=" tim-icons icon-single-02" />
                              Profile
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className=" tim-icons icon-settings-gear-63" />
                              Settings
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </UncontrolledCollapse>
                    </Container>
                  </Navbar>
                  {/* End Navbar Primary */}
                  {/* Navbar Info */}
                  <Navbar className=" bg-info" expand="lg">
                    <Container>
                      <div className=" navbar-translate">
                        <NavbarBrand
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Info Color
                        </NavbarBrand>
                        <button
                          aria-controls="navbarSupportedContent"
                          aria-expanded={false}
                          aria-label="Toggle navigation"
                          className=" navbar-toggler"
                          data-target="#example-navbar-info"
                          data-toggle="collapse"
                          id="example-navbar-info"
                          type="button"
                        >
                          <span className=" navbar-toggler-bar bar1" />
                          <span className=" navbar-toggler-bar bar2" />
                          <span className=" navbar-toggler-bar bar3" />
                        </button>
                      </div>
                      <UncontrolledCollapse
                        id="example-navbar-info"
                        navbar
                        toggler="#example-navbar-info"
                      >
                        <Nav className=" ml-auto" navbar>
                          <NavItem className=" active">
                            <NavLink
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Discover
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Profile
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Settings
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </UncontrolledCollapse>
                    </Container>
                  </Navbar>
                  {/* End Navbar Info */}
                  {/* Navbar Success */}
                  <Navbar className=" bg-success" expand="lg">
                    <Container>
                      <div className=" navbar-translate">
                        <NavbarBrand
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Success Color
                        </NavbarBrand>
                        <button
                          aria-controls="navbarSupportedContent"
                          aria-expanded={false}
                          aria-label="Toggle navigation"
                          className=" navbar-toggler"
                          data-target="#example-navbar-success"
                          data-toggle="collapse"
                          id="example-navbar-success"
                          type="button"
                        >
                          <span className=" navbar-toggler-bar bar1" />
                          <span className=" navbar-toggler-bar bar2" />
                          <span className=" navbar-toggler-bar bar3" />
                        </button>
                      </div>
                      <UncontrolledCollapse
                        id="example-navbar-success"
                        navbar
                        toggler="#example-navbar-success"
                      >
                        <Nav className=" ml-auto" navbar>
                          <NavItem className=" active">
                            <NavLink
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className=" tim-icons icon-world" />
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className=" tim-icons icon-single-02" />
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className=" tim-icons icon-settings-gear-63" />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </UncontrolledCollapse>
                    </Container>
                  </Navbar>
                  {/* End Navbar Success */}
                  {/* Navbar Warning */}
                  <Navbar className=" bg-warning" expand="lg">
                    <Container>
                      <div className=" navbar-translate">
                        <NavbarBrand
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Warning Color
                        </NavbarBrand>
                        <button
                          aria-controls="navbarSupportedContent"
                          aria-expanded={false}
                          aria-label="Toggle navigation"
                          className=" navbar-toggler"
                          data-target="#example-navbar-warning"
                          data-toggle="collapse"
                          id="example-navbar-warning"
                          type="button"
                        >
                          <span className=" navbar-toggler-bar bar1" />
                          <span className=" navbar-toggler-bar bar2" />
                          <span className=" navbar-toggler-bar bar3" />
                        </button>
                      </div>
                      <UncontrolledCollapse
                        id="example-navbar-warning"
                        navbar
                        toggler="#example-navbar-warning"
                      >
                        <Nav className=" ml-auto" navbar>
                          <NavItem>
                            <NavLink
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className=" fab fa-facebook-square" />
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className=" fab fa-twitter" />
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className=" fab fa-google-plus" />
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className=" fab fa-instagram" />
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </UncontrolledCollapse>
                    </Container>
                  </Navbar>
                  {/* End Navbar Warning */}
                  {/* Navbar Danger */}
                  <Navbar className=" bg-danger" expand="lg">
                    <Container>
                      <div className=" navbar-translate">
                        <NavbarBrand
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Danger Color
                        </NavbarBrand>
                        <button
                          aria-controls="navbarSupportedContent"
                          aria-expanded={false}
                          aria-label="Toggle navigation"
                          className=" navbar-toggler"
                          data-target="#example-navbar-danger"
                          data-toggle="collapse"
                          id="example-navbar-danger"
                          type="button"
                        >
                          <span className=" navbar-toggler-bar bar1" />
                          <span className=" navbar-toggler-bar bar2" />
                          <span className=" navbar-toggler-bar bar3" />
                        </button>
                      </div>
                      <UncontrolledCollapse
                        id="example-navbar-danger"
                        navbar
                        toggler="#example-navbar-danger"
                      >
                        <Nav className=" ml-auto" navbar>
                          <NavItem>
                            <NavLink
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className=" fab fa-facebook-square" />
                              Share
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className=" fab fa-twitter" />
                              Tweet
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className=" fab fa-pinterest" />
                              Pin
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </UncontrolledCollapse>
                    </Container>
                  </Navbar>
                  {/* End Navbar Danger */}
                  {/* Navbar Transparent */}
                  <Navbar className=" navbar-transparent" expand="lg">
                    <Container>
                      <div className=" navbar-translate">
                        <NavbarBrand
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Transparent
                        </NavbarBrand>
                        <button
                          aria-controls="navbarSupportedContent"
                          aria-expanded={false}
                          aria-label="Toggle navigation"
                          className=" navbar-toggler"
                          data-target="#example-navbar-transparent"
                          data-toggle="collapse"
                          id="example-navbar-transparent"
                          type="button"
                        >
                          <span className=" navbar-toggler-bar bar1" />
                          <span className=" navbar-toggler-bar bar2" />
                          <span className=" navbar-toggler-bar bar3" />
                        </button>
                      </div>
                      <UncontrolledCollapse
                        id="example-navbar-transparent"
                        navbar
                        toggler="#example-navbar-transparent"
                      >
                        <Nav className=" ml-auto" navbar>
                          <NavItem>
                            <NavLink
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className=" fab fa-facebook-square" />
                              Facebook
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className=" fab fa-twitter" />
                              Twitter
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className=" fab fa-instagram" />
                              Instagram
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </UncontrolledCollapse>
                    </Container>
                  </Navbar>
                  {/* End Navbar Transparent*/}
                </div>
              </div>
            </div>
            {/* End .section-navbars */}
            <div className=" section section-tabs">
              <Container>
                <div className=" title">
                  <h3 className=" mb-3">Navigation Tabs</h3>
                </div>
                <Row>
                  <Col className=" ml-auto mr-auto" md="10" xl="6">
                    <div className=" mb-3">
                      <small className=" text-uppercase font-weight-bold">
                        With icons
                      </small>
                    </div>
                    {/* Nav tabs */}
                    <Card>
                      <CardHeader>
                        <Nav className=" nav-tabs-primary" role="tablist" tabs>
                          <NavItem>
                            <NavLink
                              className=" active"
                              data-toggle="tab"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                              role="tablist"
                            >
                              <i className=" tim-icons icon-spaceship" />
                              Profile
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              data-toggle="tab"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                              role="tablist"
                            >
                              <i className=" tim-icons icon-settings-gear-63" />
                              Settings
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              data-toggle="tab"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                              role="tablist"
                            >
                              <i className=" tim-icons icon-bag-16" />
                              Options
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </CardHeader>
                      <CardBody>
                        {/* Tab panes */}
                        <TabContent className=" tab-space">
                          <TabPane className=" active" id="link1">
                            <p>
                              Collaboratively administrate empowered markets via
                              plug-and-play networks. Dynamically procrastinate
                              B2C users after installed base benefits. <br />
                              <br />
                              Dramatically visualize customer directed
                              convergence without revolutionary ROI.
                            </p>
                          </TabPane>
                          <TabPane id="link2">
                            <p>
                              Completely synergize resource taxing relationships
                              via premier niche markets. Professionally
                              cultivate one-to-one customer service with robust
                              ideas. <br />
                              <br />
                              Dynamically innovate resource-leveling customer
                              service for state of the art customer service.
                            </p>
                          </TabPane>
                          <TabPane id="link3">
                            <p>
                              Efficiently unleash cross-media information
                              without cross-media value. Quickly maximize timely
                              deliverables for real-time schemas. <br />
                              <br />
                              Dramatically maintain clicks-and-mortar solutions
                              without functional solutions.
                            </p>
                          </TabPane>
                        </TabContent>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className=" ml-auto mr-auto" md="10" xl="6">
                    <div className=" mb-3">
                      <small className=" text-uppercase font-weight-bold">
                        With text
                      </small>
                    </div>
                    {/* Tabs with Background on Card */}
                    <Card>
                      <CardHeader>
                        <Nav className=" nav-tabs-primary" role="tablist" tabs>
                          <NavItem>
                            <NavLink
                              className=" active"
                              data-toggle="tab"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                              role="tablist"
                            >
                              Profile
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              data-toggle="tab"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                              role="tablist"
                            >
                              Settings
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              data-toggle="tab"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                              role="tablist"
                            >
                              Options
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </CardHeader>
                      <CardBody>
                        {/* Tab panes */}
                        <TabContent className=" tab-space">
                          <TabPane className=" active" id="link4">
                            <p>
                              These cases are perfectly simple and easy to
                              distinguish. In a free hour, when our power of
                              choice is untrammelled and when nothing prevents
                              our being able to do what we like best, every
                              pleasure is to be welcomed and every pain avoided.{" "}
                              <br />
                              But in certain circumstances and owing to the
                              claims of duty or the obligations of business it
                              will frequently occur that pleasures
                            </p>
                          </TabPane>
                          <TabPane id="link5">
                            <p>
                              I will be the leader of a company that ends up
                              being worth billions of dollars, because I got the
                              answers. I understand culture. I am the nucleus. I
                              think that’s a responsibility that I have, to push
                              possibilities, to show people, this is the level
                              that things could be at. I think that’s a
                              responsibility that I have, to push possibilities,
                              to show people, this is the level that things
                              could be at.
                            </p>
                          </TabPane>
                          <TabPane id="link6">
                            <p>
                              I think that’s a responsibility that I have, to
                              push possibilities, to show people, this is the
                              level that things could be at. So when you get
                              something that has the name Kanye West on it, it’s
                              supposed to be pushing the furthest possibilities.
                              I will be the leader of a company that ends up
                              being worth billions of dollars, because I got the
                              answers. I understand culture. I am the nucleus.
                            </p>
                          </TabPane>
                        </TabContent>
                      </CardBody>
                    </Card>
                    {/* End Tabs on plain Card */}
                  </Col>
                </Row>
              </Container>
            </div>
            {/* End Section Tabs */}
            <div className=" section section-pagination">
              <img
                alt="..."
                className=" path"
                src={require("assets/img/path4.png")}
              />
              <img
                alt="..."
                className=" path path1"
                src={require("assets/img/path5.png")}
              />
              <Container>
                <Row>
                  <Col md="6">
                    <h3 className=" mb-4">Progress Bars</h3>
                    <div className=" progress-container">
                      <span className=" progress-badge">Default</span>
                      <Progress max="100" value="60">
                        <span className=" progress-value">25%</span>
                      </Progress>
                    </div>
                    <div className=" progress-container progress-primary">
                      <span className=" progress-badge">Primary</span>
                      <Progress max="100" value="60">
                        <span className=" progress-value">60%</span>
                      </Progress>
                    </div>
                    <br />
                    <h3 className=" mb-5">Navigation Pills</h3>
                    <Nav className=" nav-pills-primary nav-pills-icons" pills>
                      <NavItem>
                        <NavLink
                          className=" active show"
                          data-toggle="tab"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className=" tim-icons icon-atom" />
                          Home
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          data-toggle="tab"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className=" tim-icons icon-chat-33" />
                          Messages
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          data-toggle="tab"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className=" tim-icons icon-settings-gear-63" />
                          Settings
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col md="6">
                    <h3 className=" mb-5">Pagination</h3>
                    <Pagination
                      className="pagination pagination-primary"
                      listClassName=" pagination-primary"
                    >
                      <PaginationItem className=" active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          4
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          5
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                    <Pagination>
                      <PaginationItem>
                        <PaginationLink
                          aria-label="Previous"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <span aria-hidden={true}>
                            <i
                              aria-hidden={true}
                              className=" tim-icons icon-double-left"
                            />
                          </span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className=" active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          aria-label="Next"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <span aria-hidden={true}>
                            <i
                              aria-hidden={true}
                              className=" tim-icons icon-double-right"
                            />
                          </span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                    <br />
                    <h3 className=" mb-5">Labels</h3>
                    <Badge className=" badge-default">Default</Badge>
                    <Badge color="primary">Primary</Badge>
                    <Badge color="success">Success</Badge>
                    <Badge color="info">Info</Badge>
                    <Badge color="warning">Warning</Badge>
                    <Badge color="danger">Danger</Badge>
                    <Badge className=" badge-neutral">Neutral</Badge>
                  </Col>
                </Row>
                <br />
              </Container>
            </div>
            <div className=" section section-notifications" id="notifications">
              <Container>
                <div className=" space" />
                <h3>Notifications</h3>
                <Alert className=" alert-with-icon" color="primary">
                  <span className=" tim-icons icon-coins" />
                  <span>
                    <b>Congrats! -</b>
                    This is a regular notification made with ".alert-primary"
                  </span>
                </Alert>
                <Alert className=" alert-with-icon" color="info">
                  <span className=" tim-icons icon-trophy" />
                  <span>
                    <b>Heads up! -</b>
                    This is a regular notification made with ".alert-info"
                  </span>
                </Alert>
                <Alert className=" alert-with-icon" color="success">
                  <span className=" tim-icons icon-bell-55" />
                  <span>
                    <b>Well done! -</b>
                    This is a regular notification made with ".alert-success"
                  </span>
                </Alert>
                <Alert className=" alert-with-icon" color="warning">
                  <span className=" tim-icons icon-bulb-63" />
                  <span>
                    <b>Warning! -</b>
                    This is a regular notification made with ".alert-warning"
                  </span>
                </Alert>
                <Alert className=" alert-with-icon" color="danger">
                  <span className=" tim-icons icon-support-17" />
                  <span>
                    <b>Oh snap! -</b>
                    This is a regular notification made with ".alert-danger"
                  </span>
                </Alert>
              </Container>
            </div>
            {/* end notifications */}
            {/* Typography */}
            <div className=" section section-typo">
              <img
                alt="..."
                className=" path"
                src={require("assets/img/path1.png")}
              />
              <img
                alt="..."
                className=" path path1"
                src={require("assets/img/path3.png")}
              />
              <Container>
                <h3 className=" title">Typography</h3>
                <div id="typography">
                  <Row>
                    <Col md="12">
                      <div className=" typography-line">
                        <h1>
                          <span>Header 1</span>
                          The Life of BLK• Design System
                        </h1>
                      </div>
                      <div className=" typography-line">
                        <h2>
                          <span>Header 2</span>
                          The Life of BLK• Design System
                        </h2>
                      </div>
                      <div className=" typography-line">
                        <h3>
                          <span>Header 3</span>
                          The Life of BLK• Design System
                        </h3>
                      </div>
                      <div className=" typography-line">
                        <h4>
                          <span>Header 4</span>
                          The Life of BLK• Design System
                        </h4>
                      </div>
                      <div className=" typography-line">
                        <h5>
                          <span>Header 5</span>
                          The Life of BLK• Design System
                        </h5>
                      </div>
                      <div className=" typography-line">
                        <h6>
                          <span>Header 6</span>
                          The Life of BLK• Design System
                        </h6>
                      </div>
                      <div className=" typography-line">
                        <p>
                          <span>Paragraph</span>I will be the leader of a
                          company that ends up being worth billions of dollars,
                          because I got the answers. I understand culture. I am
                          the nucleus. I think that’s a responsibility that I
                          have, to push possibilities, to show people, this is
                          the level that things could be at.
                        </p>
                      </div>
                      <div className=" typography-line">
                        <span>Quote</span>
                        <blockquote>
                          <p className=" blockquote blockquote-primary">
                            "I will be the leader of a company that ends up
                            being worth billions of dollars, because I got the
                            answers. I understand culture. I am the nucleus. I
                            think that’s a responsibility that I have, to push
                            possibilities, to show people, this is the level
                            that things could be at." <br />
                            <br />
                            <small>- Noaa</small>
                          </p>
                        </blockquote>
                      </div>
                      <div className=" typography-line">
                        <span>Muted Text</span>
                        <p className=" text-muted">
                          I will be the leader of a company that ends up being
                          worth billions of dollars, because I got the
                          answers...
                        </p>
                      </div>
                      <div className=" typography-line">
                        <span>Primary Text</span>
                        <p className=" text-primary">
                          I will be the leader of a company that ends up being
                          worth billions of dollars, because I got the
                          answers...
                        </p>
                      </div>
                      <div className=" typography-line">
                        <span>Info Text</span>
                        <p className=" text-info">
                          I will be the leader of a company that ends up being
                          worth billions of dollars, because I got the
                          answers...
                        </p>
                      </div>
                      <div className=" typography-line">
                        <span>Success Text</span>
                        <p className=" text-success">
                          I will be the leader of a company that ends up being
                          worth billions of dollars, because I got the
                          answers...
                        </p>
                      </div>
                      <div className=" typography-line">
                        <span>Warning Text</span>
                        <p className=" text-warning">
                          I will be the leader of a company that ends up being
                          worth billions of dollars, because I got the
                          answers...
                        </p>
                      </div>
                      <div className=" typography-line">
                        <span>Danger Text</span>
                        <p className=" text-danger">
                          I will be the leader of a company that ends up being
                          worth billions of dollars, because I got the
                          answers...
                        </p>
                      </div>
                      <div className=" typography-line">
                        <h2>
                          <span>Small Tag</span>
                          Header with small subtitle <br />
                          <small>Use "small" tag for the headers</small>
                        </h2>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className=" space-50" />
                <div id="images">
                  <h3 className=" mb-5">Images</h3>
                  <Row>
                    <Col sm="3" xs="6">
                      <small className=" d-block text-uppercase font-weight-bold mb-4">
                        Image
                      </small>
                      <img
                        alt="..."
                        className=" img-fluid rounded shadow"
                        src={require("assets/img/ryan.jpg")}
                        style={{ width: "150px" }}
                      />
                    </Col>
                    <Col sm="3" xs="6">
                      <small className=" d-block text-uppercase font-weight-bold mb-4">
                        Circle Image
                      </small>
                      <img
                        alt="..."
                        className=" img-fluid rounded-circle shadow"
                        src={require("assets/img/james.jpg")}
                        style={{ width: "150px" }}
                      />
                    </Col>
                    <Col className=" mt-5 mt-sm-0" sm="3" xs="6">
                      <small className=" d-block text-uppercase font-weight-bold mb-4">
                        Raised
                      </small>
                      <img
                        alt="..."
                        className=" img-fluid rounded shadow-lg"
                        src={require("assets/img/lora.jpg")}
                        style={{ width: "150px" }}
                      />
                    </Col>
                    <Col className=" mt-5 mt-sm-0" sm="3" xs="6">
                      <small className=" d-block text-uppercase font-weight-bold mb-4">
                        Circle Raised
                      </small>
                      <img
                        alt="..."
                        className=" img-fluid rounded-circle shadow-lg"
                        src={require("assets/img/mike.jpg")}
                        style={{ width: "150px" }}
                      />
                    </Col>
                  </Row>
                </div>
              </Container>
            </div>
            <div
              className=" section section-javascript"
              id="javascriptComponents"
            >
              <img
                alt="..."
                className=" path"
                src={require("assets/img/path5.png")}
              />
              <img
                alt="..."
                className=" path path1"
                src={require("assets/img/path5.png")}
              />
              <Container>
                <h3 className=" title mb-5">Javascript components</h3>
                <h4 className=" mb-5">Modal</h4>
                <Row id="modals">
                  <Col md="4">
                    <Button
                      color="primary"
                      data-target="#myModal"
                      data-toggle="modal"
                    >
                      Launch Modal
                    </Button>
                  </Col>
                  <Col md="4">
                    <Button
                      color="warning"
                      data-target="#myModal1"
                      data-toggle="modal"
                    >
                      Launch Modal Mini
                    </Button>
                  </Col>
                  <Col md="4">
                    <Button
                      color="success"
                      data-target="#myModal2"
                      data-toggle="modal"
                    >
                      Launch Modal Form
                    </Button>
                  </Col>
                </Row>
                <br />
                <br />
                <h4 className=" mb-5 mt-3">Datepicker</h4>
                <Row>
                  <Col md="4">
                    <div className=" datepicker-container">
                      <FormGroup>
                        <ReactDatetime
                          inputProps={{
                            className: "form-control",
                            placeholder: "Date Picker Here"
                          }}
                          timeFormat={false}
                        />
                      </FormGroup>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <h4 className=" mb-5 mt-3">Popovers</h4>
                    <Button
                      color="default"
                      data-container="body"
                      data-content="Here will be some very useful information about his popover."
                      data-placement="top"
                      id="tooltip657685043"
                      size="sm"
                      type="button"
                    >
                      On top
                    </Button>
                    <UncontrolledPopover
                      placement="top"
                      target="tooltip657685043"
                    >
                      <PopoverHeader>Popover on Top</PopoverHeader>
                      <PopoverBody>
                        Here will be some very useful information about his
                        popover.
                      </PopoverBody>
                    </UncontrolledPopover>
                    <Button
                      color="default"
                      data-container="body"
                      data-content="Here will be some very useful information about his popover.<br>
 Here will be some very useful information about his popover."
                      data-placement="right"
                      id="tooltip72798464"
                      size="sm"
                      type="button"
                    >
                      On right
                    </Button>
                    <UncontrolledPopover
                      placement="right"
                      target="tooltip72798464"
                    >
                      <PopoverHeader>Popover on Right</PopoverHeader>
                      <PopoverBody>
                        Here will be some very useful information about his
                        popover.
                        <br /> Here will be some very useful information about
                        his popover.
                      </PopoverBody>
                    </UncontrolledPopover>
                    <Button
                      color="default"
                      data-container="body"
                      data-content="Here will be some very useful information about his popover."
                      data-placement="bottom"
                      id="tooltip995717467"
                      size="sm"
                      type="button"
                    >
                      On bottom
                    </Button>
                    <UncontrolledPopover
                      placement="bottom"
                      target="tooltip995717467"
                    >
                      <PopoverHeader>Popover on Bottom</PopoverHeader>
                      <PopoverBody>
                        Here will be some very useful information about his
                        popover.
                      </PopoverBody>
                    </UncontrolledPopover>
                    <Button
                      color="default"
                      data-color="primary"
                      data-container="body"
                      data-content="Here will be some very useful information about his popover."
                      data-placement="left"
                      id="tooltip31162359"
                      size="sm"
                      type="button"
                    >
                      On left
                    </Button>
                    <UncontrolledPopover
                      placement="left"
                      target="tooltip31162359"
                    >
                      <PopoverHeader>Popover On Left</PopoverHeader>
                      <PopoverBody>
                        Here will be some very useful information about his
                        popover.
                      </PopoverBody>
                    </UncontrolledPopover>
                  </Col>
                  <Col md="6">
                    <h4 className=" mb-5 mt-3">Tooltips</h4>
                    <Button
                      className=" btn-tooltip"
                      color="default"
                      data-animation={true}
                      data-container="body"
                      data-delay="100"
                      data-placement="left"
                      id="tooltip376048342"
                      size="sm"
                      title="Tooltip on left"
                      type="button"
                    >
                      On left
                    </Button>
                    <UncontrolledTooltip
                      delay={0}
                      placement="left"
                      target="tooltip376048342"
                    />
                    <Button
                      className=" btn-tooltip"
                      color="default"
                      data-animation={true}
                      data-container="body"
                      data-placement="top"
                      id="tooltip297889956"
                      size="sm"
                      title="Tooltip on top"
                      type="button"
                    >
                      On top
                    </Button>
                    <UncontrolledTooltip
                      delay={0}
                      placement="top"
                      target="tooltip297889956"
                    />
                    <Button
                      className=" btn-tooltip"
                      color="default"
                      data-animation={true}
                      data-container="body"
                      data-placement="bottom"
                      id="tooltip789511871"
                      size="sm"
                      title="Tooltip on bottom"
                      type="button"
                    >
                      On bottom
                    </Button>
                    <UncontrolledTooltip
                      delay={0}
                      placement="bottom"
                      target="tooltip789511871"
                    />
                    <Button
                      className=" btn-tooltip"
                      color="default"
                      data-animation={true}
                      data-container="body"
                      data-placement="right"
                      id="tooltip353488548"
                      size="sm"
                      title="Tooltip on right"
                      type="button"
                    >
                      On right
                    </Button>
                    <UncontrolledTooltip
                      delay={0}
                      placement="right"
                      target="tooltip353488548"
                    />
                    <div className=" clearfix" />
                    <br />
                    <br />
                  </Col>
                </Row>
              </Container>
              <div className=" section">
                <Container>
                  <div className=" title">
                    <h3>Carousel</h3>
                  </div>
                  <Row className=" justify-content-between align-items-center">
                    <Col className=" mb-5 mb-lg-0" lg="5">
                      <h1 className=" text-white font-weight-light">
                        Bootstrap carousel
                      </h1>
                      <p className=" text-white mt-4">
                        Black Design comes with three pre-built pages to help
                        you get started faster. You can change the text and
                        images and you're good to go.
                      </p>
                      <Button
                        className=" mt-4"
                        color="warning"
                        href="./docs/1.0/components/alerts.html"
                      >
                        See all components
                      </Button>
                    </Col>
                    <Col lg="6">
                      <div
                        className=" carousel slide"
                        id="carouselExampleControls"
                      >
                        <div className=" carousel-inner">
                          <div className=" carousel-item active">
                            <img
                              alt="..."
                              className=" d-block w-100"
                              src={require("assets/img/denys.jpg")}
                            />
                          </div>
                          <div className=" carousel-item">
                            <img
                              alt="..."
                              className=" d-block w-100"
                              src={require("assets/img/fabien-bazanegue.jpg")}
                            />
                          </div>
                          <div className=" carousel-item">
                            <img
                              alt="..."
                              className=" d-block w-100"
                              src={require("assets/img/mark-finn.jpg")}
                            />
                          </div>
                        </div>
                        <a
                          className=" carousel-control-prev"
                          data-slide="prev"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          role="button"
                        >
                          <i className=" tim-icons icon-minimal-left" />
                          <span className=" sr-only">Previous</span>
                        </a>
                        <a
                          className=" carousel-control-next"
                          data-slide="next"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          role="button"
                        >
                          <i className=" tim-icons icon-minimal-right" />
                          <span className=" sr-only">Next</span>
                        </a>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            <div className=" section section-nucleo-icons">
              <img
                alt="..."
                className=" path"
                src={require("assets/img/path3.png")}
              />
              <Container>
                <Row className=" justify-content-center">
                  <Col lg="8" md="12">
                    <h2 className=" title">Nucleo Icons</h2>
                    <h4 className=" description">
                      BLK• Design System PRO comes with 100 custom icons made by
                      our friends from NucleoApp. The official package contains
                      over 2.100 thin icons which are looking great in
                      combination with BLK• Design System PRO Make sure you
                      check all of them and use those that you like the most.
                    </h4>
                    <div className=" btn-wrapper">
                      <Button
                        className=" btn-round"
                        color="primary"
                        href="./docs/1.0/foundation/icons.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        View Demo Icons
                      </Button>
                      <Button
                        className=" btn-simple btn-round"
                        color="primary"
                        href="https://nucleoapp.com/?ref=1712"
                        rel="noopener noreferrer"
                        size="lg"
                        target="_blank"
                      >
                        View All Icons
                      </Button>
                    </div>
                  </Col>
                </Row>
                <div className=" blur-hover">
                  <a href="./docs/1.0/foundation/icons.html">
                    <div className=" icons-container blur-item on-screen mt-5">
                      {/* Center */}
                      <i className=" icon tim-icons icon-coins" />
                      {/* Right 1 */}
                      <i className=" icon icon-sm tim-icons icon-spaceship" />
                      <i className=" icon icon-sm tim-icons icon-money-coins" />
                      <i className=" icon icon-sm tim-icons icon-link-72" />
                      {/* Right 2 */}
                      <i className=" icon tim-icons icon-send" />
                      <i className=" icon tim-icons icon-mobile" />
                      <i className=" icon tim-icons icon-wifi" />
                      {/* Left 1 */}
                      <i className=" icon icon-sm tim-icons icon-key-25" />
                      <i className=" icon icon-sm tim-icons icon-atom" />
                      <i className=" icon icon-sm tim-icons icon-satisfied" />
                      {/* Left 2 */}
                      <i className=" icon tim-icons icon-gift-2" />
                      <i className=" icon tim-icons icon-tap-02" />
                      <i className=" icon tim-icons icon-wallet-43" />
                    </div>
                    <span className=" blur-hidden h5 text-primary">
                      Eplore all the 21.000+ Nucleo Icons
                    </span>
                  </a>
                </div>
              </Container>
            </div>
            <div className=" section section-signup">
              <Container>
                <div className=" squares square-1" />
                <div className=" squares square-2" />
                <div className=" squares square-3" />
                <div className=" squares square-4" />
                <Row className=" row-grid justify-content-between align-items-center">
                  <Col lg="6">
                    <h3 className=" display-3 text-white">
                      A beautiful Black Design{" "}
                      <span className=" text-white">
                        completed with examples
                      </span>
                    </h3>
                    <p className=" text-white mb-3">
                      The Design System comes with four pre-built pages to help
                      you get started faster. You can change the text and images
                      and you're good to go. More importantly, looking at them
                      will give you a picture of what you can built with this
                      powerful Bootstrap 4 Design System.
                    </p>
                    <div className=" btn-wrapper">
                      <Button color="info" href="examples/register-page.html">
                        Register Page
                      </Button>
                    </div>
                  </Col>
                  <Col className=" mb-lg-auto" lg="6">
                    <Card className=" card-register">
                      <CardHeader>
                        <CardImg
                          alt="..."
                          src={require("assets/img/square1.png")}
                        />
                        <CardTitle tag="h4">Register</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <Form className=" form">
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className=" tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Full Name" type="text" />
                          </InputGroup>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className=" tim-icons icon-email-85" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Email" type="text" />
                          </InputGroup>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className=" tim-icons icon-lock-circle" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Password" type="text" />
                          </InputGroup>
                          <FormGroup check className=" text-left">
                            <Label check>
                              <Input type="checkbox" />
                              <span className=" form-check-sign" />I agree to
                              the{" "}
                              <a href="javascript:void(0)">
                                terms and conditions
                              </a>
                              .
                            </Label>
                          </FormGroup>
                        </Form>
                      </CardBody>
                      <CardFooter>
                        <Button
                          className=" btn-round"
                          color="info"
                          href="javascript:void(0)"
                          size="lg"
                        >
                          Get Started
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
            <div
              className=" section section-examples"
              data-background-color="black"
            >
              <img
                alt="..."
                className=" path"
                src={require("assets/img/path1.png")}
              />
              <div className=" space-50" />
              <Container className=" text-center">
                <Row>
                  <Col sm="6">
                    <a href="examples/landing-page.html">
                      <img
                        alt="..."
                        className=" img-raised"
                        src={require("assets/img/landing-page.png")}
                      />
                    </a>
                    <Button
                      className=" btn-simple btn-round"
                      color="primary"
                      href="examples/landing-page.html"
                    >
                      View Landing Page
                    </Button>
                  </Col>
                  <Col sm="6">
                    <a href="examples/profile-page.html">
                      <img
                        alt="..."
                        className=" img-raised"
                        src={require("assets/img/profile-page.png")}
                      />
                    </a>
                    <Button
                      className=" btn-simple btn-round"
                      color="primary"
                      href="examples/profile-page.html"
                    >
                      View Profile Page
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
            <div
              className=" section section-download"
              data-background-color="black"
              id="#download-section"
            >
              <img
                alt="..."
                className=" path"
                src={require("assets/img/path1.png")}
              />
              <Container>
                <Row className=" justify-content-md-center">
                  <Col className=" text-center" lg="8" md="12">
                    <h2 className=" title">
                      Do you love this Bootstrap 4 Design System?
                    </h2>
                    <h4 className=" description">
                      Cause if you do, it can be yours for FREE. Hit the button
                      below to navigate to Creative Tim where you can find the
                      design system in HTML format. Start a new project or give
                      an old Bootstrap project a new look!
                    </h4>
                  </Col>
                  <Col className=" text-center" lg="8" md="12">
                    <Button
                      className=" btn-round"
                      color="primary"
                      href="https://www.creative-tim.com/product/blk-design-system"
                      role="button"
                      size="lg"
                    >
                      Download HTML
                    </Button>
                    {/* <Button className=" btn-simple btn-round" color="primary" href="https://www.invisionapp.com/now" rel="noopener noreferrer" role="button" size="lg" target="_blank">
Download PSD/Sketch
</Button>
 */}
                  </Col>
                </Row>
                <br />
                <br />
                <br />
                {/* <Row className=" text-center mt-5">
<Col className=" ml-auto mr-auto" md="8">
<h2>
Want more?
</h2>
<h5 className=" description">
We've just launched <a href="http://demos.creative-tim.com/black-kit-pro/presentation.html" rel="noopener noreferrer" target="_blank">
BLK• Design System PRO
</a>
. It has a huge number of components, sections and example pages. Start Your Development With A Badass Bootstrap 4 Design System.
</h5>
</Col>
<Col md="12">
<Button className=" btn-neutral btn-round" color="default" href="http://demos.creative-tim.com/black-kit-pro/presentation.html" rel="noopener noreferrer" size="lg" target="_blank">
<i className=" tim-icons icon-cloud-upload-94">
</i>
 Upgrade to PRO
</Button>
</Col>
</Row>
 */}
                <br />
                <br />
                <Row className=" row-grid align-items-center my-md">
                  <Col lg="6">
                    <h3 className=" text-primary font-weight-light mb-2">
                      Thank you for supporting us!
                    </h3>
                    <h4 className=" mb-0 font-weight-light">
                      Let's get in touch on any of these platforms.
                    </h4>
                  </Col>
                  <Col className=" text-lg-center btn-wrapper" lg="6">
                    <Button
                      className=" btn-icon btn-round"
                      color="twitter"
                      id="twitter"
                      size="lg"
                    >
                      <i className=" fab fa-twitter" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="twitter">
                      Tweet!
                    </UncontrolledTooltip>
                    <Button
                      className=" btn-icon btn-round"
                      color="facebook"
                      id="facebook"
                      size="lg"
                    >
                      <i className=" fab fa-facebook-square" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="facebook">
                      Share!
                    </UncontrolledTooltip>
                    <Button
                      className=" btn-icon btn-round"
                      color="github"
                      href="https://github.com/creativetimofficial"
                      id="tooltip877922017"
                      size="lg"
                      target="_blank"
                    >
                      <i className=" fab fa-github" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip877922017">
                      Star on Github
                    </UncontrolledTooltip>
                  </Col>
                </Row>
              </Container>
            </div>
            {/* Sart Modal */}
            <Modal>
              <div className=" modal-header justify-content-center">
                <button
                  aria-hidden={true}
                  className=" close"
                  data-dismiss="modal"
                  type="button"
                >
                  <i className=" tim-icons icon-simple-remove" />
                </button>
                <h4 className=" title title-up">Modal title</h4>
              </div>
              <div className=" modal-body">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. A small river named
                  Duden flows by their place and supplies it with the necessary
                  regelialia. It is a paradisematic country, in which roasted
                  parts of sentences fly into your mouth.
                </p>
              </div>
              <div className=" modal-footer">
                <Button color="default" type="button">
                  Nice Button
                </Button>
                <Button color="danger" data-dismiss="modal" type="button">
                  Close
                </Button>
              </div>
            </Modal>
            {/* End Modal */}
            {/* Mini Modal */}
            <Modal modalClassName=" modal-mini modal-primary modal-mini">
              <div className=" modal-header justify-content-center">
                <button
                  aria-hidden={true}
                  className=" close"
                  data-dismiss="modal"
                  type="button"
                >
                  <i className=" tim-icons icon-simple-remove text-white" />
                </button>
                <div className=" modal-profile">
                  <i className=" tim-icons icon-single-02" />
                </div>
              </div>
              <div className=" modal-body">
                <p>Always have an access to your profile</p>
              </div>
              <div className=" modal-footer">
                <Button className=" btn-neutral" color="link" type="button">
                  Back
                </Button>
                <Button
                  className=" btn-neutral"
                  color="link"
                  data-dismiss="modal"
                  type="button"
                >
                  Close
                </Button>
              </div>
            </Modal>
            {/* Form Modal */}
            <Modal modalClassName=" modal-black">
              <div className=" modal-header justify-content-center">
                <button
                  aria-hidden={true}
                  className=" close"
                  data-dismiss="modal"
                  type="button"
                >
                  <i className=" tim-icons icon-simple-remove text-white" />
                </button>
                <div className=" text-muted text-center ml-auto mr-auto">
                  <h3 className=" mb-0">Sign in with</h3>
                </div>
              </div>
              <div className=" modal-body">
                <div className=" btn-wrapper text-center">
                  <Button
                    className=" btn-neutral btn-icon"
                    color="default"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img alt="..." src={require("assets/img/github.svg")} />
                  </Button>
                  <Button
                    className=" btn-neutral btn-icon"
                    color="default"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img alt="..." src={require("assets/img/google.svg")} />
                  </Button>
                </div>
                <div className=" text-center text-muted mb-4 mt-3">
                  <small>Or sign in with credentials</small>
                </div>
                <Form role="form">
                  <FormGroup className=" mb-3">
                    <InputGroup className=" input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className=" tim-icons icon-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Email" type="email" />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className=" input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className=" tim-icons icon-key-25" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Password" type="password" />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup check className=" mt-3">
                    <Label check>
                      <Input defaultChecked type="checkbox" />
                      <span className=" form-check-sign" />
                      Remember me!
                    </Label>
                  </FormGroup>
                  <div className=" text-center">
                    <Button className=" my-4" color="primary" type="button">
                      Sign in
                    </Button>
                  </div>
                </Form>
              </div>
            </Modal>
            {/* End Modal */}
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Index;
