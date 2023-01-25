import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import './styles/CartWidget.css';
import React from 'react'

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <FontAwesomeIcon icon={faCartShopping} size="10px" color="white"/>
            <div className="quantity-display">5</div>
        </div>
    )
}

export default CartWidget
