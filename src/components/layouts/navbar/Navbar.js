import React from "react";
import './navbar.style.css';
import{Link} from 'react-router-dom';


const Nevbar = (props) => {
    return (
        <section className={ `navbar-container ${props.darkTheme ? 'background-dark relative'  : 'background-transparent' }`} >
            <div className="container flex justify-between align-center">
                <a href="#" className="logo">Book<span className="text-primary">Worm</span></a>
                
                <nav className="nav-links-container">
                    <Link to="/" className="nav-links">Home</Link>
                    <Link to="/books" className="nav-links">Books</Link>
                    
                </nav>
            </div>
        </section>

    )
}

export default Nevbar;