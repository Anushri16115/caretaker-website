import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import FloatingCallButton from './components/FloatingCallButton';
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Physiotherapy from "./pages/Physiotherapy";
import Caretaker from "./pages/Caretaker";
import PatientDashboard from "./pages/PatientDashboard";
import CaretakerDashboard from "./pages/CaretakerDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import "./styles/index.css";
// Service pages
import PostSurgeryRecoveryCare from "./pages/services/PostSurgeryRecoveryCare";
import PostDeliveryCareMotherNewborn from "./pages/services/PostDeliveryCareMotherNewborn";
import DayCare from "./pages/services/DayCare";
import NightCare from "./pages/services/NightCare";
import Care24x7 from "./pages/services/Care24x7";
import HomeICU from "./pages/services/HomeICU";
import PhysiotherapySupport from "./pages/services/PhysiotherapySupport";
import InjectionDripCare from "./pages/services/InjectionDripCare";
import PalliativeCare from "./pages/services/PalliativeCare";
import HospiceCare from "./pages/services/HospiceCare";

function TitleUpdater() {
  const location = useLocation();
  useEffect(() => {
    const base = "Abhiruchi Caretaker";
    const path = location.pathname;

    const map: Record<string, string> = {
      "/": `${base}` ,
      "/about": `About Us | ${base}`,
      "/services": `Services | ${base}`,
      "/contact": `Contact | ${base}`,
      "/login": `Login | ${base}`,
      "/register": `Register | ${base}`,
      "/physiotherapy": `Physiotherapy | ${base}`,
      "/caretaker": `Caretaker | ${base}`,
      "/patient-dashboard": `Patient Dashboard | ${base}`,
      "/caretaker-dashboard": `Caretaker Dashboard | ${base}`,
    };

    let title = map[path];
    if (!title && path.startsWith("/services/")) {
      const seg = path.split("/").pop() || "Service";
      const pretty = seg
        .replace(/-/g, " ")
        .replace(/\b\w/g, (m) => m.toUpperCase());
      title = `${pretty} | ${base}`;
    }
    document.title = title || base;
  }, [location.pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <TitleUpdater />
      <FloatingWhatsAppButton />
      <FloatingCallButton />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/post-surgery-recovery-care" element={<PostSurgeryRecoveryCare />} />
          <Route path="/services/post-delivery-care-mother-newborn" element={<PostDeliveryCareMotherNewborn />} />
          <Route path="/services/day-care" element={<DayCare />} />
          <Route path="/services/night-care" element={<NightCare />} />
          <Route path="/services/care-24x7" element={<Care24x7 />} />
          <Route path="/services/home-icu-ventilator-support" element={<HomeICU />} />
          <Route path="/services/physiotherapy-support" element={<PhysiotherapySupport />} />
          <Route path="/services/injection-drip-care" element={<InjectionDripCare />} />
          <Route path="/services/palliative-care" element={<PalliativeCare />} />
          <Route path="/services/hospice-care" element={<HospiceCare />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />    
          <Route path="/physiotherapy" element={<Physiotherapy />} />
          <Route path="/caretaker" element={<Caretaker />} />
          <Route path="/patient-dashboard" element={<ProtectedRoute><PatientDashboard /></ProtectedRoute>} />
          <Route path="/caretaker-dashboard" element={<ProtectedRoute><CaretakerDashboard /></ProtectedRoute>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
