import { useState, useEffect } from "react";
import '../components/styles/ItemDetailContainer.css';
import { productsArray } from "../components/data/data";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = ()=>{
    const {productId} = useParams();

    const [item, setItem] = useState({});

    const getItem = (id)=>{
        return new Promise((resolve, reject)=>{
            const product = productsArray.find(item=>item.id === parseInt(id));
            resolve(product)
        })
    }

    useEffect(()=>{
        const getProducto = async()=>{
            const producto = await getItem(productId);
            setItem(producto);
        }
        getProducto();
    },[productId])

    return(
        <div className="item-detail-container">
            <ItemDetail item={item}/>
        </div>
    )
}