import { Routes, Route, useLocation } from 'react-router-dom';

// Страницы
import HomePage from './pages/pageHome/HomePage';
import AttractionsPage from './pages/AttractionsPage/AttractionsPage';
import AttractionDetailPage from './pages/AttractionDetailes/AttractionDetailPage';
import ContactPage from './pages/ContactPage/ContactPage';

// Компоненты
import Header from './components/header/header';
import HeaderHomeTop from './components/headerHome/header';
import Footer from './components/footer/footer';

import './App.scss';

function App() {
  return (
    <>
      <AppContent />
    </>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      {/* Условный рендеринг Header */}
      {location.pathname === '/' && <HeaderHomeTop />}
      {(location.pathname === '/attractions' || location.pathname.startsWith('/attractions/')) && <Header />}
      {location.pathname === '/contacts' && <Header />}

      {/* Основной контент */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/attractions" element={<AttractionsPage />} />
        <Route path="/attractions/:id" element={<AttractionDetailPage />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;