'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY

      if (scrollPosition >= 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClick = (ev: React.MouseEvent) => {
    ev.preventDefault()
    const target = ev.currentTarget.getAttribute('href') ?? ''
    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 70,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav
      className={`navbar navbar-expand-lg position-fixed top-0 w-100 py-0 ${scrolled ? 'scrolled' : 'initial'}`}
      id="navbar"
    >
      <div className="container-fluid">
        <div className="text-secondary navbar-brand">
          <Image src="/logo.svg" alt="Hermes Logistic" width={250} height={50} className="logo" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <Link
                className="nav-link"
                href="#who-we-are"
                onClick={handleClick}
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                Who We Are
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="#benefits"
                onClick={handleClick}
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                Benefits
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="#features"
                onClick={handleClick}
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="#pricing"
                onClick={handleClick}
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="#contact"
                onClick={handleClick}
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
