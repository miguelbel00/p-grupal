import React from "react";
import { useDispatch } from "react-redux";
import { postUser } from "../redux/actions/actionsPetitions";
import logo from '../assets/logo.png'
import '../styles/register.css'
import { Formik } from "formik";
import Swal from 'sweetalert2'
import dino from '../assets/dino.jpg'

export default function Register() {
    const dispatch = useDispatch()
    return (
        <div className="background">
            <div className="divMayorRegister">
                <div className="divHijoRegister">
                    <div className="image">
                        <img src={logo} alt="" width='200px' height='200px' />
                    </div>
                    <Formik

                        onSubmit={(valores, { resetForm }) => {
                            dispatch(postUser(valores))
                            resetForm()

                            Swal.fire({
                                title: 'Bienvenido!',
                                text: 'Gracias por confiar en nosotros!',
                                footer: 'Recuerda no compartir tu contraseña con nadie!',
                                background: '#67e9ff',
                                backdrop: true,
                                timer: '2500',
                                customClass: {
                                    popup: 'popup-alert',
                                    text: 'titleAlert',
                                    content: 'titleAlert',
                                    footer: 'titleAlert'
                                },



                                imageUrl: 'https://i.pinimg.com/564x/64/51/94/645194e8c897c7bea7a2b1f848ff3d8f.jpg',
                                imageWidth: '200px',
                                imageHeight: '200px'
                            });

                           
                        }}

                        initialValues={{
                            name: "",
                            email: "",
                            password: "",
                            phone: "",
                        }}

                        validate={(valores) => {
                            let errores = {}
                            if (!valores.name) {
                                errores.name = 'Please enter a name'
                            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
                                errores.name = 'The name can only contain letters and spaces'
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
                        }}

                    >
                        {({ handleSubmit, values, handleChange, handleBlur, errors, touched }) => (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <input
                                        type="text"
                                        className="inputStyle"
                                        id="name"
                                        name="name"
                                        placeholder="FullName"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
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
