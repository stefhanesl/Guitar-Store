import React from 'react';
import CarrouselImage from '../CarrouselImage/CarrouselImage';
import CardHome from './CardHome/CardHome';
import CardHomeP from './CardHomeP/CardHomeP';
import CardInfo from './CardInfo/CardInfo';
import { FaCreditCard } from 'react-icons/fa';
import { RiTruckLine } from 'react-icons/ri';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import { HiShoppingBag } from 'react-icons/hi';
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
                        <FaCreditCard size="50px" />
                    </CardInfo>
                    <CardInfo
                        tituloInfo='Compra las 24 Horas'
                        descriptionInfo='Compra de manera online las 24 horas y los 7 días de la semana.'>
                        <RiTruckLine size="50px" />
                    </CardInfo>
                    <CardInfo
                        tituloInfo='Hasta 6 cuotas sin Interés'
                        descriptionInfo='Compra con Mercado Pago en hasta 6 cuotas sin interes.'>
                        <SiHomeassistantcommunitystore size='50px' />
                    </CardInfo>
                    <CardInfo
                        tituloInfo='Retira el mismo dia'
                        descriptionInfo='Compra y retira el mismo día.'>
                        <HiShoppingBag size="50px" />
                    </CardInfo>
                </div>
                <div className='container-home-main'>
                    <CardHome
                        imagen='\assets\carrousel-image1.webp'
                        descripcion='Cuenta con aros y fondo de cerezo silvestre, un acabado pulido personalizado semibrillante y una tapa de pícea maciza probada a presión. El sonido solo mejorará cuanto más se toque la guitarra con el tiempo.'
                        enlace='/category/guitarra'
                    />
                    <CardHome
                        imagen='\assets\img\cardhome.jpg'
                        descripcion='Ahorre en la mayoría de las marcas en categorías populares al marcar +593-901-501-8110. Con una línea telefónica exclusiva, para obtener información detallada sobre productos y soporte técnico. '
                        enlace='/faq'
                    />
                    <CardHome
                        imagen='\assets\card-home2.jpg'
                        descripcion='Los tambores cuentan con tres nuevos acabados, un soporte de tom doble rediseñado, bloqueos de memoria en todas las patas de tom de piso, aros de triple pestaña de 2,3 mm para afinar la estabilidad.'
                        ancho='300px'
                        enlace='/category/baterias'
                    />
                </div>
                <div className='container-home-third'>
                    <CardHomeP image='\assets\c5.jpg' />
                </div>
            </div>
        </div>
    );
}

export default Home;
