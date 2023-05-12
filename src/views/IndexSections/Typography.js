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
// reactstrap components
import { Container, Row, Col } from "reactstrap";

export default function Typography() {
  return (
    <div className="section section-typo">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <img
        alt="..."
        className="path path1"
        src={require("assets/img/path3.png")}
      />
      <Container>
        <h3 className="title">Typography</h3>
        <div id="typography">
          <Row>
            <Col md="12">
              <div className="typography-line">
                <h1>
                  <span>Header 1</span>
                  The Life of BLK• Design System React
                </h1>
              </div>
              <div className="typography-line">
                <h2>
                  <span>Header 2</span>
                  The Life of BLK• Design System React
                </h2>
              </div>
              <div className="typography-line">
                <h3>
                  <span>Header 3</span>
                  The Life of BLK• Design System React
                </h3>
              </div>
              <div className="typography-line">
                <h4>
                  <span>Header 4</span>
                  The Life of BLK• Design System React
                </h4>
              </div>
              <div className="typography-line">
                <h5>
                  <span>Header 5</span>
                  The Life of BLK• Design System React
                </h5>
              </div>
              <div className="typography-line">
                <h6>
                  <span>Header 6</span>
                  The Life of BLK• Design System React
                </h6>
              </div>
              <div className="typography-line">
                <p>
                  <span>Paragraph</span>I will be the leader of a company that
                  ends up being worth billions of dollars, because I got the
                  answers. I understand culture. I am the nucleus. I think
                  that’s a responsibility that I have, to push possibilities, to
                  show people, this is the level that things could be at.
                </p>
              </div>
              <div className="typography-line">
                <span>Quote</span>
                <blockquote>
                  <p className="blockquote blockquote-info">
                    "I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers. I understand
                    culture. I am the nucleus. I think that’s a responsibility
                    that I have, to push possibilities, to show people, this is
                    the level that things could be at." <br />
                    <br />
                    <small>- Noaa</small>
                  </p>
                </blockquote>
              </div>
              <div className="typography-line">
                <span>Muted Text</span>
                <p className="text-muted">
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers...
                </p>
              </div>
              <div className="typography-line">
                <span>Primary Text</span>
                <p className="text-primary">
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers...
                </p>
              </div>
              <div className="typography-line">
                <span>Info Text</span>
                <p className="text-info">
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers...
                </p>
              </div>
              <div className="typography-line">
                <span>Success Text</span>
                <p className="text-success">
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers...
                </p>
              </div>
              <div className="typography-line">
                <span>Warning Text</span>
                <p className="text-warning">
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers...
                </p>
              </div>
              <div className="typography-line">
                <span>Danger Text</span>
                <p className="text-danger">
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers...
                </p>
              </div>
              <div className="typography-line">
                <h2>
                  <span>Small Tag</span>
                  Header with small subtitle <br />
                  <small>Use "small" tag for the headers</small>
                </h2>
              </div>
            </Col>
          </Row>
        </div>
        <div className="space-50" />
        <div id="images">
          <h3 className="mb-5">Images</h3>
          <Row>
            <Col sm="3" xs="6">
              <small className="d-block text-uppercase font-weight-bold mb-4">
                Image
              </small>
              <img
                alt="..."
                className="img-fluid rounded shadow"
                src={require("assets/img/ryan.jpg")}
                style={{ width: "150px" }}
              />
            </Col>
            <Col sm="3" xs="6">
              <small className="d-block text-uppercase font-weight-bold mb-4">
                Circle Image
              </small>
              <img
                alt="..."
                className="img-fluid rounded-circle shadow"
                src={require("assets/img/james.jpg")}
                style={{ width: "150px" }}
              />
            </Col>
            <Col className="mt-5 mt-sm-0" sm="3" xs="6">
              <small className="d-block text-uppercase font-weight-bold mb-4">
                Raised
              </small>
              <img
                alt="..."
                className="img-fluid rounded shadow-lg"
                src={require("assets/img/lora.jpg")}
                style={{ width: "150px" }}
              />
            </Col>
            <Col className="mt-5 mt-sm-0" sm="3" xs="6">
              <small className="d-block text-uppercase font-weight-bold mb-4">
                Circle Raised
              </small>
              <img
                alt="..."
                className="img-fluid rounded-circle shadow-lg"
                src={require("assets/img/mike.jpg")}
                style={{ width: "150px" }}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
