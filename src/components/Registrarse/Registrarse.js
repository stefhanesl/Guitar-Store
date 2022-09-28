import React, { useState} from 'react' 
import { Formik, Form, Field, ErrorMessage } from 'formik'
import '../IniciarSesion/iniciarsesion.css'
import { addDoc, collection} from 'firebase/firestore'
import { db } from '../../utils/firebase';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import CreditCard from '../TarjetaPago/TarjetaPago.js';

const Registrarse = () => {
    const { listaProductosCarrito, totalCompra } = useContext(CartContext);

    const [formularioEnviado, setFormularioEnviado] = useState(false);

    const [confirmacion, setConfirmacion] = useState(false);

  const [isfull, setIsFull] = useState(false)

    const getDataForm = (e) => {
        e.preventDefault()

        const orden = {
            buyer: {
                nombre: e.target[0].value, 
                correo: e.target[1].value, 
                telefono: e.target[2].value,
                genero: e.target[3].value,
            },
            items: listaProductosCarrito,
            date: new Date(),
            total: totalCompra
        }
        const orderCollection = collection(db, 'users');

        addDoc(orderCollection, orden).then((respuesta) => {
            
            setConfirmacion(true)
        })
    }

    var handleReset = (values, formProps) => {
        return window.confirm('Reset?'); 
    };
    function validacionTarjeta(condicion){
        setIsFull(condicion)
        setTimeout(() => {
            setConfirmacion(false)
            setIsFull(false)
        }, 2000)

    }

  return (
    <div class="container-registrarse">
        <div className='tarjeta-de-credito'>
            <CreditCard validacionTarjeta={validacionTarjeta}/>
        </div>
        <div>
            <h3> {confirmacion && 'Su cuenta ha sido creada exitosamente.' }</h3>
            <div className='contenedor-formulario-sesion'>
                <Formik
                
                    initialValues={{
                        nombre: '',
                        correo: '',
                        telefono: '',
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
                            if(!valores.telefono){
                                errores.telefono = 'Por favor, ingrese su telefono.'
                            }else if(!/[0-9]/){
                                errores.telefono = 'Ingrese numeros'
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
                            valores.preventDefault()
                            resetForm();
                            setFormularioEnviado(true);
                            setTimeout(() => setFormularioEnviado(false), 3000)
                        }}

                        onReset={handleReset}
                >
                    {   ( { errors } ) => (
                        <Form className='form-registrarse' onSubmit={ () => {
                                getDataForm()
                            }}
                            >
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
                                    placeholder='Escriba su correo...'
                                />
                                <ErrorMessage name='correo' component={() => (<div className='error'>{errors.correo}</div>)}/>
                            </div>
                            <div className='form-item-reg'>
                                <label htmlFor='telefono'>Teléfono</label>
                                <Field
                                    type="number"
                                    id='contrasena'
                                    name='telefono'
                                    placeholder='Escriba su teléfono...'
                                />
                                <ErrorMessage name='telefono' component={() => (<div className='error'>{errors.telefono}</div>)}/>
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
                            <div className='form-item-reg'>
                                <label>Total a Pagar</label>
                                <div id='total-compra'>${totalCompra}</div>
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
                            
                            <button type='submit' id='btn-registrarse'>Pagar</button>
                            {formularioEnviado && isfull
                                ? <div className='mensaje exito'>Ha completado su registro.</div>
                                : formularioEnviado && !isfull
                                ? <div className='mensaje errores'>No ha completado su registro.</div>
                                : null
                            }
                        </Form>
                    )}
                </Formik>

            </div>
        </div>

        
    </div>
  )
}

export default Registrarse;