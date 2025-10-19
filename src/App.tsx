import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import PatientLogin from "./pages/PatientLogin";
import CaretakerLogin from "./pages/CaretakerLogin";
import Blog from "./pages/Blog";
import Physiotherapy from "./pages/Physiotherapy";
import Caretaker from "./pages/Caretaker";
import PatientIntakeForm from "./pages/PatientIntakeForm";
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
          <Route path="/login/patient" element={<PatientLogin />} />
          <Route path="/login/caretaker" element={<CaretakerLogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/physiotherapy" element={<Physiotherapy />} />
          <Route path="/caretaker" element={<Caretaker />} />
          <Route path="/patient-intake" element={<PatientIntakeForm />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
