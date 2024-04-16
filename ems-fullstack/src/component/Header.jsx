import React from 'react'
import '../style/header.css'


function Header() {
    return (
        <>
            <nav className='navbar bg-body-primary col'>
                <div className="container">
                    <a className="navbar-brand navi" target='_blank' href=''>Employee Management System</a>
                </div>
            </nav>
        </>
    )
}

export default Header