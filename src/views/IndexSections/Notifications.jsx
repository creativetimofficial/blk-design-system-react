import React from "react";
// reactstrap components
import { Alert, Container } from "reactstrap";

class Notifications extends React.Component {
  render() {
    return (
      <div className="section section-notifications" id="notifications">
        <Container>
          <div className="space" />
          <h3>Notifications</h3>
          <Alert className="alert-with-icon" color="primary">
            <span className="tim-icons icon-coins" />
            <span>
              <b>Congrats! -</b>
              This is a regular notification made with ".alert-primary"
            </span>
          </Alert>
          <Alert className="alert-with-icon" color="info">
            <span className="tim-icons icon-trophy" />
            <span>
              <b>Heads up! -</b>
              This is a regular notification made with ".alert-info"
            </span>
          </Alert>
          <Alert className="alert-with-icon" color="success">
            <span className="tim-icons icon-bell-55" />
            <span>
              <b>Well done! -</b>
              This is a regular notification made with ".alert-success"
            </span>
          </Alert>
          <Alert className="alert-with-icon" color="warning">
            <span className="tim-icons icon-bulb-63" />
            <span>
              <b>Warning! -</b>
              This is a regular notification made with ".alert-warning"
            </span>
          </Alert>
          <Alert className="alert-with-icon" color="danger">
            <span className="tim-icons icon-support-17" />
            <span>
              <b>Oh snap! -</b>
              This is a regular notification made with ".alert-danger"
            </span>
          </Alert>
        </Container>
      </div>
    );
  }
}

export default Notifications;
