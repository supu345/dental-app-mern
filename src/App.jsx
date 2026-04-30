import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServiesPage from "./pages/ServiesPage";
import BlogPage from "./pages/BlogPage";
import Gallery from "./pages/Gallery";
import NotificationDialog from "./components/NotificationDialog";
import { useState } from "react";
import FinancingPage from "./pages/FinancingPage";
import GeneralDentistryPage from "./pages/GeneralDentistryPage";
import ProstheticDentistryPage from "./pages/ProstheticDentistryPage";
import CosmeticDentistryPage from "./pages/CosmeticDentistryPage";
import OrthodonticDentistryPage from "./pages/OrthodonticDentistryPage";
import BiologicalDentistryPage from "./pages/BiologicalDentistryPage";
import RadiologyPage from "./pages/RadiologyPage";
import SterilizationPage from "./pages/SterilizationPage";
import VideosPage from "./pages/VideosPage";
function App() {
  const [isDialogVisible, setIsDialogVisible] = useState(true);

  const handleClose = () => {
    setIsDialogVisible(false);
  };

  const handleAccept = () => {
    console.log("User accepted notifications");
    setIsDialogVisible(false);
  };
  return (
    <div>
      <div className="">
        <NotificationDialog isVisible={isDialogVisible} onClose={handleClose} />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServiesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/gallery" element={<Gallery />} />
            <Route path="/videos" element={<VideosPage />} />
          <Route path="/financing" element={<FinancingPage />} />
          <Route path="/general-dentistry" element={<GeneralDentistryPage />} />
          <Route
            path="/prosthetic-dentistry"
            element={<ProstheticDentistryPage />}
          />
          <Route
            path="/cosmetic-dentistry"
            element={<CosmeticDentistryPage />}
          />
          <Route
            path="/orthodontic-dentistry"
            element={<OrthodonticDentistryPage />}
          />
          <Route
            path="/biological-dentistry"
            element={<BiologicalDentistryPage />}
          />
          <Route path="/radiology" element={<RadiologyPage />} />
          <Route path="/sterilization" element={<SterilizationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
