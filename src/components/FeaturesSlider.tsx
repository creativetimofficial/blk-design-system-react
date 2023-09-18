import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import route from '../assets/images/slider/route.png'
import monitor from '../assets/images/slider/monitoring.png'
import mobile from '../assets/images/slider/app.png'

const FeaturesSlider: React.FC = () => {
  const data = [
    {
      id: '1',
      name: 'Route Optimization',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
      image: route,
    },
    {
      id: '2',
      name: 'Real-Time Monitoring',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
      image: monitor,
    },
    {
      id: '3',
      name: 'Mobile App',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
      image: mobile,
    },
    {
      id: '4',
      name: 'GEO Fences',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
      image: route,
    },
    {
      id: '5',
      name: 'Traffic Simulator',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
      image: monitor,
    },
    {
      id: '6',
      name: 'API',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
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
