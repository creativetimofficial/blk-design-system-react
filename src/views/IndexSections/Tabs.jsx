import React from "react";
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
              {/* Nav tabs */}
              <Card>
                <CardHeader>
                  <Nav className="nav-tabs-primary" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className="active"
                        data-toggle="tab"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        role="tablist"
                      >
                        <i className="tim-icons icon-spaceship" />
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
                        <i className="tim-icons icon-settings-gear-63" />
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
                        <i className="tim-icons icon-bag-16" />
                        Options
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  {/* Tab panes */}
                  <TabContent className="tab-space">
                    <TabPane className="active" id="link1">
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits. <br />
                        <br />
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI.
                      </p>
                    </TabPane>
                    <TabPane id="link2">
                      <p>
                        Completely synergize resource taxing relationships via
                        premier niche markets. Professionally cultivate
                        one-to-one customer service with robust ideas. <br />
                        <br />
                        Dynamically innovate resource-leveling customer service
                        for state of the art customer service.
                      </p>
                    </TabPane>
                    <TabPane id="link3">
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
              {/* Tabs with Background on Card */}
              <Card>
                <CardHeader>
                  <Nav className="nav-tabs-primary" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className="active"
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
                  <TabContent className="tab-space">
                    <TabPane className="active" id="link4">
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
                    <TabPane id="link5">
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
                    <TabPane id="link6">
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
              {/* End Tabs on plain Card */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Tabs;
