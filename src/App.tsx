import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Materials from './pages/Materials';
import WorkInProgress from './pages/WorkInProgress';
import FinishedGoods from './pages/FinishedGoods';
import Orders from './pages/Orders';
import Suppliers from './pages/Suppliers';
import Layout from './components/Layout';
export function App() {
  return <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/wip" element={<WorkInProgress />} />
          <Route path="/finished-goods" element={<FinishedGoods />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/suppliers" element={<Suppliers />} />
        </Routes>
      </Layout>
    </Router>;
}