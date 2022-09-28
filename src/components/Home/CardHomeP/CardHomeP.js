import {Link} from 'react-router-dom'

export default function CardHomeP({image}) {
    return (
      <div className="flip-card">
          <div className="flip-card-inner">
              <div className="flip-card-front">
              <h1>¿Por qué elegir Guitar Store?</h1>
              </div>
              <div className="flip-card-back">
                  <h1>¿Por qué elegir Guitar Store?</h1>
                  <div> Nos enorgullecemos de ofrecer un alto nivel de servicio al cliente, asegurándonos de brindar solo la mejor experiencia de compra posible para nuestros clientes. Vendiendo equipos de calidad, ¡tenemos suficiente variedad y elección de equipo para todos!
                  </div>
                  <Link to='/nosotros'>MÁS INFORMACIÓN</Link>
              </div>
          </div>
      </div>
    )
  }