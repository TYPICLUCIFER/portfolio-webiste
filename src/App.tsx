import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { QuoteModalProvider } from './context/QuoteModalContext';
import { PreviewModalProvider } from './context/PreviewModalContext';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { TemplatePreviewModal } from './components/TemplatePreviewModal';
import { SearchModal } from './components/SearchModal';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { CataloguePage } from './pages/CataloguePage';
import { CategoryPage } from './pages/CategoryPage';
import { TemplateDetailPage } from './pages/TemplateDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { FashionStudioDemoPage } from './templates/fashion-studio/FashionStudioDemoPage';

export function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <ThemeProvider>
      <QuoteModalProvider>
        <PreviewModalProvider>
          <BrowserRouter>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col bg-[#FAF7F2] dark:bg-[#0D0E12] text-[#191A1E] dark:text-[#F4F2EC] selection:bg-[#B27338]/20 selection:text-[#B27338] transition-colors duration-200">
              {/* Header with Search Trigger */}
              <Header onOpenSearch={() => setIsSearchOpen(true)} />

              {/* Main Page Content */}
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/templates" element={<CataloguePage />} />
                  
                  {/* Category Route Formats */}
                  <Route path="/templates/category/:categorySlug" element={<CategoryPage />} />
                  <Route path="/templates/:categorySlug" element={<CategoryPage />} />

                  {/* Template Detail Route Formats */}
                  <Route path="/templates/view/:templateSlug" element={<TemplateDetailPage />} />
                  <Route path="/template/:templateSlug" element={<TemplateDetailPage />} />

                  {/* Agency Pages */}
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />

                  {/* Legal Pages */}
                  <Route path="/privacy" element={<LegalPage />} />
                  <Route path="/terms" element={<LegalPage />} />

                  {/* Live Template Demos */}
                  <Route path="/demo/fashion-studio" element={<FashionStudioDemoPage />} />
                  <Route path="/demo/nova" element={<FashionStudioDemoPage />} />
                  <Route path="/demo/atelier" element={<FashionStudioDemoPage />} />

                  {/* Fallback */}
                  <Route path="*" element={<HomePage />} />
                </Routes>
              </main>

              {/* Footer */}
              <Footer />

              {/* Global Modals */}
              <QuoteModal />
              <TemplatePreviewModal />
              <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            </div>
          </BrowserRouter>
        </PreviewModalProvider>
      </QuoteModalProvider>
    </ThemeProvider>
  );
}

export default App;
