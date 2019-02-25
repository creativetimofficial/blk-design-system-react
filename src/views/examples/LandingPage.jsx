import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  UncontrolledCollapse,
  ListGroupItem,
  ListGroup,
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

class LandingPage extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
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
            <img
              alt="..."
              className=" path"
              src={require("assets/img/blob.png")}
            />
            <img
              alt="..."
              className=" path2"
              src={require("assets/img/path2.png")}
            />
            <img
              alt="..."
              className=" shapes triangle"
              src={require("assets/img/triunghiuri.png")}
            />
            <img
              alt="..."
              className=" shapes wave"
              src={require("assets/img/waves.png")}
            />
            <img
              alt="..."
              className=" shapes squares"
              src={require("assets/img/patrat.png")}
            />
            <img
              alt="..."
              className=" shapes circle"
              src={require("assets/img/cercuri.png")}
            />
            <div className=" content-center">
              <Row className=" row-grid justify-content-between align-items-center text-left">
                <Col lg="6" md="6">
                  <h1 className=" text-white">
                    We keep your coin <br />
                    <span className=" text-white">secured</span>
                  </h1>
                  <p className=" text-white mb-3">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel...
                  </p>
                  <div className=" btn-wrapper mb-3">
                    <p className=" category text-success d-inline">
                      From 9.99%/mo
                    </p>
                    <Button
                      className=" btn-link"
                      color="success"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      <i className=" tim-icons icon-minimal-right" />
                    </Button>
                  </div>
                  <div className=" btn-wrapper">
                    <div className=" button-container">
                      <Button
                        className=" btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="javascript:void(0)"
                      >
                        <i className=" fab fa-twitter" />
                      </Button>
                      <Button
                        className=" btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="javascript:void(0)"
                      >
                        <i className=" fab fa-dribbble" />
                      </Button>
                      <Button
                        className=" btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="javascript:void(0)"
                      >
                        <i className=" fab fa-facebook" />
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col lg="4" md="5">
                  <img
                    alt="..."
                    className=" img-fluid"
                    src={require("assets/img/etherum.png")}
                  />
                </Col>
              </Row>
            </div>
          </div>
          <section className=" section section-lg">
            <section className=" section">
              <img
                alt="..."
                className=" path"
                src={require("assets/img/path4.png")}
              />
              <Container>
                <Row className=" row-grid justify-content-between">
                  <Col className=" mt-lg-5" md="5">
                    <Row>
                      <Col className=" px-2 py-2" lg="6" sm="12">
                        <Card className=" card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className=" icon-big text-center icon-warning">
                                  <i className=" tim-icons icon-trophy text-warning" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className=" numbers">
                                  <CardTitle tag="p">3,237</CardTitle>
                                  <p />
                                  <p className=" card-category">Awards</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className=" px-2 py-2" lg="6" sm="12">
                        <Card className=" card-stats upper bg-default">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className=" icon-big text-center icon-warning">
                                  <i className=" tim-icons icon-coins text-white" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className=" numbers">
                                  <CardTitle tag="p">3,653</CardTitle>
                                  <p />
                                  <p className=" card-category">Commits</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col className=" px-2 py-2" lg="6" sm="12">
                        <Card className=" card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className=" icon-big text-center icon-warning">
                                  <i className=" tim-icons icon-gift-2 text-info" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className=" numbers">
                                  <CardTitle tag="p">593</CardTitle>
                                  <p />
                                  <p className=" card-category">Presents</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className=" px-2 py-2" lg="6" sm="12">
                        <Card className=" card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className=" icon-big text-center icon-warning">
                                  <i className=" tim-icons icon-credit-card text-success" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className=" numbers">
                                  <CardTitle tag="p">10,783</CardTitle>
                                  <p />
                                  <p className=" card-category">Forks</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col md="6">
                    <div className=" pl-md-5">
                      <h1>
                        Large <br />
                        Achivements
                      </h1>
                      <p>
                        I should be capable of drawing a single stroke at the
                        present moment; and yet I feel that I never was a
                        greater artist than now.
                      </p>
                      <br />
                      <p>
                        When, while the lovely valley teems with vapour around
                        me, and the meridian sun strikes the upper surface of
                        the impenetrable foliage of my trees, and but a few
                        stray.
                      </p>
                      <br />
                      <a
                        className=" font-weight-bold text-info mt-5"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Show all{" "}
                        <i className=" tim-icons icon-minimal-right text-info" />
                      </a>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </section>
          <section className=" section section-lg">
            <img
              alt="..."
              className=" path"
              src={require("assets/img/path4.png")}
            />
            <img
              alt="..."
              className=" path2"
              src={require("assets/img/path5.png")}
            />
            <img
              alt="..."
              className=" path3"
              src={require("assets/img/path2.png")}
            />
            <Container>
              <Row className=" justify-content-center">
                <Col lg="12">
                  <h1 className=" text-center">Your best benefit</h1>
                  <Row className=" row-grid justify-content-center">
                    <Col lg="3">
                      <div className=" info">
                        <div className=" icon icon-primary">
                          <i className=" tim-icons icon-money-coins" />
                        </div>
                        <h4 className=" info-title">Low Commission</h4>
                        <hr className=" line-primary" />
                        <p>
                          Divide details about your work into parts. Write a few
                          lines about each one. A paragraph describing a feature
                          will.
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className=" info">
                        <div className=" icon icon-warning">
                          <i className=" tim-icons icon-chart-pie-36" />
                        </div>
                        <h4 className=" info-title">High Incomes</h4>
                        <hr className=" line-warning" />
                        <p>
                          Divide details about your product or agency work into
                          parts. Write a few lines about each one. A paragraph
                          describing feature will be a feature.
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className=" info">
                        <div className=" icon icon-success">
                          <i className=" tim-icons icon-single-02" />
                        </div>
                        <h4 className=" info-title">Verified People</h4>
                        <hr className=" line-success" />
                        <p>
                          Divide details about your product or agency work into
                          parts. Write a few lines about each one. A paragraph
                          describing be enough.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className=" section section-lg section-safe">
            <img
              alt="..."
              className=" path"
              src={require("assets/img/path5.png")}
            />
            <Container>
              <Row className=" row-grid justify-content-between">
                <Col md="5">
                  <img
                    alt="..."
                    className=" img-fluid floating"
                    src={require("assets/img/chester-wade.jpg")}
                  />
                  <Card className=" card-stats bg-danger">
                    <CardBody>
                      <div className=" justify-content-center">
                        <div className=" numbers">
                          <CardTitle tag="p">100%</CardTitle>
                          <p className=" card-category text-white">Safe</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className=" card-stats bg-info">
                    <CardBody>
                      <div className=" justify-content-center">
                        <div className=" numbers">
                          <CardTitle tag="p">573 K</CardTitle>
                          <p className=" card-category text-white">
                            Satisfied customers
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className=" card-stats bg-default">
                    <CardBody>
                      <div className=" justify-content-center">
                        <div className=" numbers">
                          <CardTitle tag="p">10 425</CardTitle>
                          <p className=" card-category text-white">Business</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <div className=" px-md-5">
                    <hr className=" line-success" />
                    <h3>Awesome features</h3>
                    <p>
                      The design system comes with three pre-built pages to help
                      you get started faster. You can change the text and images
                      and you're good to go.
                    </p>
                    <ul className=" list-unstyled mt-5">
                      <li className=" py-2">
                        <div className=" d-flex align-items-center">
                          <div className=" icon icon-success mb-2">
                            <i className=" tim-icons icon-vector" />
                          </div>
                          <div className=" ml-3">
                            <h6>Carefully crafted components</h6>
                          </div>
                        </div>
                      </li>
                      <li className=" py-2">
                        <div className=" d-flex align-items-center">
                          <div className=" icon icon-success mb-2">
                            <i className=" tim-icons icon-tap-02" />
                          </div>
                          <div className=" ml-3">
                            <h6>Amazing page examples</h6>
                          </div>
                        </div>
                      </li>
                      <li className=" py-2">
                        <div className=" d-flex align-items-center">
                          <div className=" icon icon-success mb-2">
                            <i className=" tim-icons icon-single-02" />
                          </div>
                          <div className=" ml-3">
                            <h6>Super friendly support team</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className=" section section-lg">
            <img
              alt="..."
              className=" path"
              src={require("assets/img/path4.png")}
            />
            <img
              alt="..."
              className=" path2"
              src={require("assets/img/path2.png")}
            />
            <Col md="12">
              <Card className=" card-chart card-plain">
                <CardHeader>
                  <Row>
                    <Col className=" text-left" sm="6">
                      <hr className=" line-primary" />
                      <h5 className=" card-category">Total Investments</h5>
                      <CardTitle tag="h2">Performance</CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className=" chart-area">
                    <canvas id="chartBig" />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </section>
          <section className=" section section-lg section-coins">
            <img
              alt="..."
              className=" path"
              src={require("assets/img/path3.png")}
            />
            <Container>
              <Row>
                <Col md="4">
                  <hr className=" line-info" />
                  <h1>
                    Choose the coin{" "}
                    <span className=" text-info">that fits your needs</span>
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Card className=" card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className=" img-center img-fluid"
                        src={require("assets/img/bitcoin.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className=" text-center" md="12">
                          <h4 className=" text-uppercase">Light Coin</h4>
                          <span>Plan</span>
                          <hr className=" line-primary" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>50 messages</ListGroupItem>
                          <ListGroupItem>100 emails</ListGroupItem>
                          <ListGroupItem>24/7 Support</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className=" text-center">
                      <Button className=" btn-simple" color="primary">
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className=" card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className=" img-center img-fluid"
                        src={require("assets/img/etherum.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className=" text-center" md="12">
                          <h4 className=" text-uppercase">Dark Coin</h4>
                          <span>Plan</span>
                          <hr className=" line-success" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>150 messages</ListGroupItem>
                          <ListGroupItem>1000 emails</ListGroupItem>
                          <ListGroupItem>24/7 Support</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className=" text-center">
                      <Button className=" btn-simple" color="success">
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className=" card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className=" img-center img-fluid"
                        src={require("assets/img/ripp.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className=" text-center" md="12">
                          <h4 className=" text-uppercase">Bright Coin</h4>
                          <span>Plan</span>
                          <hr className=" line-info" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>350 messages</ListGroupItem>
                          <ListGroupItem>10K emails</ListGroupItem>
                          <ListGroupItem>24/7 Support</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className=" text-center">
                      <Button className=" btn-simple" color="info">
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
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
                      id="tooltip381204902"
                      target="_blank"
                    >
                      <i className=" fab fa-twitter" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip381204902">
                      Follow us
                    </UncontrolledTooltip>
                    <Button
                      className=" btn-icon btn-neutral btn-round btn-simple"
                      color="default"
                      href="https://www.facebook.com/creativetim"
                      id="tooltip243062576"
                      target="_blank"
                    >
                      <i className=" fab fa-facebook-square" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip243062576">
                      Like us
                    </UncontrolledTooltip>
                    <Button
                      className=" btn-icon btn-neutral btn-round btn-simple"
                      color="default"
                      href="https://dribbble.com/creativetim"
                      id="tooltip24973308"
                      target="_blank"
                    >
                      <i className=" fab fa-dribbble" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip24973308">
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

export default LandingPage;
