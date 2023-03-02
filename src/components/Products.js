import React from 'react'
import Product from './Product'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Products = () => {
    return (
        <div className="g-sidenav-show bg-info">
            <Sidebar />
            <main className="main-content position-relative max-height-vh-120 h-120 border-radius-lg ">
                <Navbar name="Products" />
                 <Product/>
            </main>
        </div>
    )
}

export default Products
