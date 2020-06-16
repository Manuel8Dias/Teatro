import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './styles.css'

const Header = () => {
    return (
        <header className="headerContainer">
            <Link to='/'>
                <img className="logo" src={logo} alt="Logo Teatro" />
            </Link>
            <h1 className="titulo">TEATRO</h1>
            <div>
            </div>
        </header>
    )
}

export default Header