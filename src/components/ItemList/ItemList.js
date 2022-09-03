import './../style/container.css'
import Item from '../Item/Item';
import {Link} from 'react-router-dom';

const ItemList = ({guitars}) => {
    
    return (
        <div className='guitars-grid'>
            { guitars.length > 0 && 
                <>
                    {guitars.map(guitar => {
                        return(
                            <Link key={parseInt(guitar.id)} className='guitar-card' to={`/item/${guitar.id}`}>
                                <Item guitar={guitar}/>
                            </Link>
                        )
                    })}
                </>
            }
        </div>
    );
}

export default ItemList;
