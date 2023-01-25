import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import CartWidget from "./CartWidget"
import "./styles/NavBar.css"
import Logo from "../img/logo.png"

const NavBar = ({ background }) => {
    
    return (

        <header className={`header background--${background}`}>

            <div className="header-container">
                
                <div className="menu-button">
                    <FontAwesomeIcon icon={faBars} size="lg" color="white" />
                    <small>Menu</small>
                </div>
                <nav>
                    
                    <ul className="nav-container">
                        <li >
                            <a href="/">Inicio</a>
                        </li>
                        <li className="products-items">
                            <a href="/">
                                Productos <span className="arrow"></span>
                            </a>
                        </li>
                        <li>
                            <a href="/">Contacto</a>
                        </li>
                    </ul>
                </nav>
                <div className="logo-container">
                    <img src={Logo} alt="logo"/>
                </div>
                <div>
                    <CartWidget/>
                </div>
            </div>
        </header>
    )
}

export default NavBar
