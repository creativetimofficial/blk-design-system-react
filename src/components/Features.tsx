'use client'

import React, { useRef, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

import useOnScreen from '@/common/useOnScreen'

const Slider = dynamic(() => import('./FeaturesSlider'))

export const Features: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const render = useOnScreen(ref)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!show && render) {
      setShow(true)
    }
  }, [render, show])

  return (
    <section id="features" className="w-100 features-section">
      <div className="mw-1200">
        <span className="fw-semibold fs-12 text-sunset w-100 d-block text-center">FEATURES</span>
        <h2 className="my-4 display-5 text-center fw-semibold">Amazing features</h2>
        <p className="fs-5 px-3 text-center mx-auto" style={{ maxWidth: '630px' }}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <div className="w-100" ref={ref}>
          {show && <Slider />}
        </div>
      </div>
    </section>
  )
}
