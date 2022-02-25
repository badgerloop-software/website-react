import React from 'react'
import './index.css'
import reportWebVitals from './reportWebVitals'
import './assets/styles/tailwind.css'
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
// import About from "./pages/About";
import Navbar from './components/Navbar'

const rootElement = document.getElementById('root')
render(
    <BrowserRouter>
        <Navbar />
        <div className="flex flex-col h-screen">
            <Routes>
                <Route path="/" element={<Landing />} />
                {/* <Route path="/about" element={<About />} /> */}
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </div>
    </BrowserRouter>,
    rootElement,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
