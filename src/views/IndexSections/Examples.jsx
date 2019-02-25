import React from "react"; // reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Examples extends React.Component {
  render() {
    return (
      <div className="section section-examples" data-background-color="black">
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <div className="space-50" />
        <Container className="text-center">
          <Row>
            <Col sm="6">
              <a href="examples/landing-page.html">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/landing-page.png")}
                />
              </a>
              <Button
                className="btn-simple btn-round"
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
                  className="img-raised"
                  src={require("assets/img/profile-page.png")}
                />
              </a>
              <Button
                className="btn-simple btn-round"
                color="primary"
                href="examples/profile-page.html"
              >
                View Profile Page
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Examples;
