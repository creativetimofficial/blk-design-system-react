import React from 'react'
import { Button, Container, Card, CardImg, CardImgOverlay, CardTitle, Row, Col } from "reactstrap";

// import Slider from "react-slick";


import './JoinTeam.css'
import IndexNavbar from 'components/Navbars/IndexNavbar';
// import avatarPhoto from '../assets/img/avatar.svg'
// import wellSoonIMG from '../assets/img/well-soon.jpg'
import backPhoto from '../assets/img/clean-place.jpg'
import teamPhoto from '../assets/img/team.jpg'
import Footer from 'components/Footer/Footer';
import MediaQuery from 'react-responsive'


// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1
// };

// const items = [
//   {
//     src: 'https://picsum.photos/id/123/1200/400',
//     altText: 'Slide 1',
//     header: 'Tamika P',
//     caption: 'Michael was very knowledgable and professional, he was on time and went striaght to work. I defitly will be using him again...',
//     key: 1,
//   },
//   {
//     src: 'https://picsum.photos/id/456/1200/400',
//     altText: 'Slide 2',
//     header: 'Michael J',
//     caption: 'Michael was great, I would recommend him to anyone...',
//     key: 2,
//   },
//   {
//     src: 'https://picsum.photos/id/678/1200/400',
//     altText: 'Slide 3',
//     header: 'Brenda B',
//     caption: 'Michael was very pleasant and thorough. Hard worker...',
//     key: 3,
//   },
// ];


export default function JoinTeam() {

  // const [activeIndex, setActiveIndex] = useState(0);
  // const [animating, setAnimating] = useState(false);

  // const next = () => {
  //   if (animating) return;
  //   const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
  //   setActiveIndex(nextIndex);
  // };

  // const previous = () => {
  //   if (animating) return;
  //   const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
  //   setActiveIndex(nextIndex);
  // };

  // const goToIndex = (newIndex) => {
  //   if (animating) return;
  //   setActiveIndex(newIndex);
  // };

  // const slides = items.map((item) => {
  //   return (
  //     <CarouselItem
  //       onExiting={() => setAnimating(true)}
  //       onExited={() => setAnimating(false)}
  //       key={item.key}
  //     >
  //       <img src={item.src} alt={item.altText} />
  //       <CarouselCaption
  //       captionHeader={item.header}
  //         captionText={item.caption}
  //       />
  //     </CarouselItem>
  //   );
  // });

  return (
    <>
  <IndexNavbar />
  {/* <div className='new'> */}
    <Container>
      <div className='back'>
        {/* <h3>About Us</h3> */}
        <Card className='text-center mt-5'>
    <CardImg
      className="imageHero"
      alt="Card image cap"
      src={backPhoto}
      style={{
        height: 570
      }}
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle className='newTitle' tag="h1">
        Join Our Team
      </CardTitle>
    </CardImgOverlay>
  </Card>

      </div>

      <div className='follow'>
      <Row className='follow1'>
    <Col>
        <div className='paragraph'>
          <h2>Top Pay, Paid Training</h2>
          <p>Are you looking to become part of a growing family-friendly company? At Green Clean Plus, you’ll never have to work nights or weekends. You will get home not long after the kids get home from school. We offer full and part-time positions.</p>
          <p>Become part of an elite team of house cleaning professionals</p>
          <span>What we are looking for</span>
          <ul>
            <li>Punctuality</li>
            <li>Flexibility</li>
            <li>Dependability</li>
            <li>Trustworthiness</li>
            <li>Thoroughness</li>
          </ul>
          <span>What We Offer</span>
          <ul>
            <li>Great compensation</li>
            <li>Paid training</li>
            <li>Low stress, easy dress code</li>
            <li>Full or part-time positions</li>
            <li>Eco-Friendly cleaning products for your well being</li>
          </ul>
          <Button color="primary">
    Apply Now
  </Button>
        </div>
        </Col>
        <Col>
        <MediaQuery minWidth={993}>
        <img src={teamPhoto} alt="career" />
        </MediaQuery>
       
        </Col>
      </Row>
      </div>
  {/* <hr /> */}
      {/* <div>
        <div>Text</div>
        <div>Photo</div>
      </div> */}

    </Container>
    {/* </div> */}
    <Footer />
    </>
  )
}
