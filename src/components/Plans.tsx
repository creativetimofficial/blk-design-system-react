import React from 'react'
import Image from 'next/image'

import check from '../assets/images/icons/check.svg'

export const Plans: React.FC = () => {
  const data = [
    {
      id: 1,
      title: 'Basic Plan',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
      price: '$35.00',
      specs: [
        'Nemo enim ipsam.',
        'Voluptatem quia voluptas sit.',
        'Aspernatur aut odit aut fugit.',
        'Sed quia consequuntur.',
        'Magni dolores eos qui.',
        'Ratione voluptatem sequi nesciunt.',
      ],
    },
    {
      id: 2,
      title: 'Basic Plan',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
      price: '$35.00',
      specs: [
        'Nemo enim ipsam.',
        'Voluptatem quia voluptas sit.',
        'Aspernatur aut odit aut fugit.',
        'Sed quia consequuntur.',
        'Magni dolores eos qui.',
        'Ratione voluptatem sequi nesciunt.',
      ],
    },
    {
      id: 3,
      title: 'Basic Plan',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
      price: '$35.00',
      specs: [
        'Nemo enim ipsam.',
        'Voluptatem quia voluptas sit.',
        'Aspernatur aut odit aut fugit.',
        'Sed quia consequuntur.',
        'Magni dolores eos qui.',
        'Ratione voluptatem sequi nesciunt.',
      ],
    },
    {
      id: 4,
      title: 'Basic Plan',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
      price: '$35.00',
      specs: [
        'Nemo enim ipsam.',
        'Voluptatem quia voluptas sit.',
        'Aspernatur aut odit aut fugit.',
        'Sed quia consequuntur.',
        'Magni dolores eos qui.',
        'Ratione voluptatem sequi nesciunt.',
      ],
    },
  ]

  return (
    <section id="pricing" className="plan-section w-100 bg-primary">
      <div className="mw-1200">
        <span className="fw-semibold fs-12 text-sunset w-100 d-block text-center">PRICING</span>
        <h2 className="my-4 pb-3 pb-md-5 display-5 text-center fw-semibold">
          Choose your plan according to your needs
        </h2>
        <div className="plans-grid">
          {data.map(el => (
            <div key={el.id} className="plan-card">
              <h3 className="fw-semibold fs-18 mb-3">{el.title}</h3>
              <p className="fs-5">{el.description}</p>
              <div className="price fs-1">
                {el.price} <span className="fs-5">U: 1-5</span>
              </div>
              <button type="button" className="get-plan fs-5">
                Get {el.title}
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
