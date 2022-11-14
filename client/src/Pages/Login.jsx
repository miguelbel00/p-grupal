import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import logo from "../assets/logo.png";
import "../styles/login.css";
import { Formik, validateYupSchema } from "formik";
import logo2 from "./../assets/logo.png"



export default function Login() {
    return (
        <div className="background">
            <div className="divMayorLogin">
                <div className="divHijoLogin">
                    <div className="image">
                        <img src={logo2} alt="" width='180px' height='180px' className="image" />
                    </div>
                    <Formik
                        onSubmit={(valoresLogin, { resetForm }) => {
                            resetForm()
                        }}
                        initialValues={{
                            emailLogin: "",
                            passwordLogin: "",
                        }}

                        validate={(valoresLogin) => {
                            let errores = {}
                            if (!valoresLogin.emailLogin) {
                                errores.emailLogin = 'Por favor ingrese un correo'
                            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valoresLogin.emailLogin)) {
                                errores.emailLogin = 'Ingrese un correo valido'
                            }
                        }}
                    >
                        {({ handleSubmit, values, handleChange, handleBlur, errors, touched }) => (
                            <form>
                                {console.log(errors)}
                                <div>
                                    <input type="email" id="emailLogin" name="emailLogin" placeholder="Email" value={values.emailLogin} onChange={handleChange} onBlur={handleBlur} className="inputStyle" />
                                    {touched.emailLogin && errors.emailLogin && <div className="error">{errors.emailLogin}</div>}
                                </div>

                                <br />
                                <div>
                                    <input type="password" id="passwordLogin" name="passwordLogin" placeholder="Password" value={values.passwordLogin} onChange={handleChange} onBlur={handleBlur} className="inputStyle" />
                                </div>
                                <br />
                                <button type="submit" className="botonsubmit">Login.</button>
                            </form>
                        )}


                    </Formik>
                    <Link>Olvidaste tu contraseña?</Link>
                </div>
            </div>
        </div>
    )
}