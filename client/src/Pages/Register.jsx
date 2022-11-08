import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

export default function Register() {
const[input,setInput]=useState({
email:"",
password:""
})

function handleChangue(e){
    e.preventDefault()
    setInput({
        ...input, //Osea, guardamos todo lo que ya habia en el estado y ademas...
        [e.target.name]: e.target.value, //Segun el name del input se va a llenar el estado.
    })
}


function handleSubmit(e){
e.preventDefault()
}

function validateInput(input){

}
const errormessage=validateInput(input)









return(
<div className="divMayorRegister">
    <div className="divHijoRegister">
        <div className="nameRegister">
            <h3>Name of Page</h3>
        </div>
        <br />
        <div className="form">
            <form>
                <div>
                    <input type="text" name="email" value={input.email}  className="registerEmail" placeholder="Email"onChange={e=>handleChangue(e)} />
                </div>
                <div>
                    <input  className="registerPassword" type="text" name="password"value={input.password} placeholder="Password"onChange={e=>handleChangue(e)}/>
                </div>
                {errormessage&&(
                <button className="botonRegister">Registrar</button>
                )
                }
            </form>
        </div>
    </div>
</div>
)
}