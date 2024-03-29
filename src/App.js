import './App.css';
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./components/Contacto/Contacto";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import  Carrito  from "./components/Carrito/Carrito"
import {CartProvider} from "./components/CartContext/CartContext"
import { Checkout } from './components/checkout/Checkout';
function App() {
  
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path='/carrito' element={<Carrito/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App;
