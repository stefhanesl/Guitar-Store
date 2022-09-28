import React from 'react';
import './nosotros.css'

const Nosotros = () => {
    return (
        <div className='contenedor-nostros-gen'>
            <div className='contenedor-nostros'>
                <h1>Nosotros</h1>
                <div>
                    <div className='introduccion'>
                        Hemos recorrido un largo camino desde nuestro inicios. Proporcionamos una entrega rápida y un excelente servicio al cliente. Contamos con expertos disponibles que cubren guitarras, baterías, alta tecnología, sintetizadores y teclados para satisfacer todas sus necesidades. Otras tiendas de guitarras dejan productos obsoletos y polvorientos en los estantes, pero nos enorgullecemos de mantener nuestra amplia gama de existencias actualizada y lista para recoger y tocar. 
                    </div>
                    <tr/>
                    <tr/>
                    <h4> Datos del Centro de Distribución:</h4>
                    <ul>
                        <li> <span>🎸</span> Envío terrestre estándar gratuito.</li>
                        <li> <span>🎸</span>Estamos orgullosos de ofrecer la mejor política de devolución de la industria.</li>
                        <li> <span>🎸</span> 2 años de garantía GRATIS en
    guitarras y bajos.</li>
                        <li> <span>🎸</span> Hemos hecho que sea más fácil que
    nunca obtener el equipo que
    necesita de inmediato </li>
                    </ul>
                </div>
            </div>
            <div>
                <img src='assets/img/logo-guitar.png' id='logo-nosotros' alt='logo'/>
            </div>
        </div>
    );
}

export default Nosotros;
