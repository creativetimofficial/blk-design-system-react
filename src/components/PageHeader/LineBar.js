import React from 'react'
import { Container, UncontrolledAlert } from 'reactstrap'

export default function LineBar() {
  return (
    <div className="section section-notifications" id="notifications">
    <Container>
      <div className="space" />
      {/* <h3>Notifications</h3> */}
      <UncontrolledAlert className="alert-with-icon" color="info">
        <span data-notify="icon" className="tim-icons icon-trophy" />
        <span>
          <b>Heads up! -</b>
          This is a regular notification made with ".alert-info"
        </span>
      </UncontrolledAlert>
    </Container>
  </div>
  )
}
