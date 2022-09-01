import './App.css';
import NavBar from './components/NavBar/NavBar';
import './components/style/navbar.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
// import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Contacto from './components/Contacto/Contacto';
import Nosotros from './components/Nosotros/Nosotros';
// import { PaginaError } from './components/Temas/PaginaError/PaginaError';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <NavBar /> 
            <Routes>
              <Route path='/' exact element={<ItemListContainer/>} />
              <Route path='/productos' exact element={<ItemListContainer/>} />
              <Route path='/productos/:tipoProducto' exact element={<ItemListContainer/>} />
              <Route path='/nosotros' exact element={<Nosotros />} />
              <Route path='/contacto' exact element={<Contacto />} />
              {/* <Route path='/error' exact element={<PaginaError />} /> */}
              
            </Routes>
          {/* <ItemListContainer/>
          <ItemDetailContainer /> */}
        </div>
        
      </div>
    </Router>
  );
}

export default App;
