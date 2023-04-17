import React from "react";
import './InputSearch.css'

export default function InputSearch() {
    return (
        <>
            <div className='Search-Box'>
                <div className="nav">
                    <p>About</p>
                    <p>Contact</p>
                    <p>Service</p>
                    <div className="searchbox">
                       <i class="bi bi-search"></i>
                    </div>
                </div>
            </div>
        </>
    )
}