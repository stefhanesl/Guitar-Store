import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({guitarra, agregarAlCarrito}) => {

    const {name, price, calification, images: {img1}, features:{feature1, feature2, feature3}, stock} = guitarra;


    return (
        <>
            <div className='item-detail-container'>
                <div className='item-detail-image'>
                    <img src={img1} alt='guitarra' width='200px'/>
                </div>
                <div className='item-detail-description'>
                    <h1 className='item-detail-title'>{name}</h1>
                    <div className='item-detail-explanation'>
                        <ul>
                            <li>{feature1}</li>
                            <li>{feature2}</li>
                            <li>{feature3}</li>
                        </ul>
                    </div>
                    <h4 className='item-detail-price'>${price}</h4>
                    <div className='item-detail-box'>
                        <div className='item-detail-starts'>
                            <ul>
                                <li>⭐ {calification}</li>
                            </ul>
                        </div>
                        <div className='item-detail-heart'>
                            <ul>
                                <li>🤍 Favorito</li>
                            </ul>
                        </div>
                    </div>
                    <ItemCount  stock={stock} agregarAlCarrito={agregarAlCarrito}/>
                </div>
            </div>

        </>
    );
}

export default ItemDetail;
