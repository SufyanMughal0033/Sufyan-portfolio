import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import BackToTop from './components/BackToTop.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import QuoteModal from './components/QuoteModal.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Reviews from './pages/Reviews.jsx';
import Pricing from './pages/Pricing.jsx';
import Discounts from './pages/Discounts.jsx';
import Contact from './pages/Contact.jsx';
import FAQ from './pages/FAQ.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const openQuote = () => setQuoteOpen(true);
  const closeQuote = () => setQuoteOpen(false);

  return (
    <>
      <LoadingScreen show={loading} />
      <CustomCursor />
      <ScrollProgress />
      <ScrollToTop />
      <Navbar onOpenQuote={openQuote} />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home onOpenQuote={openQuote} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services onOpenQuote={openQuote} />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/pricing" element={<Pricing onOpenQuote={openQuote} />} />
          <Route path="/discounts" element={<Discounts onOpenQuote={openQuote} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <QuoteModal open={quoteOpen} onClose={closeQuote} />
    </>
  );
}
