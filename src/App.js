import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nosotros from './components/Nosotros/Nosotros';
import FAQ from './components/FAQ/FAQ'
import PaginaError from './components/PaginaError/PaginaError';
import Cart from './components/Cart/Cart';
import PiePagina from './components/PiePagina/PiePagina';
import { CartComponentContext } from './context/CartContext/CartContext';
import Home from './components/Home/Home';
import Registrarse from './components/Registrarse/Registrarse';
import { BuscadoresComponentContext } from './context/BuscadoresContext/BuscadoresContext';


function App() {
  return (
    <>
      <CartComponentContext>
        <BuscadoresComponentContext>
          <Router>
            <div className="App">
              <div>
                <NavBar />
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/category' element={<ItemListContainer />} />
                  <Route path='/category/:tipoProducto' element={<ItemListContainer />} />
                  <Route path='/item/:identificador' element={<ItemDetailContainer />} />
                  <Route path='/nosotros' element={<Nosotros />} />
                  <Route path='/faq' element={<FAQ />} />
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/registrarse' element={<Registrarse />} />
                  <Route path='*' element={<PaginaError />} />
                </Routes>
              </div>
              <PiePagina />
            </div>
          </Router>
        </BuscadoresComponentContext>
      </CartComponentContext>
    </>
  );
}

export default App;
