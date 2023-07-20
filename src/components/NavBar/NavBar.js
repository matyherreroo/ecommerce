import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
    return(
        <nav>
            <h3>Ropa</h3>
            <div>
                <button>Hoodies</button>
                <button>pantalones</button>
                <button>zapatillas</button>
            </div>
        <CartWidget/>      
        </nav>
        
        )
}
export default NavBar;