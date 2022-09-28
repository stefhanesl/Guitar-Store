import React, { useState, useEffect, useSyncExternalStore } from 'react' 
import { Formik, Form, Field, ErrorMessage } from 'formik'
import './iniciarsesion.css'
import { Link } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';

const IniciarSesion = () => {
    const history = useNavigate()
    const [formularioEnviado, setFormularioEnviado] = useState(false);
    let [usuario, setUsuario] = useState({})
    const [loadingSesion, setloadingSesion] = useState(false);
    const [existe, setExiste] = useState({})

    const getDataForm = (e) => {
        e.preventDefault()
  
        setUsuario( {
            correo: e.target[0].value, 
            contrasena: e.target[1].value
        })
    }
    const validando = (condicion) => {
        setFormularioEnviado(true);
        if(condicion){
            setloadingSesion(true)
            history.push('/')
        }
        setTimeout(() => {
            setFormularioEnviado(false)
            setloadingSesion(false)
        }, 2000)
    }


    useEffect(()=>{

        const getProducts = async() => {

            const consulta = collection(db,"users") 

            const response = await getDocs(consulta);
            
            const docs = response.docs;

            let respuesta = docs.map(doc=>{return {...doc.data(), id:doc.id} })

            
            const existeCorreo = respuesta.find( user => user.buyer.correo === usuario.correo )
            if(existeCorreo){
                if( existeCorreo.buyer.contrasena === usuario.contrasena ){
                    validando(true)
                    setExiste(existeCorreo)
                    console.log(existeCorreo)
                    return;
                }
            }
            validando(false)
        }
        getProducts()
    },[usuario])



  return (
    <div>
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
                        }}
                >
                    {   ( { errors } ) => (

                        <Form className='form-iniciar-sesion' onSubmit={getDataForm}>
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
                            {   formularioEnviado && loadingSesion 
                                ? <div className='mensaje exito'>Ha iniciado sesión exitosamente.</div>
                                : formularioEnviado && !loadingSesion
                                ? <div className='mensaje errores'>El correo o la contraseña no son válidos.</div>
                                : null
                            }
                
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

