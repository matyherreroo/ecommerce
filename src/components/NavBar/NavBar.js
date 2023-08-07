import CartWidget from "../CartWidget/CartWidget";
import "../navBar/NavBar.css"
const NavBar = () => {
    return(
        <nav>
            <h3>Ropa</h3>
            <div>
                <button className="botonNav">Hoodies</button>
                <button className="botonNav">Pantalones</button>
                <button className="botonNav">Zapatillas</button>
                <button className="botonNav">Remeras</button>
                <button className="botonNav">accesorios</button>
                 
               
            </div>
              <div className="cart"><CartWidget/></div>
        </nav>
        
        )
}
export default NavBar;