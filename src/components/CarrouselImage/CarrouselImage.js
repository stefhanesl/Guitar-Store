import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carrousell.css'

const CarrouselImage = () => {
    return (
        <>
            <Carousel slide={false}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/assets/carrousel-image1.webp"
                    alt="First slide"
                    />
                    <Carousel.Caption className='caption-carrousell'>
                    <h3 className='title-carrousell'>Compra ahora - Paga 2023</h3>
                    <p>Ordene en linea o en la tienda.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/assets/carrousel-image2.webp"
                    alt="Second slide"
                    />

                    <Carousel.Caption className='caption-carrousell'>
                    <h3 className='title-carrousell'>Financiamiento especial
                        <br /> Hasta 48 meses
                    </h3>
                    <p>En marcas calificadas.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/assets/carrousel-image4.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption className='caption-carrousell'>
                    <h3 className='title-carrousell'>Accesorios imprescindibles</h3>
                    <p>
                        Asegurese de estar listo para jugar.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default CarrouselImage;
