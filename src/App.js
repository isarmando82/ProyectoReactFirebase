import NavBar from './components/NavBar/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import Cart from './components/Cart/Cart' 
import "react-toastify/dist/ReactToastify.css";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
      <NavBar />
      <Routes>
       <Route path='/' element={<ItemListContainer />} />
       <Route path='/category/:categoryId' element={<ItemListContainer />} />
       <Route path='/item/:itemId' element={<ItemDetailContainer />} />
       <Route path='/cart' element={<Cart/>} />
       <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}




export default App;
