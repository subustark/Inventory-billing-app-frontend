import React from 'react'
import Payment from './Payment'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Payments = () => {
    return (
        <div>
            <div className="g-sidenav-show bg-info">
                <Sidebar />
                <main className="main-content position-relative max-height-vh-120 h-120 border-radius-lg ">
                    <Navbar name="Payments" />
                    <Payment />
                </main>
            </div>
        </div>
    )
}

export default Payments
