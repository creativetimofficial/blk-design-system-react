'use client'

import React, { useRef, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

import useOnScreen from '@/common/useOnScreen'
import { FeaturesLang } from '@/types'

const Slider = dynamic(() => import('./FeaturesSlider'))

export const Features: React.FC<FeaturesLang> = ({ lang }) => {
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
        <span className="fw-semibold fs-12 text-sunset w-100 d-block text-center">{lang.section}</span>
        <h2 className="my-4 display-5 text-center fw-semibold">{lang.title}</h2>
        <p className="fs-5 px-3 text-center mx-auto" style={{ maxWidth: '630px' }}>
          {lang.description}
        </p>
        <div className="w-100" ref={ref}>
          {show && <Slider lang={lang} />}
        </div>
      </div>
    </section>
  )
}
