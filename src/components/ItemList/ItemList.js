import './../style/container.css'
import Item from '../Item/Item';
import { Link } from 'react-router-dom';
import './itemlist.css'

const ItemList = ({ guitars }) => {


    return (
        <div className='guitars-grid'>
            {guitars.length > 0 &&
                <>
                    {guitars.map((guitar, indice) => {
                        return (
                            <Link key={indice} className='guitar-card' to={`/item/${guitar.id}`}>
                                <Item guitar={guitar} />
                            </Link>
                        )
                    })}
                </>
            }
        </div>
    );
}

export default ItemList;
