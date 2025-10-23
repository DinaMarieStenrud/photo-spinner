// main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import StartPage from './StartPage'
import FirstGameStarts from './FirstGameStarts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/fg/firstgamestarts" element={<FirstGameStarts />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)

