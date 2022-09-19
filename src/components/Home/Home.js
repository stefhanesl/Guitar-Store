import React from 'react';
import CarrouselImage from '../CarrouselImage/CarrouselImage';
import CardHome from './CardHome/CardHome';
import CardHomeP from './CardHomeP/CardHomeP';
import CardInfo from './CardInfo/CardInfo';
import {FaCreditCard} from 'react-icons/fa';
import {RiTruckLine} from 'react-icons/ri';
import {SiHomeassistantcommunitystore} from 'react-icons/si';
import {HiShoppingBag} from 'react-icons/hi';
import './CardHome/cardhome.css'

const Home = () => {
    return (
        <div className='mg-top'>
            <CarrouselImage />
            <div className='home-principal'>
                <div className='container-home-icon'>
                    <CardInfo 
                        tituloInfo='Despachos' 
                        descriptionInfo='Despachamos a todo el Ecuador por Servientrega.'>
                        <FaCreditCard size="50px"  />                        
                    </CardInfo>
                    <CardInfo 
                        tituloInfo='Compra las 24 Horas' 
                        descriptionInfo='Compra de manera online las 24 horas y los 7 días de la semana.'>
                        <RiTruckLine  size="50px" />
                    </CardInfo>
                    <CardInfo 
                        tituloInfo='Hasta 6 cuotas sin Interés' 
                        descriptionInfo='Compra con Mercado Pago en hasta 6 cuotas sin interes.'>
                        <SiHomeassistantcommunitystore size='50px' />
                    </CardInfo>
                    <CardInfo 
                        tituloInfo='Retira el mismo dia' 
                        descriptionInfo='Compra y retira el mismo día.'>
                        <HiShoppingBag  size="50px"  />
                    </CardInfo>
                </div>
                <div className='container-home-main'>
                    <CardHome 
                    imagen='\assets\carrousel-image1.webp'
                        descripcion=''

                    />
                    <CardHome 
                    imagen='\assets\carrousel-image2.webp'
                        descripcion=''

                    />
                    <CardHome 
                    imagen='\assets\img-cart.jpg'
                        descripcion=''
                        ancho='300px'
                    />
                </div>
                <div className='container-home-secondary'>
                    <CardHome 
                    imagen='\assets\carrousel-image1.webp'
                        descripcion=''

                    />
                    <CardHome 
                    imagen='\assets\carrousel-image2.webp'
                        descripcion=''

                    />
                    <CardHome 
                    imagen='\assets\img-cart.jpg'
                        descripcion=''
                        ancho='300px'
                    />
                </div>
                <div className='container-home-third'>
                    <CardHomeP image='\assets\c5.jpg'/>
                </div>
            </div>
        </div>
    );
}

export default Home;
