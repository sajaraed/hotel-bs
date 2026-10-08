import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="flex-grow">
        {currentPage === 'home' && <Home />}
        {currentPage === 'about' && <About />}
        {currentPage === 'contact' && <Contact />}
      </main>

      <Footer />
    </div>
  );
}