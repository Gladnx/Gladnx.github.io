import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialContact}>
        <a href="https://www.linkedin.com/in/gladwin-george-" target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/Gladnx" target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label="GitHub">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="mailto:your.gladwingeorge189@gmail.com" className={styles.socialIcon} aria-label="Email">
          <i className="fas fa-envelope"></i>
        </a>
      </div>

      <div className={styles.footerCopyright}>
        Crafted and coded by Gladwin George
      </div>
    </footer>
  )
}
