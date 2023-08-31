import React, { useState } from 'react'
import { Container, Card, CardImg, CardImgOverlay, CardTitle, CardText, Row, Col,  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption, } from "reactstrap";

import Slider from "react-slick";


import './Reviews.css'
import IndexNavbar from 'components/Navbars/IndexNavbar';
import avatarPhoto from '../assets/img/avatar.svg'
import wellSoonIMG from '../assets/img/well-soon.jpg'
import backPhoto from '../assets/img/clean-back.jpg'


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const items = [
  {
    src: 'https://picsum.photos/id/123/1200/400',
    altText: 'Slide 1',
    header: 'Tamika P',
    caption: 'Michael was very knowledgable and professional, he was on time and went striaght to work. I defitly will be using him again...',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/456/1200/400',
    altText: 'Slide 2',
    header: 'Michael J',
    caption: 'Michael was great, I would recommend him to anyone...',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/678/1200/400',
    altText: 'Slide 3',
    header: 'Brenda B',
    caption: 'Michael was very pleasant and thorough. Hard worker...',
    key: 3,
  },
];


export default function Reviews() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
        captionHeader={item.header}
          captionText={item.caption}
          
        />
      </CarouselItem>
    );
  });

  return (
    <>
  <IndexNavbar />
    <Container>
      
      <div className='back'>
        {/* <h3>About Us</h3> */}
        <Card className='text-center mt-5'>
    <CardImg
      alt="Card image cap"
      src={backPhoto}
      style={{
        height: 570
      }}
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle className='newTitle' tag="h1">
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
<p>
There is a reason why Green Clean Plus has earned such great ratings and reviews. Simply put, we do what we say we'll do every time we clean.  And, if we ever drop the ball, we'll make it right - always.  We have an amazing staff of professional cleaning technicians that know how to make things shine, but more importantly, they care about their customers.  Our office staff is friendly, helpful, and always focused on providing great customer service.
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

<Slider {...settings}>
          <div className='car'>
            <h3>Tamika P</h3>
            <p>5 Stars</p>
            <p>Awesome Job!</p>
            <p>Michael was very knowledgable and professional, he was on time and went striaght to work. I defitly will be using him again...</p>
          </div>
          <div className='car'>
            <h3>Michael J</h3>
            <p>5 Stars</p>
            <p>Highly Recommend!</p>
            <p>Michael was great, I would recommend him to anyone...</p>
          </div>
          <div className='car'>
            <h3>Brenda B</h3>
            <p>5 Stars</p>
            <p>Great Job!</p>
            <p>Michael was very pleasant and thorough. Hard worker...</p>
          </div>
        </Slider>

      </div>
  <hr />
      {/* <div>
        <div>Text</div>
        <div>Photo</div>
      </div> */}

      
    
    </Container>
    </>
  )
}
