import React, { useState } from 'react' 
import { Formik, Form, Field, ErrorMessage } from 'formik'
import '../IniciarSesion/iniciarsesion.css'
const Registrarse = () => {

    const [formularioEnviado, setFormularioEnviado] = useState(false);


  return (
    <div class="container-registrarse">
        <ul>
            <li className='contenedor-formulario-sesion'>
                <Formik
                
                    initialValues={{
                        nombre: '',
                        correo: '',
                        contrasena: '',
                        sexo: '',
                        requerimiento: ''
                    }}
                    validate = { (valores) => {
                            let errores = {}
                            if(!valores.nombre){
                                errores.nombre = 'Por favor, ingrese su nombre.'
                            }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/){
                                errores.nombre = 'El nombre solo puede contener letras y espacios.'
                            }
                            if(!valores.correo){
                                errores.correo = 'Por favor, ingrese su correo.'
                            }else if(!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/){
                                errores.correo = 'El correo solo puede contener letras, numeros, puntos y guiones.'
                            }
                            if(!valores.contrasena){
                                errores.contrasena = 'Por favor, ingrese una contraseña.'
                            }else if(!/^[a-zA-Z0-9_.-]+$/){
                                errores.contrasena = 'La contraseña solo puede contener letras, numeros, puntos y guiones.'
                            }
                            if(!valores.sexo){
                                errores.sexo = 'Por favor, ingrese su género.'
                            }
                            if(!valores.requerimiento){
                                errores.requerimiento = 'Por favor, acepte las términos y condiciones.'
                            }
                            return errores;
                        }}
                        onSubmit = {(valores, {resetForm}) => {
                            resetForm();
                            setFormularioEnviado(true);
                            setTimeout(() => setFormularioEnviado(false), 3000)
                        }}
                >
                    {   ( { errors } ) => (
                        <Form className='form-registrarse'>
                            <div className='form-item-reg'>
                                <label htmlFor='nombre'>Nombre</label>
                                <Field
                                    type="text"
                                    id='nombre'
                                    name='nombre'
                                    placeholder='Escriba su nombre...'
                                />
                                <ErrorMessage name='nombre' component={() => (<div className='error'>{errors.nombre}</div>)}/>
                            </div>
                            <div className='form-item-reg'>
                                <label htmlFor='correo'>Correo</label>
                                <Field
                                    type="text"
                                    id='correo'
                                    name='correo'
                                    placeholder='Escriba su nombre...'
                                />
                                <ErrorMessage name='correo' component={() => (<div className='error'>{errors.correo}</div>)}/>
                            </div>
                            <div className='form-item-reg'>
                                <label htmlFor='contrasena'>Contraseña</label>
                                <Field
                                    type="password"
                                    id='contrasena'
                                    name='contrasena'
                                    placeholder='Escriba su nombre...'
                                />
                                <ErrorMessage name='contrasena' component={() => (<div className='error'>{errors.contrasena}</div>)}/>
                            </div>
                            <div className='form-item-reg form-item-sex'>
                                <label htmlFor='sexo'>
                                    <Field
                                        type="radio"
                                        name='sexo'
                                        value='mujer'
                                    />Mujer
                                </label>
                                <label htmlFor='sexo'>
                                    <Field
                                        type="radio"
                                        name='sexo'
                                        value='hombre'
                                    />Hombre
                                </label>
                                <ErrorMessage name='sexo' component={() => (<div className='error'>{errors.sexo}</div>)}/>
                            </div>
                            <div className='form-item-reg form-item-politicas'>
                                <label htmlFor='requerimiento'>
                                    <Field
                                        type="checkbox"
                                        name='requerimiento'
                                        id='requerimiento'
                                        value='requerimiento'
                                    /> Acepto los términos y condiciones.
                                </label>
                                <ErrorMessage name='requerimiento' component={() => (<div className='error'>{errors.requerimiento}</div>)}/>
                            </div>
                            <button type='submit' id='btn-registrarse'>Registrarse</button>
                            {formularioEnviado && <p className='exito'>Ha completado su registro.</p>}
                        </Form>
                    )}
                </Formik>
            </li>
            <li className='portada-registrarse'>
                <div className='portada-registrarse-img'> 
                    <img src='assets/portada.jpg' alt='portada' /> 
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Registrarse;