import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Apartments from "./pages/Apartments.jsx";
import Units from "./pages/Units.jsx";
import Tenants from "./pages/Tenants.jsx";
import Leases from "./pages/Leases.jsx";
import Configurations from "./pages/Configurations.jsx";
import RoleBasedAccessControl from "./components/RoleBasedAccessControl.jsx";
import TenantOnboarding from "./components/TenantOnboarding.jsx";
import PaymentProcessing from "./components/PaymentProcessing.jsx";
import Reporting from "./components/Reporting.jsx";
import Notices from "./components/Notices.jsx";
import Advertising from "./components/Advertising.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/apartments" element={<Apartments />} />
        <Route exact path="/units" element={<Units />} />
        <Route exact path="/tenants" element={<Tenants />} />
        <Route exact path="/leases" element={<Leases />} />
        <Route exact path="/configurations" element={<Configurations />} />
        <Route exact path="/role-based-access-control" element={<RoleBasedAccessControl />} />
        <Route exact path="/tenant-onboarding" element={<TenantOnboarding />} />
        <Route exact path="/payment-processing" element={<PaymentProcessing />} />
        <Route exact path="/reporting" element={<Reporting />} />
        <Route exact path="/notices" element={<Notices />} />
        <Route exact path="/advertising" element={<Advertising />} />
      </Routes>
    </Router>
  );
}

export default App;