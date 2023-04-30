import React from 'react'
import Stock from './Stock'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Stocks = () => {
  return (
    <div className="g-sidenav-show bg-info">
      <Sidebar />
      <main className="main-content position-relative max-height-vh-120 h-120 border-radius-lg ">
        <Navbar name="Stocks" />
        <Stock />
      </main>
    </div>
  )
}

export default Stocks
