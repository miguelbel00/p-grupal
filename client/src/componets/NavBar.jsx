import React from 'react';
import { Link } from 'react-router-dom';
import astroLogo from '../assets/astrologo2.0(sin fondo).png'
import Styles from '../styles/navbar.module.css'
import { getNameQuery } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Navbar = ({setCurrentPage}) => {
    const dispatch = useDispatch()
    const [input, setInput] = useState()

    function handleInput(e){
        e.preventDefault()
        setInput(e.target.value)
        console.log(input)
    }

    function handleSubmit(e){
        e.preventDefault();
        setInput(e.target.value)
        dispatch(getNameQuery(input))
        setCurrentPage(1)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <div>
                    <Link to='/' >
                        <img src={astroLogo} className={Styles.logo} alt='astro_logo'/>
                        <p className={Styles.navbar_brand} >Astro Games</p>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/' >
                                <p className="nav-link">Inicio</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' >
                                <p className="nav-link">Mi cuenta</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' >
                                <p className="nav-link">Mi carrito</p>
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input onChange={(e) => handleInput(e)} className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search"/>
                        <button  className="btn btn-outline-secondary" type="submit" onClick={(e) => handleSubmit(e)}>Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;