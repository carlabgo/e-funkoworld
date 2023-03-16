/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import '../components/styles/ItemListContainer.css';
import { ItemList } from "../components/ItemList";
import { useParams } from "react-router-dom";
import useFirebase from "../hook/useFirebase";
import Loading from "./Loading"

export const ItemListContainer = ()=>{
    const {category} = useParams();

    const {products, getProducts, isLoading} = useFirebase();

    useEffect(() => {
        getProducts()
        // eslint-disable-next-line
    }, []);

    const newList = category ? products.filter((p) => p.category === category ) : products;

    return(
        <>
        {isLoading ? <Loading/> : products &&
        <div className="item-list-container">
            <ItemList products={newList}/>
        </div>
    }
    </>
    )
}