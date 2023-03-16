import { useEffect, useContext } from "react";
import '../components/styles/ItemDetailContainer.css';
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from '../context/CartContext'
import useFirebase from '../hook/useFirebase'
import Loading from "./Loading";
import Error from "./Error";

export const ItemDetailContainer = () => {

    const {id} = useParams();
    const {getProduct,product, isLoading, products, getProducts} = useFirebase();
    const {addToCart} = useContext(CartContext)

    useEffect(() => {
        getProduct({id})
        getProducts()
        // eslint-disable-next-line
    }, [])

    const onAdd = (count) => {
        addToCart(product,count)
    }
    
    const ids = products.map( i => i.id)

    if (isLoading) {
        return <Loading /> 
    }

    return (
        <div className='item-detail-container'>
        {
            !ids.includes(id) ? <Error /> : product && <ItemDetail product={product} onAdd={onAdd} />
        }
        </div>
    )
}
