import "../ItemDetail/ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({id, title, image, description, price, category, count}) => {
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
                <ItemCount initial={1} stock={count} onAdd={(quantity) => console.log("Cantidad agregada", quantity)}/>
                </footer>
            </section>
        </article>

    )
}
export default ItemDetail