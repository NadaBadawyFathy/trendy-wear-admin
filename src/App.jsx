
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AdminLogin from "./Pages/Admin/AdminLogin";
import Sidebar from "./Pages/Admin/Siderbar";
import Dashboard from "./Pages/Admin/Dashboard";
import Analytics from "./Pages/Admin/Analytics";
import AnalysisChart from "./Pages/Admin/AnalysisChart";

import ProductList from "./Pages/Admin/Products";
import AddProduct from "./Pages/Admin/AddProduct";
import Reviews from "./Pages/Admin/Review";

function App() {
  return (
    // <div id="up" className="container">
      <Router>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/siderbar" element={<Sidebar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/analysis-chart" element={<AnalysisChart />} />

          <Route path="/products" element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/review" element={<Reviews />} />

          </Routes>
          </Router>
      
    // </div>
  );
}

export default App;

