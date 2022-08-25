import './App.css';
import NavBar from './components/NavBar/NavBar';
import './components/style/navbar.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">

      <NavBar /> 
      <ItemListContainer/>
      
    </div>
  );
}

export default App;
