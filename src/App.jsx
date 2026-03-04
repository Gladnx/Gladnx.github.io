import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'

// Top 3 projects
import Project1 from './pages/projects/top/Project1.jsx'
import Project2 from './pages/projects/top/Project2.jsx'
import Project3 from './pages/projects/top/Project3.jsx'

// Other projects (start from 4)
import Project4 from './pages/projects/other/Project4.jsx'
import Project5 from './pages/projects/other/Project5.jsx'
import Project6 from './pages/projects/other/Project6.jsx'
import Project7 from './pages/projects/other/Project7.jsx'
import Project8 from './pages/projects/other/Project8.jsx'
import Project9 from './pages/projects/other/Project9.jsx'

function useHashScroll() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    const id = location.hash.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return

    const nav = document.querySelector('nav')
    const navHeight = nav ? nav.offsetHeight : 0
    const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight - 10

    window.scrollTo({ top, behavior: 'smooth' })
  }, [location.pathname, location.hash])
}

export default function App() {
  useHashScroll()

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* Learn more pages */}
      <Route path="/projects/project-1" element={<Project1 />} />
      <Route path="/projects/project-2" element={<Project2 />} />
      <Route path="/projects/project-3" element={<Project3 />} />

      <Route path="/projects/project-4" element={<Project4 />} />
      <Route path="/projects/project-5" element={<Project5 />} />
      <Route path="/projects/project-6" element={<Project6 />} />
      <Route path="/projects/project-7" element={<Project7 />} />
      <Route path="/projects/project-8" element={<Project8 />} />
      <Route path="/projects/project-9" element={<Project9 />} />

      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}
