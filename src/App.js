import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from './Component/Sidebar';
import DashbaordI from './Pages/Dashboard';
import About from './Pages/About';
import Comment from './Pages/Comment';
import Analytics from './Pages/Analytics';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';





function App() {
  return (
    <BrowserRouter>
    <SideBar>
      <Routes>
        <Route path="/" element={<DashbaordI />} />
        <Route path="/DashbaordI" element={<DashbaordI />} />
        <Route path="/About" element={<About />} />
        <Route path="/Comment" element={<Comment />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/ProductList' element={<ProductList />} />
      </Routes>
    </SideBar>
  </BrowserRouter>
  )
}

export default App;
