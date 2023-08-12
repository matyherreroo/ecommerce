import CartWidget from "../CartWidget/CartWidget";
import "../navBar/NavBar.css"
import { NavLink, Link} from "react-router-dom"


const NavBar = () => {
    return(
        <nav>
            <Link to="/">
                <h3 className="title">Ecommerce</h3>
            </Link>
            <div className="navegador">
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