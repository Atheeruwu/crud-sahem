import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Results from './pages/Results'
import BuyCredit from './pages/BuyCredit'
import Home from './pages/Home'
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/result" element={<Results/>}/> 
        <Route path="/buy" element={<BuyCredit/>}/> 
      </Routes>
    </div>
  )
}

export default App
