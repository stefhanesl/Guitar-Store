import { Link } from "react-router-dom";

export default function CardHome({imagen, descripcion, ancho, enlace}) {
    return (
        <>
            <div className="card card-second">
                    <div className="card__image-holder">
                        <img className="card__image" src={imagen} alt="guitar" width={ancho}/>
                    </div>
                    <div className="card-home-description">
                        <div className="card-description">
                            {descripcion}
                           
                        </div>
                        <div className="btn-card-home">
                            <div className="card-actions">
                                <Link to={enlace} className="btn">COMPRAR AHORA!</Link>
                            </div>
                        </div>
                    </div>
            </div>
        </>
  
    );
  }



