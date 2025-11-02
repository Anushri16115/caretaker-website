import { BrowserRouter, Routes, Route } from "react-router-dom";
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

export default function App() {
  return (
    <BrowserRouter>
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
