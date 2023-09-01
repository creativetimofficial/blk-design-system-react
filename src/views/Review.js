import React from 'react'

import './Review.css'

import Slider from "react-slick";
import { Container } from 'reactstrap';


const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  lazyLoad: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const items = [
  {
    src: "https://picsum.photos/id/123/1200/400",
    altText: "Slide 1",
    header: "Tamika P",
    caption:
      "Michael was very knowledgable and professional, he was on time and went striaght to work. I defitly will be using him again...",
    key: 1,
  },
  {
    src: "https://picsum.photos/id/456/1200/400",
    altText: "Slide 2",
    header: "Michael J",
    caption: "Michael was great, I would recommend him to anyone...",
    key: 2,
  },
  {
    src: "https://picsum.photos/id/678/1200/400",
    altText: "Slide 3",
    header: "Brenda B",
    caption: "Michael was very pleasant and thorough. Hard worker...",
    key: 3,
  },
];

export default function Review() {
  return (

<Container>


<Slider autoplay={true} centerMode infinite className='slider-car'  {...settings}>
            <div className="car">
              <h3>Tamika P.</h3>
              <div>
              <i class="fas fa-star iconStar"></i>
              <i class="fas fa-star iconStar"></i>
              <i class="fas fa-star iconStar"></i>
              <i class="fas fa-star iconStar"></i>
              <i class="fas fa-star iconStar"></i>
              </div>
              {/* <p>5 Stars</p> */}
              <p className='review-headline'>Awesome Job!</p>
              <p>
                Michael was very knowledgable and professional...
              </p>
            </div>
            <div className="car">
              <h3>Michael J.</h3>
              {/* <p>5 Stars</p>
               */}
                      <div>
              <i class="fas fa-star iconStar"></i>
              <i class="fas fa-star iconStar"></i>
              <i class="fas fa-star iconStar"></i>
              <i class="fas fa-star iconStar"></i>
              <i class="fas fa-star iconStar"></i>
              </div>
              <p className='review-headline'>Highly Recommend!</p>
              <p className='endPara'>Michael was great, I would recommend him to anyone...</p>
            </div>
            <div className="car">
              <h3>Brenda B.</h3>
              <div>
              <i class="fas fa-star iconStar"></i>
              <i class="fas fa-star iconStar"></i>
              <i class="fas fa-star iconStar"></i>
              <i class="fas fa-star iconStar"></i>
              <i class="fas fa-star iconStar"></i>
              </div>
              {/* <p>5 Stars</p> */}
              <p className='review-headline'>Great Job!</p>
              <p>Michael was very pleasant and thorough. Hard worker...</p>
            </div>
          </Slider>
          </Container>



  )
}
