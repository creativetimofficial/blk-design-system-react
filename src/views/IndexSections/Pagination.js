/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Badge,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Container,
  Row,
  Col
} from "reactstrap";

export default function PaginationSection() {
  const [pills, setPills] = React.useState(1);
  return (
    <div className="section section-pagination">
      <img alt="..." className="path" src={require("assets/img/path4.png")} />
      <img
        alt="..."
        className="path path1"
        src={require("assets/img/path5.png")}
      />
      <Container>
        <Row>
          <Col md="6">
            <h3 className="mb-4">Progress Bars</h3>
            <div className="progress-container">
              <span className="progress-badge">Default</span>
              <Progress max="100" value="25">
                <span className="progress-value">25%</span>
              </Progress>
            </div>
            <div className="progress-container progress-info">
              <span className="progress-badge">Primary</span>
              <Progress max="100" value="60">
                <span className="progress-value">60%</span>
              </Progress>
            </div>
            <br />
            <h3 className="mb-5">Navigation Pills</h3>
            <Nav className="nav-pills-info nav-pills-icons" pills>
              <NavItem>
                <NavLink
                  className={classnames({
                    "active show": pills === 1
                  })}
                  onClick={(e) => setPills(2)}
                  href="#pablo"
                >
                  <i className="tim-icons icon-atom" />
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    "active show": pills === 2
                  })}
                  onClick={(e) => setPills(2)}
                  href="#pablo"
                >
                  <i className="tim-icons icon-chat-33" />
                  Messages
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    "active show": pills === 3
                  })}
                  onClick={(e) => setPills(3)}
                  href="#pablo"
                >
                  <i className="tim-icons icon-settings-gear-63" />
                  Settings
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="6">
            <h3 className="mb-5">Pagination</h3>
            <Pagination
              className="pagination pagination-info"
              listClassName="pagination-info"
            >
              <PaginationItem className="active">
                <PaginationLink
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  5
                </PaginationLink>
              </PaginationItem>
            </Pagination>
            <Pagination
              className="pagination pagination-info"
              listClassName="pagination-info"
            >
              <PaginationItem>
                <PaginationLink
                  aria-label="Previous"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <span aria-hidden={true}>
                    <i
                      aria-hidden={true}
                      className="tim-icons icon-double-left"
                    />
                  </span>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="active">
                <PaginationLink
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  aria-label="Next"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <span aria-hidden={true}>
                    <i
                      aria-hidden={true}
                      className="tim-icons icon-double-right"
                    />
                  </span>
                </PaginationLink>
              </PaginationItem>
            </Pagination>
            <br />
            <h3 className="mb-5">Labels</h3>
            <Badge className="badge-default">Default</Badge>
            <Badge color="primary">Primary</Badge>
            <Badge color="success">Success</Badge>
            <Badge color="info">Info</Badge>
            <Badge color="warning">Warning</Badge>
            <Badge color="danger">Danger</Badge>
            <Badge className="badge-neutral">Neutral</Badge>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}
