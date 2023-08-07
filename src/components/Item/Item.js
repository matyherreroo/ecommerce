import "./Item.css"
import ItemCount from "../ItemCount/ItemCount"



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
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Casntidad agregada", quantity)}/>
            </section>
               
            <footer className="ItemFooter">

                <button className="Option">ver detalles</button>

            </footer>
    </article>
        
    
        )
        
}
export default Item