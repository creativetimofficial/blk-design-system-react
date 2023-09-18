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

const BenefitsSlider: React.FC = () => {
  const data = [
    {
      id: '1',
      name: 'Time and Money Savings',
      description: `The route optimization offered by Hermes solution allows companies to save time and money in the process of
        delivering their products. By planning routes efficiently, drivers can deliver more products in less time,
        reducing operating costs and increasing efficiency.`,
      image: savings,
    },
    {
      id: '2',
      name: 'Increased Visibility and Control',
      description: `Hermes solution provides complete visibility of the vehicle fleet, allowing companies to monitor the
        progress of deliveries and quickly respond to any issues or setbacks that arise. With Hermes solution,
        companies can have greater control over their delivery operations.`,
      image: visibility,
    },
    {
      id: '3',
      name: 'Improved Customer Satisfaction',
      description: `With real-time monitoring and delivery to the correct areas thanks to geofencing, end customers receive
        their products on time, improving their satisfaction with the service and increasing customer loyalty.`,
      image: customer,
    },
    {
      id: '4',
      name: 'Error and Delay Reduction',
      description: `The route optimization offered by Hermes solution allows companies to save time and money in the process of
        delivering their products. By planning routes efficiently, drivers can deliver more products in less time,
        reducing operating costs and increasing efficiency.`,
      image: error,
    },
    {
      id: '5',
      name: 'Easy integration with existing systems',
      description: `Hermes solution offers complete visibility of the vehicle fleet, allowing companies to monitor delivery
        progress and respond quickly to any problems or setbacks that may arise. With Hermes solution, companies can
        have greater control over their delivery operations and easily integrate with their existing systems.`,
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
