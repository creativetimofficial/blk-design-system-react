'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import savings from '../assets/images/icons/savings.svg'
import visibility from '../assets/images/icons/visibility.svg'
import customer from '../assets/images/icons/customer.svg'
import error from '../assets/images/icons/error.svg'
import integration from '../assets/images/icons/integration.svg'
import useOnScreen from '../common/useOnScreen'

const Slider = dynamic(() => import('./BenefitsSlider'))

export const Benefits: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const render = useOnScreen(ref)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!show && render) {
      setShow(true)
    }
  }, [render, show])

  return (
    <section id="benefits" className="mw-1200 pt-0 pt-md-5 px-3">
      <span className="fs-12 text-sunset fw-semibold">BENEFITS</span>
      <h2 className="display-5 fw-semibold pb-5 pt-4">Your benefits</h2>

      <div className="benefits-grid fs-5">
        <div className="item">
          <Image src={savings} alt="Time and Money Savings" width={50} height={50} />
          <p>
            <span>Time and Money Savings</span>
            The route optimization offered by Hermes solution allows companies to save time and money in the process of
            delivering their products. By planning routes efficiently, drivers can deliver more products in less time,
            reducing operating costs and increasing efficiency.
          </p>
        </div>
        <div className="item">
          <Image src={visibility} alt="Increased Visibility and Control" width={50} height={50} />
          <p>
            <span>Increased Visibility and Control</span>
            Hermes solution provides complete visibility of the vehicle fleet, allowing companies to monitor the
            progress of deliveries and quickly respond to any issues or setbacks that arise. With Hermes solution,
            companies can have greater control over their delivery operations.
          </p>
        </div>
        <div className="item">
          <Image src={customer} alt="Improved Customer Satisfaction" width={50} height={50} />
          <p>
            <span>Improved Customer Satisfaction</span>
            With real-time monitoring and delivery to the correct areas thanks to geofencing, end customers receive
            their products on time, improving their satisfaction with the service and increasing customer loyalty.
          </p>
        </div>
        <div className="item">
          <Image src={error} alt="Error and Delay Reduction" width={50} height={50} />
          <p>
            <span>Error and Delay Reduction</span>
            The route optimization offered by Hermes solution allows companies to save time and money in the process of
            delivering their products. By planning routes efficiently, drivers can deliver more products in less time,
            reducing operating costs and increasing efficiency.
          </p>
        </div>
        <div className="item">
          <Image src={integration} alt="Easy integration with existing systems" width={50} height={50} />
          <p>
            <span>Easy integration with existing systems</span>
            Hermes solution offers complete visibility of the vehicle fleet, allowing companies to monitor delivery
            progress and respond quickly to any problems or setbacks that may arise. With Hermes solution, companies can
            have greater control over their delivery operations and easily integrate with their existing systems.
          </p>
        </div>
      </div>

      {/** Mobile */}
      <div ref={ref} className="d-block d-md-none">
        {show && <Slider />}
      </div>
    </section>
  )
}
