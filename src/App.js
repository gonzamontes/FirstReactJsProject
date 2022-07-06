// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
