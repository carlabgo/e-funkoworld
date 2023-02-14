import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import CartWidget from "./CartWidget"
import "./styles/NavBar.css"
import Logo from "../img/logo.png"
import { NavLink, Link } from 'react-router-dom';

const NavBar = ({ background }) => {

    return (

        <header className={`header background--${background}`}>
            <div className="header-container">

                <div className="menu-button">
                    <FontAwesomeIcon icon={faBars} size="lg" color="white" />
                    <small>Menu</small>
                </div>
                <nav>
                    <div className='navigation'>
                        <NavLink className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                            to="/">Inicio</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                            to="/products">Productos</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                            to="/products/movies">Peliculas</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                            to="/products/tvshows">Series</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "claseActive" : "claseInactive"}
                            to="/products/videogames">Juegos</NavLink>
                    </div>
                </nav>

                <Link to="/">
                    <div className="logo-container">
                        <img src={Logo} alt="logo" />
                    </div>
                </Link>
                <div>
                    <CartWidget />
                </div>
            </div>
        </header>
    )
}

export default NavBar
