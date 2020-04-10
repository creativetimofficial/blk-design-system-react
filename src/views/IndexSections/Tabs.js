/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconTabs: 1,
      textTabs: 4
    };
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <div className="section section-tabs">
        <Container>
          <div className="title">
            <h3 className="mb-3">Navigation Tabs</h3>
          </div>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <div className="mb-3">
                <small className="text-uppercase font-weight-bold">
                  With icons
                </small>
              </div>
              <Card>
                <CardHeader>
                  <Nav className="nav-tabs-info" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.iconTabs === 1
                        })}
                        onClick={e => this.toggleTabs(e, "iconTabs", 1)}
                        href="#pablo"
                      >
                        <i className="tim-icons icon-spaceship" />
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.iconTabs === 2
                        })}
                        onClick={e => this.toggleTabs(e, "iconTabs", 2)}
                        href="#pablo"
                      >
                        <i className="tim-icons icon-settings-gear-63" />
                        Settings
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.iconTabs === 3
                        })}
                        onClick={e => this.toggleTabs(e, "iconTabs", 3)}
                        href="#pablo"
                      >
                        <i className="tim-icons icon-bag-16" />
                        Options
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="tab-space"
                    activeTab={"link" + this.state.iconTabs}
                  >
                    <TabPane tabId="link1">
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits. <br />
                        <br />
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI.
                      </p>
                    </TabPane>
                    <TabPane tabId="link2">
                      <p>
                        Completely synergize resource taxing relationships via
                        premier niche markets. Professionally cultivate
                        one-to-one customer service with robust ideas. <br />
                        <br />
                        Dynamically innovate resource-leveling customer service
                        for state of the art customer service.
                      </p>
                    </TabPane>
                    <TabPane tabId="link3">
                      <p>
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas. <br />
                        <br />
                        Dramatically maintain clicks-and-mortar solutions
                        without functional solutions.
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <div className="mb-3">
                <small className="text-uppercase font-weight-bold">
                  With text
                </small>
              </div>
              <Card>
                <CardHeader>
                  <Nav className="nav-tabs-info" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.textTabs === 4
                        })}
                        onClick={e => this.toggleTabs(e, "textTabs", 4)}
                        href="#pablo"
                      >
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.textTabs === 5
                        })}
                        onClick={e => this.toggleTabs(e, "textTabs", 5)}
                        href="#pablo"
                      >
                        Settings
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.textTabs === 6
                        })}
                        onClick={e => this.toggleTabs(e, "textTabs", 6)}
                        href="#pablo"
                      >
                        Options
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="tab-space"
                    activeTab={"link" + this.state.textTabs}
                  >
                    <TabPane tabId="link4">
                      <p>
                        These cases are perfectly simple and easy to
                        distinguish. In a free hour, when our power of choice is
                        untrammelled and when nothing prevents our being able to
                        do what we like best, every pleasure is to be welcomed
                        and every pain avoided. <br />
                        But in certain circumstances and owing to the claims of
                        duty or the obligations of business it will frequently
                        occur that pleasures
                      </p>
                    </TabPane>
                    <TabPane tabId="link5">
                      <p>
                        I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture. I am the nucleus. I think that’s a
                        responsibility that I have, to push possibilities, to
                        show people, this is the level that things could be at.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at.
                      </p>
                    </TabPane>
                    <TabPane tabId="link6">
                      <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Tabs;
