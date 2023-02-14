import React from 'react'
import './styles/CartWidget.css';
import Cart from '../img/carrito.png';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import {Link} from 'react-router-dom';

const CartWidget = () => {
    const {getTotalProducts, productCartList} = useContext(CartContext);

    return(
        <div>
            {
                <>
                    <Link to="/cart">
                        <img src={Cart} alt="cart" style={{width:30}}/>
                    </Link>
                    <span style={{backgroundColor: 'white', borderRadius:"50%", width:"20px", heigth:"10px", fontSize:"10px", color:"black"}}>
                        {getTotalProducts()}
                    </span>
                </>
            }
        </div>
    )
}

export default CartWidget
