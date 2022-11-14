import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";
import { Formik} from "formik";
import logo2 from "./../assets/logo.png";

export default function Login() {
    return (
        <div className="background">
            <div className="divMayorLogin">
                <div className="divHijoLogin">
                    <div className="image">
                        <img
                            src={logo2}
                            alt=""
                            width="180px"
                            height="180px"
                            className="image"
                        />
                    </div>
                    <Formik
                        onSubmit={(valoresLogin, { resetForm }) => {
                            
                            alert("login success")   
                            resetForm();
   
                        }}
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        validate={(valoresLogin) => {
                            let errores = {};
                            if (!valoresLogin.email) {
                                errores.email = "Complete this field to continue"
                            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valoresLogin.email)){
                                errores.email="Enter a valid email address";
                            } 
                            if (!valoresLogin.password) {
                                errores.password = 'Please enter a valid password'
                            }
                            return errores
                        }}
                    >
                        {({
                            handleSubmit,
                            values,
                            handleChange,
                            handleBlur,
                            errors,
                            touched,
                            isSubmitting,
                            
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="inputStyle"
                                    />
                                    {touched.email && errors.email && (
                                        <div className="error">{errors.email}</div>
                                    )}
                                </div>

                                <br />
                                <div>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="inputStyle"
                                    />
                                        {touched.password && errors.password && (
                                        <div className="error">{errors.password}</div>
                                    )}
                                </div>
                                <br />
                                <button type="submit" className="botonsubmit">
                                    <p className="loginBoton">Login</p>
                                </button>
                            </form>
                        )}
                    </Formik>
                <p className="parrafo">Did you forget your password?<Link>Click here</Link></p>
                </div>
            </div>
        </div>
    );
}
