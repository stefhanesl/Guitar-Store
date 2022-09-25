import React, { useState } from 'react' 
import { Formik, Form, Field, ErrorMessage } from 'formik'
import './iniciarsesion.css'
import { Link } from 'react-router-dom';

const IniciarSesion = () => {

 const [formularioEnviado, setFormularioEnviado] = useState(false);

  return (
    <div className='contenedor-sesion'>
        <ul>
            <li className='contenedor-formulario-sesion'>
                <Formik
                    className='formulario-iniciar-sesion'
                    initialValues={{
                        correo: '',
                        contrasena: ''
                    }}
                    validate={ (valores) => {
                            let errores = {}

                            if(!valores.correo){
                                errores.correo = 'Por favor, ingrese su correo.'
                            }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/){
                                errores.correo = 'El correo solo puede contener letras, numeros, puntos y guiones.'
                            }

                            if(!valores.contrasena){
                                errores.contrasena = 'Por favor, ingrese su contraseña.'
                            }else if(!/^[a-zA-Z0-9_.+-]+$/){
                                errores.contrasena = 'La contraseña solo puede contener letras, numeros, puntos y guiones.'
                            }

                            return errores;
                        }
                    }
                    onSubmit = {(valores, {resetForm}) => {
                            resetForm();
                            setFormularioEnviado(true);
                            setTimeout(() => setFormularioEnviado(false), 3000)

                        }}
                >
                    {   ( { errors } ) => (

                        <Form className='form-iniciar-sesion'>
                            <div className='form-item'>
                                <label htmlFor='correo'>Correo</label>
                                <Field 
                                    type="text"
                                    id='correo'
                                    name='correo'
                                    placeholder='Escriba su nombre...'
                                />
                                <ErrorMessage name='correo' component={() => (<div className='error'>{errors.correo}</div>)}/>
                            </div>
                            <div className='form-item'>
                                <label htmlFor='contrasena'>Contraseña</label>
                                <Field 
                                    type="password"
                                    id='contrasena'
                                    name='contrasena'
                                    placeholder='Escriba su nombre...'
                                />
                                <ErrorMessage name='contrasena' component={() => (<div className='error'>{errors.contrasena}</div>)}/>
                            </div>
                            <button type='submit' id='btn-sesion'>Iniciar Sesión</button>
                            {formularioEnviado && <p className='exito'>Ha iniciado sesión exitosamente.</p>}
                            <h3>Aún no tengo cuenta.  
                            <Link to='/registrarse' id='signUp'>
                                 Registrarme.
                            </Link> </h3>
                        </Form>
                        
                    )}
                </Formik>
            </li>
            <li className='portada-sesion'>
                <div className='portada-sesion-img'>
                    <img src='assets/portada.jpg' alt='portada' />
                </div>
            </li>
        </ul>
    </div>
  )
}

export default IniciarSesion;

