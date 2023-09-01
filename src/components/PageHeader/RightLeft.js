import React from 'react'
import { Button, Col, Container, Row, UncontrolledCarousel } from 'reactstrap'
import './RightLeft.css'


export default function RightLeft({title, description, b1, b2, b3, b4 }) {


  const carouselItems = [
    {
      src: require("assets/img/denys.jpg"),
      altText: "Slide 1",
      caption: "",
    },
    {
      src: require("assets/img/fabien-bazanegue.jpg"),
      altText: "Slide 2",
      caption: "",
    },
    {
      src: require("assets/img/mark-finn.jpg"),
      altText: "Slide 3",
      caption: "",
    },
  ];

  return (
    <div className="section">
        <Container>
          <div className="title">
            {/* <h3>Carousel</h3> */}
          </div>
          <Row className="justify-content-between align-items-center">
            <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
            </Col>
            <Col className="mb-5 mb-lg-0 list-section" lg="5">
              <h1 className="text-white font-weight-light landing-head">
                {title}
              </h1>
              <p className="text-white mt-4">
              {description}
              </p>
              <ul className='text-white mt-4'>
                <li>{b1}</li>
                <li>{b2}</li>
                <li>{b3}</li>
                <li>{b4}</li>
                {/* <li>{b5}</li>
                <li>{b6}</li> */}
              </ul>
              <Button
                className="mt-4 button-request1"
                color="warning"
                href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/alert"
              >
                Request Quote NOW!
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
  )
}
