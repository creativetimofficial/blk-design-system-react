import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import savings from '../assets/images/icons/savings.svg'
import visibility from '../assets/images/icons/visibility.svg'
import customer from '../assets/images/icons/customer.svg'
import error from '../assets/images/icons/error.svg'
import integration from '../assets/images/icons/integration.svg'
import { BenefitsLang } from '../types'

const BenefitsSlider: React.FC<BenefitsLang> = ({ lang }) => {
  const data = [
    {
      id: '1',
      name: lang.benefits[0].title,
      description: lang.benefits[0].description,
      image: savings,
    },
    {
      id: '2',
      name: lang.benefits[1].title,
      description: lang.benefits[1].description,
      image: visibility,
    },
    {
      id: '3',
      name: lang.benefits[2].title,
      description: lang.benefits[2].description,
      image: customer,
    },
    {
      id: '4',
      name: lang.benefits[3].title,
      description: lang.benefits[3].description,
      image: error,
    },
    {
      id: '5',
      name: lang.benefits[4].title,
      description: lang.benefits[4].description,
      image: integration,
    },
  ]
  return (
    <Swiper
      id="benefits-slider"
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
      }}
    >
      {data.map(el => (
        <SwiperSlide key={`card-${el.id}`}>
          <div className="benefit">
            <Image src={el.image} alt={el.name} width={50} height={50} />
            <p>
              <span>{el.name}</span>
              {el.description}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default BenefitsSlider
