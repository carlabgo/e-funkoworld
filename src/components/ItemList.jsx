import { Item } from "../components/Item"
import '../components/styles/ItemList.css';
/* import {Link} from 'react-router-dom';
 */
export const ItemList = ({items})=>{
    return(
        <div className="list">
            {
                items.map(producto=>(
                        <Item key={producto.id} item={producto}/>
                ))
            }
        </div>
    )
}