import React from 'react';
import { Link } from 'react-router-dom';
import Styles from '../styles/navbar.module.css'
import astroLogo from '../assets/astrologo2.0(sin fondo).png'


const Navbar = () => {

    return (
        // <div className={Styles.navbar_container}>
            // <Link to='/' >
            //     <div className='navbar_logo_container'>
            //         <img src={astroLogo} className={Styles.logo} alt='astro_logo' />
            //     </div>
            // </Link>
            // <div>
            //     <input 
            //         className='input'
            //         type='text'
            //         placeholder='Buscar...'
            //     />
            //     <button>Buscar</button>
            // </div>
            // <div className='navbar_buttons'>
            //     <button>Mi cuenta</button>
            //     <button>Mi carrito</button>
            // </div>
        // </div>

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div>
                    <Link to='/' >
                        <img src={astroLogo} className={Styles.logo} alt='astro_logo'/>
                        {/* <a className="navbar-brand" href="#">Astro Games</a> */}
                        <a className={Styles.navbar_brand} >Astro Games</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/' >
                                <a className="nav-link" aria-current="page" href="#">Inicio</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Mi cuenta</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Mi carrito</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search"/>
                        <button className="btn btn-outline-secondary" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;