import {useState} from 'react';
import '../components/styles/ItemCount.css';

export const ItemCount = ({stock, initial, onAdd})=>{
    const [count, setCount] = useState(initial);

    const decrease = ()=>{
        if(count>1){
            setCount(count-1)
        }
    }

    const increase = ()=>{
        if(count<stock){
            setCount(count+1)
        }
    }

    return(
        <div className='counter'>
            <p>Stock disponible: {stock}</p>
            <div className='controls'>
                <button disabled={stock===0} onClick={decrease} className='control-btn'>-</button>
                <p>{count}</p>
                <button disabled={stock===0} onClick={increase} className='control-btn'>+</button>
            </div>
            <button disabled={stock === 0} className='add-btn' onClick={()=>onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}