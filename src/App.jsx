import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import CookieBanner from './components/CookieBanner';
import FloatingContact from './components/FloatingContact';
import Home from './pages/Home';
import Services from './pages/Services';
import Benefits from './pages/Benefits';
import WhyChooseUs from './pages/WhyChooseUs';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import { storeUTMParams } from './utils/utm';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    storeUTMParams();
  }, []);

  return (
    <div className="app-shell">
      <ScrollProgress />
      <Header />
      <div className="main-content-wrapper">
        <div key={location.pathname} className="page-enter">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>
      </div>
      <Footer />
      <FloatingContact />
      <BackToTop />
      <CookieBanner />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
