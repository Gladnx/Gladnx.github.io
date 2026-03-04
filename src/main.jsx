import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { Analytics } from '@vercel/analytics/react'

import './styles/base.css'
import './styles/pages/home.css'
import './styles/pages/learnMore.css'
import './styles/responsive.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Analytics />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
