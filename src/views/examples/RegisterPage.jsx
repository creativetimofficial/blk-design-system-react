import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  UncontrolledCollapse,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class RegisterPage extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("register-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("register-page");
  }
  render() {
    return (
      <>
        {/* Navbar */}
        <Navbar
          className=" fixed-top navbar-transparent"
          color-on-scroll="100"
          expand="lg"
        >
          <Container>
            <div className=" navbar-translate">
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
                aria-controls="navigation-index"
                aria-expanded={false}
                aria-label="Toggle navigation"
                className=" navbar-toggler navbar-toggler"
                data-target="#navigation"
                data-toggle="collapse"
                id="navigation"
                type="button"
              >
                <span className=" navbar-toggler-bar bar1" />
                <span className=" navbar-toggler-bar bar2" />
                <span className=" navbar-toggler-bar bar3" />
              </button>
            </div>
            <UncontrolledCollapse
              className=" justify-content-end"
              id="navigation"
              navbar
              toggler="#navigation"
            >
              <div className=" navbar-collapse-header">
                <Row>
                  <Col className=" collapse-brand" xs="6">
                    <a>BLK•</a>
                  </Col>
                  <Col className=" collapse-close text-right" xs="6">
                    <button
                      aria-controls="navigation-index"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className=" navbar-toggler"
                      data-target="#navigation"
                      data-toggle="collapse"
                      id="navigation"
                      type="button"
                    >
                      <i className=" tim-icons icon-simple-remove" />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav navbar>
                <NavItem className=" p-0">
                  <NavLink
                    data-placement="bottom"
                    href="https://twitter.com/CreativeTim"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Follow us on Twitter"
                  >
                    <i className=" fab fa-twitter" />
                    <p className=" d-lg-none d-xl-none">Twitter</p>
                  </NavLink>
                </NavItem>
                <NavItem className=" p-0">
                  <NavLink
                    data-placement="bottom"
                    href="https://www.facebook.com/CreativeTim"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Like us on Facebook"
                  >
                    <i className=" fab fa-facebook-square" />
                    <p className=" d-lg-none d-xl-none">Facebook</p>
                  </NavLink>
                </NavItem>
                <NavItem className=" p-0">
                  <NavLink
                    data-placement="bottom"
                    href="https://www.instagram.com/CreativeTimOfficial"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Follow us on Instagram"
                  >
                    <i className=" fab fa-instagram" />
                    <p className=" d-lg-none d-xl-none">Instagram</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="../index.html">Back to Kit</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/creativetimofficial/blk-design-system/issues">
                    Have an issue?
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
        {/* End Navbar */}
        <div className=" wrapper">
          <div className=" page-header">
            <div className=" page-header-image" />
            <div className=" content">
              <Container>
                <Row>
                  <Col className=" offset-lg-0 offset-md-3" lg="5" md="6">
                    <div className=" square square-7" id="square7" />
                    <div className=" square square-8" id="square8" />
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
                <div className=" register-bg" />
                <div className=" square square-1" id="square1" />
                <div className=" square square-2" id="square2" />
                <div className=" square square-3" id="square3" />
                <div className=" square square-4" id="square4" />
                <div className=" square square-5" id="square5" />
                <div className=" square square-6" id="square6" />
              </Container>
            </div>
          </div>
          <footer className=" footer">
            <Container>
              <Row>
                <Col md="3">
                  <h1 className=" title">BLK•</h1>
                </Col>
                <Col md="3">
                  <Nav>
                    <NavItem>
                      <NavLink href="../index.html">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="../examples/landing-page.html">
                        Landing
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="../examples/register-page.html">
                        Register
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="../examples/profile-page.html">
                        Profile
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
                <Col md="3">
                  <Nav>
                    <NavItem>
                      <NavLink href="https://creative-tim.com/contact-us">
                        Contact Us
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="https://creative-tim.com/about-us">
                        About Us
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="https://creative-tim.com/blog">
                        Blog
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="https://opensource.org/licenses/MIT">
                        License
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
                <Col md="3">
                  <h3 className=" title">Follow us:</h3>
                  <div className=" btn-wrapper profile">
                    <Button
                      className=" btn-icon btn-neutral btn-round btn-simple"
                      color="default"
                      href="https://twitter.com/creativetim"
                      id="tooltip310443943"
                      target="_blank"
                    >
                      <i className=" fab fa-twitter" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip310443943">
                      Follow us
                    </UncontrolledTooltip>
                    <Button
                      className=" btn-icon btn-neutral btn-round btn-simple"
                      color="default"
                      href="https://www.facebook.com/creativetim"
                      id="tooltip20761821"
                      target="_blank"
                    >
                      <i className=" fab fa-facebook-square" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip20761821">
                      Like us
                    </UncontrolledTooltip>
                    <Button
                      className=" btn-icon btn-neutral btn-round btn-simple"
                      color="default"
                      href="https://dribbble.com/creativetim"
                      id="tooltip18580973"
                      target="_blank"
                    >
                      <i className=" fab fa-dribbble" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip18580973">
                      Follow us
                    </UncontrolledTooltip>
                  </div>
                </Col>
              </Row>
            </Container>
          </footer>
        </div>
      </>
    );
  }
}

export default RegisterPage;
