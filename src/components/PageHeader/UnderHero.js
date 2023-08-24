import React from 'react'
import { Button, Col, Container, Row, UncontrolledCarousel } from 'reactstrap'
import './UnderHero.css'


export default function UnderHero() {


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
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="text-white font-weight-light">
                Clean Home = Easy Life
              </h1>
              <p className="text-white mt-4">
                Without Spot Or Blemish team takes pride in delivering the best and most reliable house cleaning services. Our trained cleaning experts are bonded, insured, workers compensation (WSIB) covered, security checked and trustworthy..
              </p>
              <p className='text-white mt-4'>Without Spot Or Blemish offers professional house cleaning services to clients across Almonte, Carleton Place and Carp.</p>
              <Button
                className="mt-4"
                color="warning"
                href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/alert"
              >
                Request Quote NOW!
              </Button>
            </Col>
            <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
            </Col>
          </Row>
        </Container>
      </div>
  )
}
