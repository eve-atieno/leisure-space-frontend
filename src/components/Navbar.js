import React, { useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {

    useEffect(() => {
        const hb = document.querySelector('.hb');
        hb.onclick = function () {
            const navBar = document.querySelector('.nav-nv')
            navBar.classList.toggle("act")
        }
    }, []);

    return (
        <header>
            <div className='logo'>
                Logo Here.....
            </div>
            <div className='hb'>
                <div className='ln'></div>
                <div className='ln'></div>
                <div className='ln'></div>
                <div className='ln'></div>
            </div>
            <div className='Search-Box'>
                <p>Anywhere</p>
                <p>AnyWeek</p>
                <span>AddGuests</span>
                <div className='input'>
                    <i class="bi bi-search"></i>
                </div>
            </div>
            <div className='nav-nv'>
                <ul>
                    <li>
                        <a href="/" className='act'>Home</a>
                    </li>
                    <li>
                        <a href="/" className=''>LogIn</a>
                    </li>
                    <li>
                        <a href="/" className=''>SignUp</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
