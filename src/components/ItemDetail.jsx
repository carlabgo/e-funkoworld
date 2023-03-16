import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ItemCount } from './ItemCount';
import '../components/styles/ItemDetail.css';
import {Link} from 'react-router-dom';

export const ItemDetail = ({stock, product})=>{
    const {addProduct} = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);
    const { name, price, img, description } = product

    const onAdd = (count)=>{
        addProduct(product,count);
        setQuantity(count);
    }

    return(
        <div className='detail-container'>
            <div className='img-container'>
                <img src={img} alt={name}/>
            </div>
            <div className='img-container'>
                <h4>{name}</h4>
                <h5>$ {price}</h5>
                <p>{description}</p>
            </div>
            <ItemCount product={product} stock={stock} onAdd={onAdd}/>
            {
                quantity>0 &&
                <Link to="/cart">
                    <button>Ir al carrito</button>
                </Link>
            }
        </div>
    )
}