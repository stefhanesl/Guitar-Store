
export default function CardHome({imagen, descripcion, ancho, image}) {
    return (
        <>
            <div className="card card-second">
                    <div className="card__image-holder">
                        <img className="card__image" src={imagen} alt="guitar" width={ancho}/>
                    </div>
                    <div className="card-home-description">
                        <div className="card-description">
                            {descripcion}
                            This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                        </div>
                        <div className="btn-card-home">
                            <div className="card-actions">
                                <a href="#" className="btn">COMPRAR YA!</a>
                            </div>
                        </div>
                    </div>
            </div>
        </>
  
    );
  }



