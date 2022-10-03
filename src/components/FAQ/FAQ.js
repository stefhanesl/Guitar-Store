import React from 'react';
import './faq.css'
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
  return (
    <div className='contenedor-faq'>
      <Accordion >
        <Accordion.Item eventKey="0" >
          <Accordion.Header>¿Puedo cambiar mi dirección de entrega?</Accordion.Header>
          <Accordion.Body>
            En ciertas situaciones, es posible que modifiquemos los detalles de la dirección si pagó con una tarjeta de crédito o débito; sin embargo, un miembro autorizado del equipo deberá realizar algunos controles de seguridad antes de que podamos considerar esto. Haga clic aquí para solicitar una modificación de su pedido.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>¿Cuándo recibiré mi pedido?</Accordion.Header>
          <Accordion.Body>
            Una vez que se envíe un pedido, recibirá un correo electrónico con un enlace a la información de seguimiento. A través de este enlace, puede monitorear su paquete cada vez que se escanea, mientras se dirige a su destino final. El rastreador de pedidos normalmente le dará algún tipo de fecha de entrega proyectada, y nuestro equipo de soporte está disponible si tiene algún problema con su entrega.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>¿Puedo proporcionar instrucciones de entrega para mi pedido?</Accordion.Header>
          <Accordion.Body>
            Le recomendamos encarecidamente que participe en esta correspondencia ya que, con la excepción de los pedidos liquidados a través de finanzas * , los clientes que lo hagan tendrán acceso a varias opciones de entrega para su comodidad y también podrán agregar cualquier instrucción especial directamente con el servicio de mensajería.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>¿Puedo seleccionar el día en que recibiré mi entrega?</Accordion.Header>
          <Accordion.Body>
            Haremos todo lo posible para realizar la entrega el día que haya solicitado; sin embargo, una vez que el paquete nos deja y entra en la red de mensajería, siempre existe la posibilidad de que se produzcan retrasos.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Mi envío se dañó, falta o está incompleto</Accordion.Header>
          <Accordion.Body>
            Nuestro objetivo es asegurarnos de que cada entrega llegue sin problemas, pero si hay algún problema con su pedido, nuestro equipo de soporte está siempre disponible para ayudarlo.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default FAQ;
