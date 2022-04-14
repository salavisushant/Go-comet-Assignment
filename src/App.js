import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import {Product} from './components/Product/Product';
import { ProductDetails } from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Product />} />
        <Route path="/:id" element={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
