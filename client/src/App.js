import './App.css';

import { Link, Navigate, Route, Routes } from 'react-router-dom';

import { AllProducts } from './views/AllProducts';
import { ShowProduct } from './views/ShowProduct';
import { AddProduct } from './views/AddProduct';
import { EditProduct } from './views/EditProduct';
import { NotFound } from './views/NotFound';

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <h1 className="navbar-brand mb-0">Product Manager</h1>
      </nav>
      <div className="justify-content-center">
        <AddProduct/>
      </div>

      {/* <div className="justify-content-center">
        <AllProducts/>
      </div> */}

      <Routes>
        {/* Redirect example */}
        <Route path="/" element={<Navigate to="/products/all" replace />} />
        <Route path="/products/all" element={<AllProducts />} />
        <Route path="/products/:id/edit" element={<EditProduct />} />
        <Route path="/products/:id" element={<ShowProduct />} />
        {/* <Route path="/products/new" element={<AddProduct />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;