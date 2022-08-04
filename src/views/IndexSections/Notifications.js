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
// reactstrap components
import { UncontrolledAlert, Container } from "reactstrap";

export default function Notifications() {
  return (
    <div className="section section-notifications" id="notifications">
      <Container>
        <div className="space" />
        <h3>Notifications</h3>
        <UncontrolledAlert className="alert-with-icon" color="primary">
          <span data-notify="icon" className="tim-icons icon-coins" />
          <span>
            <b>Congrats! -</b>
            This is a regular notification made with ".alert-primary"
          </span>
        </UncontrolledAlert>
        <UncontrolledAlert className="alert-with-icon" color="info">
          <span data-notify="icon" className="tim-icons icon-trophy" />
          <span>
            <b>Heads up! -</b>
            This is a regular notification made with ".alert-info"
          </span>
        </UncontrolledAlert>
        <UncontrolledAlert className="alert-with-icon" color="success">
          <span data-notify="icon" className="tim-icons icon-bell-55" />
          <span>
            <b>Well done! -</b>
            This is a regular notification made with ".alert-success"
          </span>
        </UncontrolledAlert>
        <UncontrolledAlert className="alert-with-icon" color="warning">
          <span data-notify="icon" className="tim-icons icon-bulb-63" />
          <span>
            <b>Warning! -</b>
            This is a regular notification made with ".alert-warning"
          </span>
        </UncontrolledAlert>
        <UncontrolledAlert className="alert-with-icon" color="danger">
          <span data-notify="icon" className="tim-icons icon-support-17" />
          <span>
            <b>Oh snap! -</b>
            This is a regular notification made with ".alert-danger"
          </span>
        </UncontrolledAlert>
      </Container>
    </div>
  );
}
