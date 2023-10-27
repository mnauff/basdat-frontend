import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './page/HomePage'
import LoginPage from './page/LoginPage'
import DashboardPage from './page/dashboard/DashboardPage'

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
    )
}

export default App
