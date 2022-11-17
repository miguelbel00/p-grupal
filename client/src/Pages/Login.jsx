import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";
import { Formik} from "formik";
import logo2 from "./../assets/logo.png";
import Swal from 'sweetalert2'

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
                            
                            Swal.fire({
                                title:'Login Exitoso!',
                                text:'Seras redireccionado a la pagina principal!',
                               // html:
                               // icon:
                               confirmButtonText:'Lets Go',
                               // footer:
                               // width:
                               // padding:
                               background:'#67e9ff',
                               // grow:
                               // backdrop:
                            //    timer:'3000'
                               // timerProgressBar:
                               // toast:
                               // position:
                               // allowOutsideClick:
                               // allowEscapeKey:
                               // allowEnterKey:
                               // stopKeydownPropagation:
                           
                               // input:
                               // inputPlaceholder:
                               // inputValue:
                               // inputOptions:
                               
                                    customClass:{ 
                                       // container:'containerAlert',
                                       popup:'popup-alert',
                                       // header:
                                       text:'titleAlert',
                                       // icon:
                                    //    image:'dinoVolador',
                                       content:'titleAlert'
                                       // input:
                                       // actions:
                                       // confirmButton:
                                       // cancelButton:
                                       // footer:	
                                    },
                           
                               // showConfirmButton:
                               // confirmButtonColor:
                               // confirmButtonAriaLabel:
                           
                               // showCancelButton:
                               // cancelButtonText:
                               // cancelButtonColor:
                               // cancelButtonAriaLabel:
                               
                               // buttonsStyling:
                               // showCloseButton:
                               // closeButtonAriaLabel:
                           
                           
                               imageUrl:'https://o.remove.bg/downloads/7f0dd709-8af6-44b3-a66d-bdd1442eb287/185cebd90c1b1c4bec61d05fca1e9fc4-removebg-preview__1_-removebg-preview.png',
                               imageWidth:'200px',
                               imageHeight:'200px'
                               // imageAlt:
                           });  
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
