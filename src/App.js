import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';
import NavBar from './components/navBar/NavBar';
import "./estilos/styles.css"


function App() {
  return (
    <div className="App">
      <ItemListContainer greeting={'Bienvendo'}/> 
      <NavBar/> 
      <CartWidget/>
    
    </div>
      
     
  );
}

export default App
