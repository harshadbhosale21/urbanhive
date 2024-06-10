import React from 'react';
import { NavLink } from 'react-router-dom'
import './styles.css'
import { BiLogOut } from 'react-icons/bi';
import useLogout from '../../hooks/useLogout'

const UserDashboard = () => {
    const { logout } = useLogout()

    return (
        <>
            <section className="dashboard">
                <div className="sidebar">
                    <NavLink to='' className='p-3 d-block text-black'>Profile</NavLink>
                    <NavLink to='' className='p-3 d-block text-black'>Order history</NavLink>
                    <NavLink to='' className='p-3 d-block text-black'>My Cart</NavLink>
                    <div className='logout mt-auto '>
                        <BiLogOut className='logout-btn text-black cursor-pointer' onClick={logout} />
                    </div>

                </div>
                <div className="content">
                    <h1>User Profile</h1>

                </div>
            </section>
        </>
    )
}

export default UserDashboard
