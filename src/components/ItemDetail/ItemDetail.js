import "../ItemDetail/ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"


const ItemDetail = ({id, title, image, description, price, category, count}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    
    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
   
    
    const item = {
        id, title, price
    }

    addItem(item.quantity)
 }
    return (
        
        <article>
            <header className="Header">
                <h2 className="ItemHeader">
                    {title}
                </h2>
            </header>

            <picture>
                <img src={image} alt={title} className="ItemImg"/>
            </picture>
               
            <section>
                <p className="Info">
                    categoria: {category}
                </p>
                <p className="Info">
                    descripcion: {description}
                </p>
                <p className="Info">
                    precio: {price}
                </p>

                <footer className="ItemFooter">
                    { 
                        quantityAdded > 0 ? (
                        
                            <Link to="/cart" className="Option">Terminar Compra</Link>
                            ) : (
                            <ItemCount initial={1} stock={count} onAdd={handleOnAdd}/>
                            )
                
                    }
                
                </footer>
            </section>
        </article>

    )
}
export default ItemDetail