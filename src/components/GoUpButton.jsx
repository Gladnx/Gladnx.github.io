import React, { useEffect, useState } from 'react'
import styles from './GoUpButton.module.css'

export default function GoUpButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const show = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
      setVisible(show)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      title="Go to top"
      style={{ display: visible ? 'block' : 'none' }}
      className={`${styles.goUpBtn} ${visible ? styles.shrinkIn : styles.shrinkOut}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <i className="ri-arrow-up-s-line"></i>
    </button>
  )
}
