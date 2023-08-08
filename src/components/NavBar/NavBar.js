import CartWidget from "../CartWidget/CartWidget";
import "../navBar/NavBar.css"
import { NavLink} from "react-router-dom"


const NavBar = () => {
    return(
        <nav>
            <link to="/">
                <h3>Ecommerce</h3>
            </link>
            <div>
                <NavLink to={"/category/women's clothing"} className={({isActive}) => isActive ? "ActiveOption" : Option}>Ropa de mujer</NavLink>
                <NavLink to={"/category/men's clothing"} className={({isActive}) => isActive ? "ActiveOption" : Option}>Ropa de hombre</NavLink>
                <NavLink to={"/category/jewelery"} className={({isActive}) => isActive ? "ActiveOption" : Option}>joyas</NavLink>
                <NavLink to={"/category/electronics"} className={({isActive}) => isActive ? "ActiveOption" : Option}>Tecnologia</NavLink>
            </div>
              <div className="cart"><CartWidget/></div>
        </nav>
        
        )
}
export default NavBar;