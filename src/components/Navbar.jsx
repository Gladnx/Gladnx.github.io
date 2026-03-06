import React, { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem('darkMode') === 'true'
    } catch {
      return false
    }
  })

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode)
    try {
      localStorage.setItem('darkMode', String(darkMode))
    } catch {
      // ignore
    }
  }, [darkMode])

  // Close the mobile menu when clicking outside
  useEffect(() => {
    function onDocClick(e) {
      const nav = document.querySelector('nav')
      if (!nav) return
      if (!nav.contains(e.target)) setMenuOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  // Scroll-spy: highlight the section currently in view (home page only)
  useEffect(() => {
    if (location.pathname !== '/') return

    const sectionIds = ['home', 'about', 'skills', 'projects', 'contact']

    const navEl = document.querySelector('nav')
    const navHeight = navEl ? navEl.offsetHeight : 0

    let raf = 0
    function onScroll() {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        // Find the section whose top is closest to (but above) the navbar bottom
        let current = sectionIds[0]
        for (const id of sectionIds) {
          const el = document.getElementById(id)
          if (!el) continue
          const top = el.getBoundingClientRect().top
          // Section is "active" when its top has scrolled past the navbar
          if (top <= navHeight + 60) {
            current = id
          }
        }

        setActiveSection(current)
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // run once on mount

    // If URL has a hash, use that initially
    if (location.hash) {
      const initial = location.hash.replace('#', '')
      if (sectionIds.includes(initial)) setActiveSection(initial)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [location.pathname, location.hash])

  // Close on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  const iconClass = useMemo(() => (darkMode ? 'fas fa-moon' : 'fas fa-sun'), [darkMode])

  function goToHash(hash) {
    // If already on home route, just update hash
    if (location.pathname === '/') {
      navigate({ pathname: '/', hash })
      return
    }
    // From other pages, route back home with hash
    navigate({ pathname: '/', hash })
  }

  const HomeLinks = (
    <>
      {[
        ['home', 'Home'],
        ['about', 'About'],
        ['skills', 'Skills'],
        ['projects', 'Projects'],
        ['contact', 'Contact']
      ].map(([id, label]) => (
        <li key={id}>
          <button
            className={`${styles.navLink} ${activeSection === id ? styles.navLinkActive : ''}`}
            onClick={() => goToHash(`#${id}`)}
          >
            {label}
          </button>
        </li>
      ))}
    </>
  )

  return (
    <nav className={styles.nav}>
      <div>
        <Link to="#home" className={styles.navLogo}>Gladwin George</Link>
      </div>

      <div className={`${styles.navMenu} ${menuOpen ? styles.active : ''}`}>
        <ul className={styles.navList}>
          {HomeLinks}
          <li>
            <a
              href="https://drive.google.com/file/d/YOUR_FILE_ID/view"
              target="_blank"
              rel="noreferrer"
              className={styles.navLink}
            >
              RESUME
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.darkModeContainer}>
        <button className={styles.darkModeToggle} onClick={() => setDarkMode(v => !v)} aria-label="Toggle dark mode">
          <i className={`${styles.darkModeIcon} ${iconClass}`}></i>
        </button>
      </div>

      <div className={styles.navContainer}>
        <button
          className={`${styles.navToggle} ${menuOpen ? styles.active : ''}`}
          onClick={(e) => {
            e.stopPropagation()
            setMenuOpen(true)
          }}
          aria-label="Open menu"
        >
          <i className="ri-menu-line"></i>
        </button>
        <button
          className={`${styles.navClose} ${menuOpen ? styles.active : ''}`}
          onClick={(e) => {
            e.stopPropagation()
            setMenuOpen(false)
          }}
          aria-label="Close menu"
        >
          <i className="ri-close-line"></i>
        </button>
      </div>
    </nav>
  )
}
