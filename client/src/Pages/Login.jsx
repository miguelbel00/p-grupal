import React,{useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux'
import { Link, useHistory } from "react-router-dom";
import "../styles/login.css";
import { Form, Formik} from "formik";
import logo2 from "./../assets/logo.png";
import Swal from 'sweetalert2'
import { loginUser } from "../redux/actions/actionsPetitions";

export default function Login() {

    const user = useSelector((state) => state.petitionsReducer.user)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit= (valoresLogin,  resetForm ) => {
        dispatch(loginUser(valoresLogin))   
        resetForm();
    }
    const errorAlert = (message) => {
        Swal.fire({
            title:'Error!',
            text:`${message}`,
            confirmButtonText:'Try Again',
            background:'#67e9ff',
            icon:'error',
            customClass:{ 
                popup:'popup-alert',
                text:'titleAlert',
                content:'titleAlert'
            },
        }); 
    }
    const successAlert =(message) => {
        Swal.fire({
            title:'Login Exitoso!',
            text:`${message}`,
            confirmButtonText:'Lets Go',
            background:'#67e9ff',
            customClass:{ 
                popup:'popup-alert',
                text:'titleAlert',
                content:'titleAlert'
            },
           imageUrl:'https://o.remove.bg/downloads/7f0dd709-8af6-44b3-a66d-bdd1442eb287/185cebd90c1b1c4bec61d05fca1e9fc4-removebg-preview__1_-removebg-preview.png',
           imageWidth:'200px',
           imageHeight:'200px'
        });
    }
    
    const logged = () => {
        if (user?.message) {
            successAlert(user.message)
            localStorage.setItem("user", JSON.stringify(user.body.token))
            history.push('/')
        }else if(typeof user == 'string' && !(user?.search(/[\d]/)>=0)  ){
            errorAlert(user)
        }
    }

    const validation = (valoresLogin) => {
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
    }

    useEffect(() => {
        logged()
    }, [user]);

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
                        onSubmit={(valoresLogin, { resetForm }) => handleSubmit(valoresLogin,resetForm)}
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        validate={(valoresLogin) => validation(valoresLogin)}   
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
