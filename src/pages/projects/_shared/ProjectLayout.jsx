import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../components/Navbar.jsx'
import Footer from '../../../components/Footer.jsx'
import GoUpButton from '../../../components/GoUpButton.jsx'

function scrollToId(id) {
  const target = document.getElementById(id)
  if (!target) return
  const navbar = document.querySelector('nav')
  const navHeight = navbar ? navbar.offsetHeight : 0
  const extraTopGap = 50
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - extraTopGap
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

  const childArray = React.Children.toArray(children)

  const isHeadingElement = (child) =>
    React.isValidElement(child) && typeof child.type === 'string' && ['h1', 'h2', 'h3'].includes(child.type)

  const overviewIndex = childArray.findIndex((child) => isHeadingElement(child) && child.props.id === 'overview')

  const fallbackOverviewIndex = childArray.findIndex(
    (child) => isHeadingElement(child) && (child.props.id === 'introduction' || child.props.id === 'title')
  )

  const overviewStartIndex =
    overviewIndex >= 0
      ? overviewIndex
      : fallbackOverviewIndex >= 0
        ? fallbackOverviewIndex
        : childArray.findIndex((child) => {
            if (!isHeadingElement(child)) return false
            const className = typeof child.props.className === 'string' ? child.props.className : ''
            return className.includes('specific-heading') || child.props.id === 'learnmore-title'
          })

  const nextSectionIndex =
    overviewStartIndex >= 0
      ? childArray.findIndex(
          (child, index) => index > overviewStartIndex && isHeadingElement(child) && child.type === 'h2'
        )
      : -1

  const tocInsertBeforeIndex =
    nextSectionIndex >= 0 ? nextSectionIndex : overviewStartIndex >= 0 ? childArray.length : 0

  const inlineToc = toc.length > 0 && (
    <aside className="toc toc-inline" key="inline-toc">
      <h1>Table of Contents</h1>
      <ul>
        {toc.map(([id, label]) => (
          <li key={`inline-${id}`}>
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
  )

  const contentWithInlineToc = childArray.flatMap((child, index) => {
    if (index === tocInsertBeforeIndex && inlineToc) {
      return [inlineToc, child]
    }
    return [child]
  })

  if (tocInsertBeforeIndex === childArray.length && inlineToc) {
    contentWithInlineToc.push(inlineToc)
  }

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
        {contentWithInlineToc}

        <div style={{ marginTop: '2rem', textAlign: 'left' }}>
          <Link to="/#other-projects" className="back_btn" style={{ display: 'inline-block' }}>
            ← Back to Projects
          </Link>
        </div>
      </div>

      <GoUpButton />
      <Footer />
    </>
  )
}
