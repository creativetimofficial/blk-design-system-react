import React from 'react'
import Image from 'next/image'

import fb from '../assets/images/icons/fb.svg'
import ins from '../assets/images/icons/ins.svg'
import x from '../assets/images/icons/x.svg'
import tel from '../assets/images/icons/tel.svg'

export const Footer: React.FC = () => {
  return (
    <footer className="w-100">
      <div className="mw-1200">
        <div className="d-flex justify-content-between align-items-center pb-0 pb-md-5">
          <Image src="/small-logo.svg" alt="Hermes Logistic" width={170} height={70} />
          <ul className="social">
            <li>
              <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                <Image src={fb} alt="Facebook" width={30} height={30} />
              </a>
            </li>
            <li>
              <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                <Image src={ins} alt="Instagram" width={30} height={30} />
              </a>
            </li>
            <li>
              <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                <Image src={x} alt="X" width={30} height={30} />
              </a>
            </li>
            <li>
              <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                <Image src={tel} alt="Telegram" width={30} height={30} />
              </a>
            </li>
          </ul>
        </div>

        <div className="terms">
          <span className="fs-12">©Hermes Company. All Rights Reserved</span>
          <a href="http://google.com" target="_blank" rel="noopener noreferrer" className="fs-12">
            Privacy Policy
          </a>
          <a href="http://google.com" target="_blank" rel="noopener noreferrer" className="fs-12">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  )
}
