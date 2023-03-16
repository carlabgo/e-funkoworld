import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CartItem } from './CartItem';
import '../components/styles/CartContainer.css';
import Checkout from './Checkout';

export const CartContainer = () => {
  const {productCartList, clearProductCartList} = useContext(CartContext);

  return (
    <div className='container'>
      <div>
        {
          productCartList.length>0 ?
          <>
            {
              productCartList.map(item=>(
                <CartItem key={item.id} item={item}/>
              ))
            }
            <hr/>
            <button onClick={clearProductCartList}>Vaciar el carrito</button>
            <Checkout />
          </>
          :
          <h2>No has agregado productos</h2>
        }
      </div>
      
    </div>
  )
}