import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import './registrarse.css'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../utils/firebase';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import CreditCard from '../TarjetaPago/TarjetaPago.js';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Registrarse = () => {

    const MySwal = withReactContent(Swal)

    const { listaProductosCarrito, totalCompra } = useContext(CartContext);

    const [isfull, setIsFull] = useState(false)

    const [completado, setCompletado] = useState(false);

    const getDataForm = (e) => {

        e.preventDefault()

        if (!isfull) {
            MySwal.fire({
                title: <div>La tarjeta ingresada no es válida.</div>,
                icon: 'error',
                timer: 2000,
                showConfirmButton: false
            })
            return;
        }

        if (e.target[0].value === '' || e.target[1].value === '' || e.target[2].value === '' || e.target[3].value === '' || e.target[4].value === '') {
            MySwal.fire({
                title: <div>Todos los campos son obligatorios.</div>,
                icon: 'error',
                timer: 2000,
                showConfirmButton: false
            })
            return;
        }

        if (totalCompra === 0) {
            MySwal.fire({
                title: <div>Usted no cuenta con productos en el carrito.</div>,
                icon: 'error',
                timer: 3000,
                showConfirmButton: false
            })
            return;
        }

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
            mensajePago(respuesta.id)
        })

        e.target.reset()

    }

    const validacionTarjeta = (condicion) => {
        setIsFull(true)
    }

    const mensajePago = (IDcliente) => {
        MySwal.fire({
            title: <div>PAGO</div>,
            text: `Su pago ha sido realizado exitosamente. Su numero de orden es: ${IDcliente}`,
            icon: 'success',
            confirmButtonText: '¡Cool!',
            confirmButtonColor: '#04D4C1'
        })
        setCompletado(true)
        limpiarForm()
    }

    const limpiarForm = () => {
        if (completado) {
            setTimeout(() => {
                window.location.reload(true)
            }, 6000);
        }
        setCompletado(false)
    }

    return (
        <div className="container-registrarse">
            <div className='tarjeta-de-credito'>
                <CreditCard validacionTarjeta={validacionTarjeta} />
            </div>
            <div>
                <div className='contenedor-formulario-sesion'>
                    <Formik
                        initialValues={{
                            nombre: '',
                            correo: '',
                            telefono: '',
                            sexo: '',
                            requerimiento: ''
                        }}
                        validate={(valores) => {
                            let errores = {}
                            if (!valores.nombre) {
                                errores.nombre = 'Por favor, ingrese su nombre.'
                            } else if (!/^[a-zA-ZÀ-ÿ\s]/.test(valores.nombre)) {
                                errores.nombre = 'El nombre solo puede contener letras y espacios.'
                            }
                            if (!valores.correo) {
                                errores.correo = 'Por favor, ingrese su correo.'
                            } else if (!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                                errores.correo = 'El correo solo puede contener letras, numeros, puntos y guiones.'
                            }
                            if (!valores.telefono) {
                                errores.telefono = 'Por favor, ingrese su telefono.'
                            } else if (!/[0-9]/.test(valores.telefono)) {
                                errores.telefono = 'Ingrese numeros'
                            }
                            if (!valores.sexo) {
                                errores.sexo = 'Por favor, ingrese su género.'
                            }
                            if (!valores.requerimiento) {
                                errores.requerimiento = 'Por favor, acepte las términos y condiciones.'
                            }
                            return errores;
                        }}
                    >
                        {({ errors }) => (
                            <Form className='form-registrarse' onSubmit={(e) => {
                                getDataForm(e)
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
                                    <ErrorMessage name='nombre' component={() => (<div className='error'>{errors.nombre}</div>)} />
                                </div>
                                <div className='form-item-reg'>
                                    <label htmlFor='correo'>Correo</label>
                                    <Field
                                        type="text"
                                        id='correo'
                                        name='correo'
                                        placeholder='Escriba su correo...'
                                    />
                                    <ErrorMessage name='correo' component={() => (<div className='error'>{errors.correo}</div>)} />
                                </div>
                                <div className='form-item-reg'>
                                    <label htmlFor='telefono'>Teléfono</label>
                                    <Field
                                        type="number"
                                        id='contrasena'
                                        name='telefono'
                                        placeholder='Escriba su teléfono...'
                                    />
                                    <ErrorMessage name='telefono' component={() => (<div className='error'>{errors.telefono}</div>)} />
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
                                    <ErrorMessage name='sexo' component={() => (<div className='error'>{errors.sexo}</div>)} />
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
                                    <ErrorMessage name='requerimiento' component={() => (<div className='error'>{errors.requerimiento}</div>)} />
                                </div>

                                <button type='submit' id='btn-registrarse'>Pagar</button>

                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Registrarse;