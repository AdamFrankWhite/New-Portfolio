import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className="flex-col">  
            <h2 className="title">ADAM FRANK WHITE</h2> 
            <hr className="title-rule"></hr>     
            <ul className="nav">
                
                <Link to="/about"><li className="nav-item">About</li></Link>
                
                <Link to="/projects">
                    <li className="nav-item">
                        Projects
                        {/* <ul className="nested-nav">
                            <li className="nested-item">Kakuro</li>
                            <li className="nested-item">Nasa Nebula Image Search</li>
                            <li className="nested-item">Ebook Landing Page</li>
                            <li className="nested-item">Favourite Beer App</li>
                        </ul> */}
                    </li>
                </Link>
                <Link to="/blog"><li className="nav-item">Blog</li></Link>
                <Link to="/contact"><li className="nav-item">Contact</li></Link>
               

            </ul>
        </nav>
        
    )
}

export default Header
