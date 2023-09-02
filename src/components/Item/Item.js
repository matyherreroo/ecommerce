import "./Item.css"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"



const Item = ({id, title, image, price, category, count }) => {
    return (
    <article className="CardItem"> 
        <header className="Header">
            <h2 className="ItemHeader">
                {title}
            </h2>
        </header>
            <picture>
                <img src={image} alt={title}/>
            </picture>
                
            <section> 
                <p className="Info">
                    precio:{price}
                </p>
                <p className="Info">
                    categoria: {category}
                </p>
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada", quantity)}/>
            </section>
               
            <footer className="ItemFooter">
            <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
            </footer>
    </article>
        
    
        )
        
}
export default Item