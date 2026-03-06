import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  const navigate = useNavigate()

  const goToHash = (hash) => {
    navigate({ pathname: '/', hash })
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h1 className={styles.brand}>GLADWIN GEORGE</h1>
          <div className={styles.socialContact}>
            <a href="https://www.linkedin.com/in/gladwin-george-" target="_blank" rel="noreferrer" className={styles.socialIcon}>
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/Gladnx" target="_blank" rel="noreferrer" className={styles.socialIcon}>
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="mailto:your.gladwingeorge189@gmail.com" className={styles.socialIcon}>
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className={styles.footerColumn}>
          <h3>CONTENTS</h3>
          <ul>
            <li><a href="#home" className={styles.footerLink} onClick={(e) => { e.preventDefault(); goToHash('#home') }}>Home</a></li>
            <li><a href="#about" className={styles.footerLink} onClick={(e) => { e.preventDefault(); goToHash('#about') }}>About</a></li>
            <li><a href="#skills" className={styles.footerLink} onClick={(e) => { e.preventDefault(); goToHash('#skills') }}>Skills</a></li>
            <li><a href="#projects" className={styles.footerLink} onClick={(e) => { e.preventDefault(); goToHash('#projects') }}>Projects</a></li>
            <li><a href="#contact" className={styles.footerLink} onClick={(e) => { e.preventDefault(); goToHash('#contact') }}>Contact</a></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3>SOCIAL LINKS</h3>
          <ul>
            <li><a href="https://www.linkedin.com/in/gladwin-george-" target="_blank" rel="noreferrer" className={styles.footerLink}>Linkedin</a></li>
            <li><a href="https://github.com/Gladnx" target="_blank" rel="noreferrer" className={styles.footerLink}>Github</a></li>
            <li><a href="mailto:your.gladwingeorge189@gmail.com" className={styles.footerLink}>Gmail</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.footerCopyright}>
        Crafted with code by Gladwin George 
      </div>
    </footer>
  )
}
