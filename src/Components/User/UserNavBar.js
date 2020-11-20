import React from 'react'
import { NavLink } from 'react-router-dom'

const UserNavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='collapse navbar-collapse' id='navbarNav'>
                <div className='navbar-nav'>
                    <NavLink to='/' exact className='nav-item'>
                        Login
                    </NavLink>
                    <NavLink to='/home' exact className='nav-item'>
                        Home
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default UserNavBar