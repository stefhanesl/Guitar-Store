import './App.css';
import NavBar from './components/NavBar/NavBar';
import './components/style/navbar.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Contacto from './components/Contacto/Contacto';
import Nosotros from './components/Nosotros/Nosotros';
import PaginaError from './components/PaginaError/PaginaError';
function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <NavBar /> 
            <Routes>
              <Route path='/'  element={<ItemListContainer/>} />
              <Route path='/category'  element={<ItemListContainer/>} />
              <Route path='/category/:tipoProducto'  element={<ItemListContainer/>} />
              <Route path='/category/:identificador'  element={<ItemDetailContainer />} />
              <Route path='/nosotros' element={<Nosotros />} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='*' exact element={<PaginaError />} />
              
          </Routes>
        {/* <ItemListContainer/>
          <ItemDetailContainer /> */}
        </div>
        
      </div>
    </Router>
  );
}

export default App;
