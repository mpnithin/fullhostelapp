import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
function Header() {
    let c='&';
    return (
        <div className="container">
                <div className="logo">
                    <h1 className="headername">B{c}B</h1>
                    
                    
                </div>
                <div className="navdiv">
                    <ul className="navlinks">
                        <li> <Link to ="./">Home</Link></li>
                        <li> <Link to ="./About">About Us</Link></li>
                        <li><Link to ="./Contact">Contact Us</Link></li>
                        <li><Link to ="./Register">Sign Up</Link></li>

                    </ul>
                </div>
           
        </div>
    )
}

export default Header
