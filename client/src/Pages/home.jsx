import React, {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux"
import '../styles/home.css';
import Carrusel from '../componets/Carrusel';
import CardProductContainer from '../componets/CardProductContainer';
import { Link } from "react-router-dom";
import { getAllProducts, /* registerUser */ } from "../redux/actions/actionsPetitions";
/* import { useAuth0 } from "@auth0/auth0-react"; */
import { getUser } from "../redux/actions/actionsPetitions"
const {REACT_APP_JWT_SECRETO} = process.env
const jwt = require('jsonwebtoken');



export default function Home(){

    
    const dispatch = useDispatch()
    const userJWT = useSelector(state => state.petitionsReducer.user);
    const nullUser = async() => {
        await dispatch(getUser(null))
    }
    nullUser()
    if(userJWT){
        try {
            const decoded = jwt.verify(userJWT?.body?.token ? userJWT.body.token :userJWT, REACT_APP_JWT_SECRETO);
            dispatch(getUser(decoded?.id ?decoded.id :decoded.user.id  ))
        } catch (error) {}
    }
    
    useEffect(()=>{
        dispatch(getAllProducts())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    return(
    <div>
        <Carrusel/>
            <div className="container">
                <div className="div1">
                    <Link to={'/products'} className="text-reset text-decoration-none" >
                        <h3>Computadoras</h3>
                        <img className="img" src="https://app.contabilium.com/files/explorer/16277/Productos-Servicios/concepto-7930450.jpg" alt="blank"/>        
                    </Link>
                </div>
                <div className="div1">
                    <Link to={'/products'} className="text-reset text-decoration-none" >
                        <h3>Componentes</h3>
                        <img className="img" src="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/video-geforce-gtx-1660-6gb-gigabyte-oc-nv-0.jpg" alt="blank" />
                    </Link>
                </div>
                <div className="div1">
                    <Link to={'/products'} className="text-reset text-decoration-none" >
                        <h3>Perifericos</h3>
                        <img className="img" src="https://compucordoba.com.ar/img/Public/1078-producto-auriculares-msi-immerse-gh50-pc-consolas-11-9692.jpg" alt="blank"/>
                    </Link>
                </div> 
            </div>
            <div>
                <CardProductContainer/>
            </div>
    </div>
)
}