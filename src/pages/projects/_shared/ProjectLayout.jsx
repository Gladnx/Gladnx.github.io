import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../components/Navbar.jsx'
import Footer from '../../../components/Footer.jsx'

function scrollToId(id) {
  const target = document.getElementById(id)
  if (!target) return
  const navbar = document.querySelector('nav')
  const navHeight = navbar ? navbar.offsetHeight : 0
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 10
  window.scrollTo({ top: targetPosition, behavior: 'smooth' })
}

/**
 * Layout that matches your original Project 1 Learn More page:
 * - Left TOC sidebar
 * - Main content area
 * - Back-to-home button
 */
export default function ProjectLayout({ toc = [], children }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />

      <aside className="toc">
        <h1>Table of Contents</h1>
        <ul>
          {toc.map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId(id)
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      <div className="content">
        {children}

        <div style={{ marginTop: '2rem', textAlign: 'left' }}>
          <Link to="/#projects" className="back_btn" style={{ display: 'inline-block' }}>
            ← Back to Projects
          </Link>
        </div>
      </div>

      <Footer />
    </>
  )
}
