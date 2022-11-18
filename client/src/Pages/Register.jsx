import React,{useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom";
import { registerUser } from "../redux/actions/actionsPetitions";
import logo from '../assets/logo.png'
import '../styles/register.css'
import { Formik } from "formik";
import Swal from 'sweetalert2'
import dino from '../assets/dinoVolador.png'


export default function Register() {
    
    const user = useSelector((state) => state.petitionsReducer.user)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit= (valoresLogin,  resetForm ) => {
        dispatch(registerUser(valoresLogin))   
        resetForm();
    }

    const validation = (valores) => {
        
            let errores = {}
            if (!valores.fullName) {
                errores.fullName = 'Please enter a name'
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
                errores.fullName = 'The name can only contain letters and spaces'
            }

            if (!valores.email) {
                errores.email = 'Please enter a email'
            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                errores.email = 'Enter a valid name'
            }
            if (!valores.password) {
                errores.password = 'Please enter a password'
            }
            if (!valores.phone) {
                errores.phone = 'Please enter a phone'
            }
            return errores
        
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
            title:'Success Register!',
            text:`${message}`,
            confirmButtonText:'Lets Go',
            background:'#67e9ff',
            customClass:{ 
                popup:'popup-alert',
                text:'titleAlert',
                content:'titleAlert'
            },
           imageUrl:dino,
           imageWidth:'200px',
           imageHeight:'200px'
        });
    }

    const logged = () => {
        if (user?.message) {
            successAlert(user.message)
            localStorage.setItem("user", JSON.stringify(user.body.token))
            history.push('/')
        }else if(!(user.search(/[\d]/)>=0) && typeof user == 'string' ){
            errorAlert(user)
        }
    }
    useEffect(() => {
     
       logged()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);
    return (
        <div className="background">
            <div className="divMayorRegister">
                <div className="divHijoRegister">
                    <div className="image">
                        <img src={logo} alt="" width='200px' height='200px' />
                    </div>
                    <Formik

                        onSubmit={(valores, { resetForm }) => handleSubmit(valores,resetForm)}

                        initialValues={{
                            fullName: "",
                            email: "",
                            password: "",
                            phone: "",
                        }}

                        validate={(valores) => validation(valores)}

                    >
                        {({ handleSubmit, values, handleChange, handleBlur, errors, touched }) => (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <input
                                        type="text"
                                        className="inputStyle"
                                        id="fullName"
                                        name="fullName"
                                        placeholder="FullName"
                                        value={values.fullName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.fullName && errors.fullName && <div className="error">{errors.fullName}</div>}
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
                                        type="password"
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
                                        id="phone"
                                        name="phone"
                                        placeholder="Phone"
                                        value={values.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.phone && errors.phone && <div className="error">{errors.phone}</div>}
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
