import './App.css';
import Header from './Header'
import CloudComputingServices from './services/cloud-computing'
import CostOptimizationServices from './services/cost-optimizations'
import InfrastructureServices from './services/infrastructure'
import MigrationServices from './services/migrations'
import WebDevelopmentServices from './services/web-development'
import Contact from './contact'
import Home from './home'
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div id="outer-container" className="absolute top-0 flex justify-center w-full h-full">
      <div id="inner container" className="text-center w-[800px] bg-blue-50 overflow-y-scroll">
        <Header />
        <div className="p-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="services/cloud-computing" element={<CloudComputingServices />} />
            <Route path="services/cost-optimizations" element={<CostOptimizationServices />} />
            <Route path="services/infrastructure" element={<InfrastructureServices />} />
            <Route path="services/migrations" element={<MigrationServices />} />
            <Route path="services/web-development" element={<WebDevelopmentServices />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
