import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setIsOpen(false); // إغلاق القائمة تلقائياً عند اختيار صفحة على الجوال
  };

  return (
    <header className="fixed w-full z-50 bg-gray-900 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6">
        
        {/* الشعار */}
        <h1 
          className="text-2xl sm:text-3xl font-extrabold tracking-tighter italic cursor-pointer" 
          onClick={() => handleNavClick('home')}
        >
          H<span className="text-orange-500">BS</span>
        </h1>

        {/* زر الخطوط الثلاثة (الهامبرغر) للجوال */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white focus:outline-none text-2xl p-1 cursor-pointer"
          aria-label="Toggle Menu"
        >
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>

        {/* القائمة للشاشات الكبيرة (Desktop) */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-sm uppercase tracking-widest font-medium cursor-pointer">
            <li>
              <button 
                onClick={() => handleNavClick('home')}
                className={`transition ${currentPage === 'home' ? 'text-orange-400 border-b-2 border-orange-400 pb-1' : 'hover:text-orange-400'}`}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('about')}
                className={`transition ${currentPage === 'about' ? 'text-orange-400 border-b-2 border-orange-400 pb-1' : 'hover:text-orange-400'}`}
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('contact')}
                className={`transition ${currentPage === 'contact' ? 'text-orange-400 border-b-2 border-orange-400 pb-1' : 'hover:text-orange-400'}`}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* القائمة المنسدلة للجوال (Mobile Menu) - خلفية معتمة غير شفافة */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 border-t border-gray-800 shadow-2xl py-6 px-6">
          <ul className="flex flex-col gap-5 text-sm uppercase tracking-widest font-medium text-center">
            <li>
              <button 
                onClick={() => handleNavClick('home')}
                className={`w-full py-2 transition ${currentPage === 'home' ? 'text-orange-400 font-bold bg-white/5 rounded-lg' : 'hover:text-orange-400'}`}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('about')}
                className={`w-full py-2 transition ${currentPage === 'about' ? 'text-orange-400 font-bold bg-white/5 rounded-lg' : 'hover:text-orange-400'}`}
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('contact')}
                className={`w-full py-2 transition ${currentPage === 'contact' ? 'text-orange-400 font-bold bg-white/5 rounded-lg' : 'hover:text-orange-400'}`}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}