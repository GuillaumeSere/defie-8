import React, { useState } from 'react'
import './navbar.css'
import logo from '../images/logo.svg'
import close from '../images/icon-close.svg'
import burger from '../images/icon-hamburger.svg'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isLogo, setIsLogo] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setIsLogo(false)
    };

    const handleCloseMenu = () => {
        setIsOpen(false);
        setIsLogo(!isLogo)
    }

  return (
    <div className='navbar'>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
          
                <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="#">shop</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">contact</a></li>
                </ul>
                {isOpen && (
                    <button className="close-button" onClick={handleCloseMenu}>
                        <span className="close-icon" aria-hidden="true">
                            <img src={close} alt="close" />
                        </span>
                    </button>
                )}
            </div>
            <img src={logo} alt="logo" className={`logo ${isOpen ? 'open' : ''}`} />
            <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu} >
                <img className='bar' src={burger} alt="menu" />
            </div>
    </div>
  )
}

export default Navbar
