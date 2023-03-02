import Navbar from './Navbar'
import React from 'react'
import Order from './Order'
import Sidebar from './Sidebar'

const Orders = () => {
    return (      
            <div className="g-sidenav-show bg-info">
                <Sidebar />
                <main className="main-content position-relative max-height-vh-120 h-120 border-radius-lg">
                    <Navbar name="Orders" />
                    <Order />
                </main>
            </div>        
    )
}

export default Orders
