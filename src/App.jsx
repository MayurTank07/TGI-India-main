import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ContentProvider, useContent } from "./context/ContentContext";

import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import LoadingSpinner from "./components/LoadingSpinner";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ITPage from "./pages/Services/ITPage";
import BPOPage from "./pages/Services/BPOPage";
import NonITPage from "./pages/Services/NonITPage";
import AccountingPage from "./pages/Services/AccountingPage";
import HealthcarePage from "./pages/Services/HealthcarePage";
import CorperatePage from "./pages/Services/CorperatePage";
import OurClientPage from "./pages/OurClientPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactUsPage from "./pages/ContactUsPage";

// Admin
import AdminLogin from "./admin/AdminLogin";
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/AdminDashboard";
import ProtectedRoute from "./admin/ProtectedRoute";
import NavbarEditor from "./admin/sections/NavbarEditor";
import FooterEditor from "./admin/sections/FooterEditor";
import HomeEditor from "./admin/sections/HomeEditor";
import AboutEditor from "./admin/sections/AboutEditor";
import TestimonialsEditor from "./admin/sections/TestimonialsEditor";
import ContactEditor from "./admin/sections/ContactEditor";
import ServicesEditor from "./admin/sections/ServicesEditor";
import ClientsEditor from "./admin/sections/ClientsEditor";
import SubmissionsViewer from "./admin/sections/SubmissionsViewer";

function MainLayout() {
  const { loading } = useContent();
  
  if (loading) {
    return <LoadingSpinner />;
  }
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/it" element={<ITPage />} />
        <Route path="/services/bpo" element={<BPOPage />} />
        <Route path="/services/non-it" element={<NonITPage />} />
        <Route path="/services/accounting" element={<AccountingPage />} />
        <Route path="/services/healthcare" element={<HealthcarePage />} />
        <Route path="/services/corperate" element={<CorperatePage />} />
        <Route path="/our-clients" element={<OurClientPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <ContentProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Admin routes — no Navbar */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="navbar" element={<NavbarEditor />} />
            <Route path="footer" element={<FooterEditor />} />
            <Route path="home" element={<HomeEditor />} />
            <Route path="about" element={<AboutEditor />} />
            <Route path="testimonials" element={<TestimonialsEditor />} />
            <Route path="contact" element={<ContactEditor />} />
            <Route path="services" element={<ServicesEditor />} />
            <Route path="clients" element={<ClientsEditor />} />
            <Route path="submissions" element={<SubmissionsViewer />} />
          </Route>

          {/* Public routes — with Navbar */}
          <Route path="/*" element={<MainLayout />} />
        </Routes>
      </BrowserRouter>
    </ContentProvider>
  );
}

export default App;
