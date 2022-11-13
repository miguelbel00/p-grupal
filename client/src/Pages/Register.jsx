import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {postUser}from '../redux/actions'
import logo from "../assets/logo.png";
import "../styles/register.css";
import { Formik } from "formik";

export default function Register() {
    const dispatch=useDispatch()
    return (
        <div className="background">
            <div className="divMayorRegister">
                <div className="divHijoRegister">
                <Formik

                    onSubmit={(valores,{resetForm}) => {
                        dispatch(postUser())
                        resetForm()
                    }}

                    initialValues={{
                        name: "",
                        email: "",
                        password: "",
                        address: "",
                        phone: "",
                    }}

                    validate={(valores) => {
                        let errores = {}
                        if (!valores.name) {
                            errores.name = 'Por favor ingrese un nombre'
                        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
                            errores.name = 'El nombre solo puede contener letras y espacios'
                        }//Validacion NOMBRE

                        if(!valores.email){
                          errores.email='Por favor ingrese un correo'  
                        }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
                          errores.email='Ingrese un correo valido'
                        }
                        if(!valores.password){
                            errores.password='Por favor ingrese una contraseña' 
                           }
                           if(!valores.address){
                            errores.address='Por favor ingrese su direccion' 
                           }
                           if(!valores.phone){
                            errores.phone='Por favor ingrese su Phone' 
                           }
                             

                        return errores
                    }}

                >
                    {({ handleSubmit, values, handleChange, handleBlur, errors,touched }) => (
                        <form onSubmit={handleSubmit}>
                            {console.log(errors)}
                            <div>
                                <input
                                    type="text"
                                    className="inputStyle"
                                    id="name"
                                    name="name"
                                    placeholder="FullName"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}//Valida el formulario
                                />
                                {touched.name && errors.name && <div className="error">{errors.name}</div>}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="inputStyle"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.email && errors.email && <div className="error">{errors.email}</div>}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="inputStyle"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.password && errors.password && <div className="error">{errors.password}</div>}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="inputStyle"
                                    id="address"
                                    name="address"
                                    placeholder="Adress"
                                    value={values.address}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.address && errors.address && <div className="error">{errors.address}</div>}
                            </div>
                            <div>

                                <input
                                    type="text"
                                    className="inputStyle"
                                    id="phone"
                                    name="phone"
                                    placeholder="Phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.phone &&errors.phone && <div className="error">{errors.phone}</div>}
                            </div>
                            <br />
                            <button className="botonsubmit" type="submit">Enviar</button>
                        </form>
                    )}
                </Formik>
            </div>
            </div>
        </div>
    );
}
