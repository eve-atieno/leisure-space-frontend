import React from "react";
import './InputSearch.css'

export default function InputSearch() {
    return (
        <>
            <div className='Search-Box'>
                <div className="nav">
                    <p>About</p>
                    <br/>
                    <p>Contact</p>
                    <br/>
                    <p>Service</p>
                    <div className="searchbox">
                       <i class="bi bi-search"></i>
                    </div>
                </div>
            </div>
            {/* <ul className="nav-center">
                <div>
                    <Link to="/signup">Sign Up</Link> /
                    <Link to="/login">Log In</Link>
                </div>
            </ul> */}

        </>
    )
}