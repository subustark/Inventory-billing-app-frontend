import React from 'react'
import AddInvoice from './AddInvoice'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const AddInvoices = () => {
    return (
        <div className="g-sidenav-show bg-info">
            <Sidebar />
            <main className="main-content position-relative max-height-vh-120 h-120 border-radius-lg ">
                <Navbar name="Create Invoice" />
                <AddInvoice/>
            </main>
        </div>
    )
}

export default AddInvoices
