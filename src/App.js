import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/navBar/NavBar';
import "./estilos/styles.css"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {CartProvider} from "./context/CartContext"
import Cart from "./components/Cart/Cart"
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <div className="App"> 
      <BrowserRouter> 
        <CartProvider>
          <NavBar/>
          <Routes>
              <Route path='/'element={<ItemListContainer/>}/>
              <Route path='/category/:categoryId'element={<ItemListContainer/>}/>
              <Route path='/item/:itemId'element={<ItemDetailContainer/>}/>
              <Route path='/cart'element={<Cart/>}/>
              <Route path='*'element={<h1>404 NOT FOUND</h1>}/>
              <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
         </CartProvider>
      </BrowserRouter>
    </div>
      
     
  )
}

export default App
