/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import '../components/styles/ItemListContainer.css';
import { productsArray } from "../components/data/data";
import { ItemList } from "../components/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ()=>{
    const {productType} = useParams();

    const [products, setProductos] = useState([]);

    const promise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(productsArray);
        }, 2000);
    })

    useEffect(()=>{
        promise.then(result=>{
            if(!productType){
                setProductos(result)
            } else{
                const newList = result.filter(item=>item.category === productType);
                setProductos(newList)
                console.log(newList)
            }
        })
    },[productType])

    return(
        <div className="item-list-container">
            <ItemList items={products}/>
        </div>
    )
}