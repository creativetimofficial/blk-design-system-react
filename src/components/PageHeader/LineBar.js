import React from 'react'
import { Container } from 'reactstrap'
import './LineBar.css'

export default function LineBar({description}) {
  return (
    <div className="line-section">
    <Container fluid="sm">
      {/* <h1>A Cleaning Service You Can Trust!</h1> */}
      {/* <div className="space" /> */}
      {/* <h3>Notifications</h3>
      <UncontrolledAlert className="alert-with-icon" color="info">
        <span data-notify="icon" className="tim-icons icon-trophy" />
        <span>
          <b>Heads up! -</b>
          This is a regular notification made with ".alert-info"
        </span>
        
      </UncontrolledAlert> */}
      {/* <Row> */}
    {/* <Col className="cornel"> */}
    <h1 className='cornel'>{description}</h1> 
    {/* </Col> */}
  {/* </Row> */}

    </Container>
  </div>
  )
}
