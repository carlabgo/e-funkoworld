import '../components/styles/Item.css';
import {Link} from 'react-router-dom';

export const Item = ({item})=>{
    return(
        <div className="product-card">
            <img src={item.pictureUrl} alt={item.title}/>
            <h4>{item.name}</h4>
            <p>$ {item.price}</p>
            <Link to={`/item/${item.id}`}>
                <button className='see-btn'>Ver mas</button>
            </Link>
        </div>
    )
}