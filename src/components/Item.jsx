import React from "react";
import '../components/styles/Item.css';
import {Link} from 'react-router-dom';

export const Item = ({product: {img,id,name,price, category}}) =>{
    return(
        <div className="product-card">
            <img src={img} alt={name}/>
            <h4>{name}</h4>
            <p>$ {price}</p>
            <Link to={`/item/${id}`}>
                <button className='see-btn'>Ver mas</button>
            </Link>
        </div>
    )
}