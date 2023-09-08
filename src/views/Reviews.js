import React from "react";
import {
  Container,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";


import "./Reviews.css";
import IndexNavbar from "components/Navbars/IndexNavbar";
// import avatarPhoto from "../assets/img/avatar.svg";
// import wellSoonIMG from "../assets/img/well-soon.jpg";
import backPhoto from "../assets/img/clean-place.jpg";
import Review from "./Review";
import Footer from "components/Footer/Footer";



export default function Reviews() {

  return (
    <>
      <IndexNavbar />
      <Container>
        <div className="back">
          {/* <h3>About Us</h3> */}
          <Card className="text-center mt-5">
            <CardImg
              className="imageHero"
              alt="Card image cap"
              src={backPhoto}
              style={{
                height: 570,
              }}
              width="100%"
            />
            <CardImgOverlay>
              <CardTitle className="newTitle" tag="h1">
                Reviews
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
        </div>
        <div>
          <p className="review-para">
            There is a reason why Green Clean Plus has earned such great ratings
            and reviews. Simply put, we do what we say we'll do every time we
            clean. And, if we ever drop the ball, we'll make it right - always.
            We have an amazing staff of professional cleaning technicians that
            know how to make things shine, but more importantly, they care about
            their customers. Our office staff is friendly, helpful, and always
            focused on providing great customer service.
          </p>
          <hr />

          {/* <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel> */}

          <Review />
        </div>
        {/* <hr /> */}
        {/* <div>
        <div>Text</div>
        <div>Photo</div>
      </div> */}
      </Container>
      <Footer />
    </>
  );
}
