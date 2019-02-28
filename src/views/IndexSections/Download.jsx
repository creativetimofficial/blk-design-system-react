import React from "react";
// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

class Download extends React.Component {
  render() {
    return (
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h2 className="title">
                Do you love this Bootstrap 4 React Design System?
              </h2>
              <h4 className="description">
                Cause if you do, it can be yours for FREE. Hit the button below
                to navigate to Creative Tim where you can find the design system
                in HTML format. Start a new project or give an old Bootstrap
                project a new look!
              </h4>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-round"
                color="info"
                href="https://www.creative-tim.com/product/blk-design-system-react?ref=blkdsr-index-page-download-section"
                role="button"
                size="lg"
              >
                Download HTML
              </Button>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Row className="row-grid align-items-center my-md">
            <Col lg="6">
              <h3 className="text-info font-weight-light mb-2">
                Thank you for supporting us!
              </h3>
              <h4 className="mb-0 font-weight-light">
                Let's get in touch on any of these platforms.
              </h4>
            </Col>
            <Col className="text-lg-center btn-wrapper" lg="6">
              <Button
                className="btn-icon btn-round"
                color="twitter"
                id="twitter"
                size="lg"
                href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fblk-design-system-react%2F%23%2Fcomponents&text=Blk%E2%80%A2%20Design%20System%20React%20by%20Creative%20Tim&original_referer=http%3A%2F%2Flocalhost%3A3000%2Fcomponents&via=creativetim&hashtags=react%2Cbootstrap%2Creactstrap%2Ccreativetim%2Ccreativetimofficial%2Cblk%2Cblkreact%2Cdesign%2Csystem%2Cdesignsystem%2Creactdesign%2Creactsystem%2Creactdesignsystem%2Cblksystem%2Cblkdesign%2Cblkreactdesignsystem"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </Button>
              <UncontrolledTooltip delay={0} target="twitter">
                Tweet!
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-round"
                color="facebook"
                id="facebook"
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fblk-design-system-react%2F%23%2Fcomponents"
                target="_blank"
                size="lg"
              >
                <i className="fab fa-facebook-square" />
              </Button>
              <UncontrolledTooltip delay={0} target="facebook">
                Share!
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-round"
                color="github"
                href="https://github.com/creativetimofficial"
                id="tooltip877922017"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-github" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip877922017">
                Star on Github
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Download;
