import {useState} from 'react';
import useCount from '../hook/useCount';
import '../components/styles/ItemCount.css';

export const ItemCount = ({onAdd})=>{
    const {count,increase,decrease} = useCount()

    return(
        <div className='counter'>
            {/* <p>Stock disponible: {stock}</p> */}
            <div className='controls'>
                <button onClick={decrease} className='control-btn'>-</button>
                <p>{count}</p>
                <button onClick={increase} className='control-btn'>+</button>
            </div>
            <button className='add-btn' onClick={()=>onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}