import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import {Product} from './components/Product/Product';
import { ProductDetails } from './components/ProductDetails/ProductDetails';
import { Wishlist } from './components/Wishlist/Wishlist';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Product />} />
        <Route path="/:id" element={<ProductDetails />} />
        <Route path="/wishlist" element={<Wishlist/>}/>
      </Routes>
    </div>
  );
}

export default App;
