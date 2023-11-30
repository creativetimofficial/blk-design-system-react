import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import route from '../assets/images/slider/route.png'
import monitor from '../assets/images/slider/monitoring.png'
import mobile from '../assets/images/slider/app.png'
import { FeaturesLang } from '../types'

const FeaturesSlider: React.FC<FeaturesLang> = ({ lang }) => {
  const data = [
    {
      id: '1',
      name: lang.features[0].title,
      description: lang.features[0].description,
      image: route,
    },
    {
      id: '2',
      name: lang.features[1].title,
      description: lang.features[1].description,
      image: monitor,
    },
    {
      id: '3',
      name: lang.features[2].title,
      description: lang.features[2].description,
      image: mobile,
    },
    {
      id: '4',
      name: lang.features[3].title,
      description: lang.features[3].description,
      image: route,
    },
    {
      id: '5',
      name: lang.features[4].title,
      description: lang.features[4].description,
      image: monitor,
    },
    {
      id: '6',
      name: lang.features[5].title,
      description: lang.features[5].description,
      image: mobile,
    },
  ]
  return (
    <Swiper
      id="features-slider"
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1100: {
          slidesPerView: 3,
        },
      }}
    >
      {data.map(item => (
        <SwiperSlide key={`card-${item.id}`}>
          <div className="feature-card">
            <Image src={item.image} alt={item.name} width={360} className="feature-image mw-100" />
            <div className="feature-data">
              <h3 className="fs-18 mb-3 fw-semibold">{item.name}</h3>
              <p className="fs-6">{item.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default FeaturesSlider
