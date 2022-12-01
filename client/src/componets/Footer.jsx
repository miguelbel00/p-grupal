import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/astrologoC.png"

import '../styles/footer.css'
 

export default function Footer () {
    return (
       <div className="container-fluid">
                <nav className="row p-5 pb-1 text-white">
                    <ul className="h5 col-xs-12 col-md-6 col-lg-3">
                         <Link to="/" >
                              <img src={logo}  alt="img logo"  height='150' />
                         </Link> 
                   </ul>
                   <ul className="col-xs-12 col-md-6 col-lg-3 list-unstyled">
                        <li className="h5 mb-2">Address</li>
                        <li className="">Avenida Siempre Viva 742</li>
                   </ul>
                   <ul  className="col-xs-12 col-md-6 col-lg-3 list-unstyled">
                        <li className="h5 mb-2">Contact</li>
                        <li className="mb-2">+54 9 011 789 654 123</li>
                        <li className="mb-2">astrogamer@gmail.com</li>
                   </ul>
                   <ul className="col-xs-12 col-md-6 col-lg-3 list-unstyled  ">
                        <li className="h5 mb-2">Social Media</li>
                        <li className="mb-1">
                           <Link to='/facebook' className="text-reset text-decoration-none" >
                           <i className="bi bi-facebook"> Facebook</i>
                            </Link> 
                         </li>
                         <li className="mb-1">
                           <Link to='/github' className="text-reset text-decoration-none">
                           <i className="bi bi-github "> GitHub</i>
                            </Link> 
                         </li>
                         <li className="mb-1">
                           <Link to='/instagram' className="text-reset text-decoration-none" >
                           <i className="bi bi-instagram"> Instagram</i>
                            </Link> 
                        </li>
                   </ul>
                    <div className="col-xs-12">
                         <p className="text-white text-center">Copyright - All right reserved © 2022</p>
                    </div>
                </nav>
            </div>

    )
}

