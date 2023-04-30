import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Invoice from './Invoice'

const Invoices = () => {
    return (
        <div className="g-sidenav-show bg-danger">
            <Sidebar />
            <main className="main-content position-relative max-height-vh-120 h-120 border-radius-lg ">
                <Navbar name="Invoices" />
                <Invoice />
            </main>
        </div>
    )
}

export default Invoices
