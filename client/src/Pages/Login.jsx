import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import "../styles/login.css";
import logo2 from "./../assets/logo.png";
import Swal from 'sweetalert2'
import { loginUser } from "../redux/actions/actionsPetitions";
import { Formik } from "formik";
import dino from '../assets/dino.png'
import axios from "axios";
const { REACT_APP_GOOGLE_CLIENT_ID } = process.env
const jwt = require('jsonwebtoken');


export default function Login() {

    const user = useSelector((state) => state.petitionsReducer.user)
    const userOne = useSelector( (state) =>  state.petitionsReducer.userOne);

    const dispatch = useDispatch()
    const [submit, setSubmit] = useState(false)
    const history = useHistory()

    const handleSubmit = async (valoresLogin, resetForm) => {
        setSubmit(true)
        await dispatch(loginUser(valoresLogin))
        resetForm();
    }
    const errorAlert = (message) => {
        Swal.fire({
            title: 'Error!',
            text: `${message}`,
            confirmButtonText: 'Try Again',
            background: '#fff',
            icon: 'error',
            customClass: {
                popup: 'popup-alert',
                text: 'titleAlert',
                content: 'titleAlert'
            },
        });
    }

    const successAlert = (message, title = 'Success Login!') => {
        Swal.fire({
            title: `${title}`,
            text: `${message}`,
            confirmButtonText: 'Lets Go',
            background: '#fff',
            customClass: {
                popup: 'popup-alert',
                text: 'titleAlert',
                content: 'titleAlert'
            },
            imageUrl: dino,
            imageWidth: '200px',
            imageHeight: '200px'
        });
    }

    const logged = () => {
        if (user?.message) {
            if (!submit) {
                return
            }
            successAlert(user.message)
            localStorage.setItem("user", JSON.stringify(user.body.token))
            history.push('/')
        }
    }

    const validation = (valoresLogin) => {
        let errores = {};
        if (!valoresLogin.email) {
            errores.email = "Complete this field to continue"
        } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valoresLogin.email)) {
            errores.email = "Enter a valid email address";
        }
        if (!valoresLogin.password) {
            errores.password = 'Please enter a valid password'
        }
        return errores
    }

    //Google Auth start
    const handleCallBackResponse = async (response) => {
        const userGoogle =response.credential
        setSubmit(true)
        try {
            const decoded = jwt.decode(userGoogle)
            const newUser = {
                email: decoded.email,
                google: true
            }
            await dispatch(loginUser(newUser))

        } catch (error) {
            console.log(error)
        }

    }
    function forgetPass(e) {
        if (!e.target.parentNode.firstChild.value){
            errorAlert("Enter a email")
        }
        else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(e.target.parentNode.firstChild.value)) {
            errorAlert("Enter a valid email address");
        }
        
        else{
        axios.post(`${process.env.REACT_APP_SERVER_BACK}/email/recoverPass`, {email: e.target.parentNode.firstChild.value})
        e.target.parentNode.firstChild.value = ""
        successAlert("password reset, check your email!", "Password restored successfully!")
        e.target.parentNode.className = "forgotPass"}
    }
    
    function showRecoverPass (e){
        e.target.parentNode.nextElementSibling.className = "forgotPassEnab"
    }

    useEffect(() => {
        localStorage.setItem("userOne", JSON.stringify({}))
        /* global google */
        google.accounts.id.initialize({
            client_id: REACT_APP_GOOGLE_CLIENT_ID,
            callback: handleCallBackResponse
        })
        google.accounts.id.renderButton(
            document.getElementById("singInDiv"),
            { theme: "outline", size: "large" }
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //Google Auth End

     useEffect(() => {
        logged()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]) 

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
                        onSubmit={(valoresLogin, { resetForm }) => handleSubmit(valoresLogin, resetForm)}
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
                                <div id="singInDiv">

                                </div>
                            </form>
                        )}
                    </Formik>
                    <p className="parrafo">Did you forget your password?<button className="buttonKey"  onClick={showRecoverPass}>Click here</button></p>
                    <div className="forgotPass" >
                        <input placeholder="Insert Email" type="text" />
                        <button  onClick={forgetPass}>send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
