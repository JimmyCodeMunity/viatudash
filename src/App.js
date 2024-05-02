import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/addproduct" element={<AddProduct />} />
    </Routes>
  );
}

export default App;
