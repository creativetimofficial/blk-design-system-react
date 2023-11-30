import React from 'react'
import Image from 'next/image'

import check from '../assets/images/icons/check.svg'
import { PricingLang } from '../types'

export const Plans: React.FC<PricingLang> = ({ lang }) => {
  const data = [
    {
      id: 1,
      title: lang.plans[0].title,
      description: lang.plans[0].description,
      price: lang.plans[0].price,
      specs: lang.plans[0].features,
      cta: lang.plans[0].cta,
    },
    {
      id: 2,
      title: lang.plans[1].title,
      description: lang.plans[1].description,
      price: lang.plans[1].price,
      specs: lang.plans[1].features,
      cta: lang.plans[1].cta,
    },
    {
      id: 3,
      title: lang.plans[2].title,
      description: lang.plans[2].description,
      price: lang.plans[2].price,
      specs: lang.plans[2].features,
      cta: lang.plans[2].cta,
    },
    {
      id: 4,
      title: lang.plans[3].title,
      description: lang.plans[3].description,
      price: lang.plans[3].price,
      specs: lang.plans[3].features,
      cta: lang.plans[3].cta,
    },
  ]

  return (
    <section id="pricing" className="plan-section w-100 bg-primary">
      <div className="mw-1200">
        <span className="fw-semibold fs-12 text-sunset w-100 d-block text-center">{lang.section}</span>
        <h2 className="my-4 pb-3 pb-md-5 display-5 text-center fw-semibold">{lang.title}</h2>
        <div className="plans-grid">
          {data.map(el => (
            <div key={el.id} className="plan-card">
              <h3 className="fw-semibold fs-18 mb-3">{el.title}</h3>
              <p className="fs-5">{el.description}</p>
              <div className="price fs-1">
                {el.price} {el.id !== 4 && <span className="fs-5">+IVA</span>}
              </div>
              <button type="button" className="get-plan fs-5">
                {el.cta}
              </button>
              <hr />
              <ul className="specs">
                {el.specs.map(spec => (
                  <li key={spec.trim()} className="fs-6">
                    <Image src={check} alt="-" width={16} height={12} /> <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
