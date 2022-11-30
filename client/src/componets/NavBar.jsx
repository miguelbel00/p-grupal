import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import astroLogo from '../assets/astrologo2.0(sin fondo).png'
import Styles from '../styles/navbar.module.css'
import { searchProduct } from '../redux/actions/actionsFilter';
import { LogOut } from '../redux/actions/actionsPetitions';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import dino from '../assets/dino.jpg'
import Swal from 'sweetalert2'

const Navbar = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const [input, setInput] = useState('')
    const user = useSelector(state => state.petitionsReducer.user)
    const userOne = useSelector(state => state.petitionsReducer.userOne)

    function handleInput(e){
        e.preventDefault()
        setInput(e.target.value)

    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(searchProduct(input))
        history.push('/products')

    }
    
    const handleLogOut = () => {
        localStorage.setItem("user", JSON.stringify({}))
        dispatch(LogOut({}))
        successAlert('Come Back Soon')
        history.push('/')
    }
    
    const successAlert =(message) => {
        Swal.fire({
            title:'Success LogOut!',
            text:`${message}`,
            confirmButtonText:'See you later',
            background:'#67e9ff',
            customClass:{ 
                popup:'popup-alert',
                text:'titleAlert',
                content:'titleAlert'
            },
           imageUrl: dino,
           imageWidth:'200px',
           imageHeight:'200px'
        });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark" id={Styles.nav}>
            <div className="container-fluid">
                <div>
                    <Link to='/' >
                        <img src={astroLogo} className={Styles.logo} alt='astro_logo' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mt-3 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/' >
                                <i className="bi bi-house nav-link mb-3"> &nbsp;Home</i>
                            </Link>
                        </li>
                        {Object.keys(user).length !== 0 && userOne !==null
                        ?   <li className="nav-item">
                                <Link to='/profile' >
                                    <i className="bi bi-person-circle nav-link mb-3"> &nbsp;My Account</i>
                                </Link>
                            </li>
                        :   <></>
                        }
                        <li className="nav-item">
                            <Link to='/shoppingcart' >
                                <i className="0bi bi-cart4 nav-link mb-3"> &nbsp;My Cart</i>
                            </Link>
                        </li>
                        {}
                        {Object.keys(user).length !== 0 && userOne !==null
                        ?  <li className="nav-item">
                        <Link to='/' onClick={handleLogOut}>
                          <i className="bi bi-box-arrow-right nav-link mb-3"> &nbsp;Log Out</i>
                        </Link>
                    </li>
                        :    <>  
                        <li className="nav-item">
                            <Link to='/login' >
                                <i className="bi bi-box-arrow-in-right nav-link mb-3"> &nbsp;Login</i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/register' >
                                <i className="bi bi-box-arrow-in-right nav-link mb-3"> &nbsp;Register</i>
                            </Link>
                        </li>
                    </>
                        }
                        {Object.keys(user).length !== 0 && userOne?.isAdmin === true
                        ?   
                                <li className="nav-item">
                                    <Link to='/admin' >
                                        <i className="bi bi-exclamation-square nav-link mb-3"> &nbsp;Admin</i>
                                    </Link>
                                </li>
                            
                        :   <></>
                        }

                    </ul>
                     <form className="d-flex" id={Styles.search} role="search"> 
                        <input onChange={handleInput} value={input}className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search"/>
                        <button  className="btn btn-outline-secondary" type="submit" onClick={(e) => handleSubmit(e)}>Buscar</button>
                     </form> 
                </div>
            </div>
        </nav>
    )
}

export default Navbar;