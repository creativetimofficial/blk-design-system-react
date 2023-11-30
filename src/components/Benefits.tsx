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
import { BenefitsLang } from '../types'

const Slider = dynamic(() => import('./BenefitsSlider'))

export const Benefits: React.FC<BenefitsLang> = ({ lang }) => {
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
      <span className="fs-12 text-sunset fw-semibold">{lang.section}</span>
      <h2 className="display-5 fw-semibold pb-5 pt-4">{lang.title}</h2>

      <div className="benefits-grid fs-5">
        <div className="item">
          <Image src={savings} alt="Time and Money Savings" width={50} height={50} />
          <p>
            <span>{lang.benefits[0].title}</span>
            {lang.benefits[0].description}
          </p>
        </div>
        <div className="item">
          <Image src={visibility} alt="Increased Visibility and Control" width={50} height={50} />
          <p>
            <span>{lang.benefits[1].title}</span>
            {lang.benefits[1].description}
          </p>
        </div>
        <div className="item">
          <Image src={customer} alt="Improved Customer Satisfaction" width={50} height={50} />
          <p>
            <span>{lang.benefits[2].title}</span>
            {lang.benefits[2].description}
          </p>
        </div>
        <div className="item">
          <Image src={error} alt="Error and Delay Reduction" width={50} height={50} />
          <p>
            <span>{lang.benefits[3].title}</span>
            {lang.benefits[3].description}
          </p>
        </div>
        <div className="item">
          <Image src={integration} alt="Easy integration with existing systems" width={50} height={50} />
          <p>
            <span>{lang.benefits[4].title}</span>
            {lang.benefits[4].description}
          </p>
        </div>
      </div>

      {/** Mobile */}
      <div ref={ref} className="d-block d-md-none">
        {show && <Slider lang={lang} />}
      </div>
    </section>
  )
}
