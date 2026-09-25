import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Assistant from "./components/Assistant";
import PageMeta from "./components/PageMeta";
import AppErrorBoundary from "./components/AppErrorBoundary";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const TobaTekSingh = lazy(() => import("./pages/TobaTekSingh"));
const PakCity = lazy(() => import("./pages/PakCity"));
const Contact = lazy(() => import("./pages/Contact"));

function PageLoading() {
  return (
    <div className="page-loading" role="status" aria-live="polite">
      Loading page…
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <AppErrorBoundary>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ScrollToTop />
        <PageMeta />
        <Header />
        <main id="main-content" tabIndex={-1}>
          <Suspense fallback={<PageLoading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/toba-tek-singh" element={<TobaTekSingh />} />
              <Route path="/projects/pak-city" element={<PakCity />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppFloat />
        <Assistant />
      </AppErrorBoundary>
    </BrowserRouter>
  );
}
