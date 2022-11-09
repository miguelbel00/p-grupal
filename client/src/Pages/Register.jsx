import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import postUser from "../redux/actions";
import logo from '.././assets/logo.png'
import '../styles/register.css'

export default function Register() {

const dispatch=useDispatch()
const[input,setInput]=useState({
fullname:"",
email:"",
password:"",
address:"",
phone:""
})

function validateInput(input){
    if(!input.email)return "Por Favor completa los campos requeridos"
    }
    const errormessage=validateInput(input)

function handleChangue(e){
    e.preventDefault()
    setInput({
        ...input, //Osea, guardamos todo lo que ya habia en el estado y ademas...
        [e.target.name]: e.target.value, //Segun el name del input se va a llenar el estado.
    })
}

function handleSubmit(e){
// dispatch(postUser(e))
if(errormessage){
    return alert('Por favor,ingrese un correo y contraseña validos para registrarse!')
}else{
    return alert('Tu cuenta ha sido creada con exito')
}
}

function buttonError(errormessage){
if(errormessage){
return <button  type="disabled" className="errorButton">Register!</button>
}else{
return <button className="godButton">Register!</button>  
}
}







return(
<div className="divMayorRegister">
    <div className="divHijoRegister">
        <div className="nameRegister">
            <img src={logo} alt="Imagen not found"width='200px'height='200px' />
        </div>
        <div className="form">
            <form onSubmit={e=>handleSubmit(e)}>
                <div>
                    <input className="inputStyle" type="text" name="fullname"value={input.fullName} placeholder='FullName' onChange={e=>handleChangue(e)}/>
                </div>
                <div>
                    <input type="text" name="email" value={input.email}  className="inputStyle" placeholder="Email"onChange={e=>handleChangue(e)} />
                </div>
                <div>
                    <input  className="inputStyle" type="text" name="password"value={input.password} placeholder="Password"onChange={e=>handleChangue(e)}/>
                </div>
                <div>
                    <input type="text" className="inputStyle" name="address"value={input.address}placeholder='Address'onChange={e=>handleChangue(e)} />
                </div>
                <div>
                    <input type="text" className="inputStyle" name="phone" value={input.phone}placeholder="Phone"onChange={e=>handleChangue(e)} />
                </div>
                <br />
                {
                buttonError(errormessage)
                }
                <p>Ya tienes cuenta?<Link to='/login'>Inicia Sesion</Link></p>
                {/* <p>Olvidaste tu clave?<Link to='/recuperationPassword'>Recuperala Aqui!</Link></p> */}
            </form>
        </div>
    </div>
</div>
)
}