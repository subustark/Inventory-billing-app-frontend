import React from 'react'
import Customer from './Customer'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Supplier from './Supplier'

const Suppliers = () => {
  return (
    <div className="g-sidenav-show bg-secondary">
      <Sidebar />
      <main className="main-content position-relative max-height-vh-120 h-120 border-radius-lg ">
        <Navbar name="Suppliers" />
        <Supplier />
      </main>
    </div>
  )
}

export default Suppliers
