// import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import ItemCount from './components/ItemCountt';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Propiedad Greeting!"} />
      <ItemCount className="contadorItem" />
    </div>
  );
}

export default App;
