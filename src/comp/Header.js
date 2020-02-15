import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className="flex-col front">  
            <h2 className="title">ADAM FRANK WHITE</h2> 
            <hr className="title-rule"></hr>     
            <ul className="nav">
                
                <Link to="/about"><li className="nav-item">About</li></Link>
                <Link to="/projects"><li className="nav-item">Projects</li></Link>
                {/* <Link to="/blog"><li className="nav-item">Blog</li></Link> */}
                <Link to="/contact"><li className="nav-item">Contact</li></Link>
               

            </ul>
        </nav>
        
    )
}

export default Header
