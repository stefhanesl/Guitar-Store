import './App.css';
import NavBar from './components/NavBar/NavBar';
import './components/style/navbar.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Contacto from './components/Contacto/Contacto';
import Nosotros from './components/Nosotros/Nosotros';
import PaginaError from './components/PaginaError/PaginaError';
import { useState, useEffect } from 'react';
import Cart from './components/Cart/Cart';


function App() {

  const [agregarValorCarrito, setAgregarValorCarrito] = useState(0);
  const [valor, setValor] = useState(0);

  const agregarAlCarrito = (cantidad) => {
      setValor(cantidad+valor)
  }

  useEffect(() => {
    setAgregarValorCarrito(valor)
  }, [valor]);

  return (
    <Router>
      <div className="App">
        <div>
          <NavBar agregarValorCarrito={agregarValorCarrito}/> 
            <Routes>
              <Route path='/'  element={<ItemListContainer/>} />
              <Route path='/category'  element={<ItemListContainer/>} />
              <Route path='/category/:tipoProducto'  element={<ItemListContainer/>} />
              <Route path='/item/:identificador'  element={<ItemDetailContainer agregarAlCarrito={agregarAlCarrito}/>} />
              <Route path='/nosotros' element={<Nosotros />} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='*' element={<PaginaError />} />
              <Route path='/cart' element={<Cart />} />
              
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
