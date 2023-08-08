import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/navBar/NavBar';
import "./estilos/styles.css"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App"> 
      <NavBar/>
      <BrowserRouter>
          <Routes>
              <Route path='/'element={<ItemListContainer/>}/>
              <Route path='/category/:categoryId'element={<ItemListContainer/>}/>
              <Route path='/item/:itemId'element={<ItemDetailContainer/>}/>
              <Route path='*'element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
      </BrowserRouter>
    </div>
      
     
  )
}

export default App
