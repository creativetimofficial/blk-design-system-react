import React from 'react'
import { Button, Card, CardImg, CardImgOverlay, CardTitle, Container } from 'reactstrap'
import backPhoto from "../assets/img/clean-book.jpg";

import './BookNow.css'


export default function BookNow() {
  return (
    
    <Container>

<Card className="text-center mt-5">
            <CardImg
              alt="Card image cap"
              src={backPhoto}
              style={{
                height: 435,
              }}
              width="100%"
            />
            <CardImgOverlay>
              <CardTitle className="newTitle4" tag="h2">
                <div className='wrapper-BookNow'>
                  <h2>Book Your Clean Today</h2>
                  {/* <p>Book Now</p> */}
                  <Button
                className="button1"
                color="primary"
                target="_blank"
                href="https://www.creative-tim.com/product/blk-design-system-pro-react?ref=bdsr-user-archive-index-navbar-upgrade-pro"
              >
                <i className="tim-icons icon-spaceship" /> Request A Quote Now!
              </Button>
                </div>
              </CardTitle>
              {/* <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </CardText> */}
            </CardImgOverlay>
          </Card>


    </Container>
  )
}
