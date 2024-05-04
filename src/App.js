import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddProduct from './pages/AddProduct';
import LoginPage from './pages/LoginPage';
import AddUser from './pages/AddUser';
import AddStaff from './pages/AddStaff';
import Users from './pages/Users';
import Staff from './pages/Staff';
import Products from './pages/Products';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="/adduser" element={<AddUser />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/addstaff" element={<AddStaff />} />
      <Route path="/users" element={<Users />} />
      <Route path="/staffs" element={<Staff />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default App;
