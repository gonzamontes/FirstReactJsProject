// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound';
import Cart from './containers/Cart';
import ShopProvider from './context/ShopContext';
import CartListContainer from './containers/CartListContainer';

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}></Route>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
        <Route path='/cart' element={<CartListContainer></CartListContainer>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
    </ShopProvider>
  );
}

export default App;

