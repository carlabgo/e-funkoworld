import { Item } from "../components/Item"
import '../components/styles/ItemList.css';
/* import {Link} from 'react-router-dom';
 */
export const ItemList = ({ products }) => {
    return (
        <>
        <div className='list'>
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </div>
        </>
    )
}