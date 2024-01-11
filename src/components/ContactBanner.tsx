import React from 'react'
import Image from 'next/image'

import banner from '../assets/images/banner.svg'
import { convertBreaks } from '../common/helpers'

export const ContactBanner: React.FC<{
  title: string
  subtitle: string
  ctaText: string
}> = ({ title, subtitle, ctaText }) => {
  return (
    <section id="contact" className="w-100 banner-section">
      <div className="banner">
        <div>
          <h2 className="display-6 fw-semibold">{convertBreaks(title)}</h2>
          <p className="fs-5 mb-4">{convertBreaks(subtitle)}</p>
          <button
            type="button"
            className="btn btn-secondary rounded-pill fs-5 fw-bold position-relative"
            style={{ zIndex: 10 }}
          >
            {ctaText}
          </button>
        </div>
        <Image src={banner} alt="Banner" width={440} height={565} className="mw-100" />
      </div>
    </section>
  )
}
