import React from 'react'
import './index.css'
import reportWebVitals from './reportWebVitals'
import './assets/styles/tailwind.css'
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Team from './pages/Team'
import About from './pages/About'
import Sponsors from './pages/Sponsors'
import Contact from './pages/Contact'

const rootElement = document.getElementById('root')
render(
    <BrowserRouter>
        <Routes>
            <Route path="" element={<Landing />} />
            <Route path="/website-react" element={<Landing />} />
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<About />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div>404</div>} />
        </Routes>
    </BrowserRouter>,
    rootElement,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
