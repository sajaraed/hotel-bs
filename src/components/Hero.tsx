import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import buildingImg from '../assets/building-66789_1920.jpg';
import loungeImg from '../assets/lounge-2930070_1920.jpg';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      disableMutationObserver: false, 
    });
  }, []);

  return (
    <div className="bg-slate-50 text-gray-800 w-full min-h-screen overflow-x-hidden">
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] sm:min-h-screen flex items-center justify-center bg-cover bg-center pt-24 sm:pt-28 pb-16 sm:pb-20"
        style={{ backgroundImage: `url(${buildingImg})` }}
      >
        {/* طبقة التعتيم السوداء */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        
        <div className="container mx-auto relative z-10 text-center text-white px-4 sm:px-6" data-aos="zoom-out" data-aos-duration="1500">
          <h6 className="text-orange-400 tracking-[0.3em] sm:tracking-[0.5em] uppercase mb-2 sm:mb-4 text-[10px] sm:text-sm font-bold">
            Welcome to Paradise
          </h6>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif mb-4 sm:mb-6 leading-tight italic">
            Enjoy Your <span className="text-orange-500">Grand</span> Stay
          </h1>
          <p className="mb-6 sm:mb-8 text-xs sm:text-base md:text-lg max-w-2xl mx-auto font-light text-gray-200">
            Experience world-class hospitality, breathtaking views, and unmatched luxury in the heart of the city.
          </p>
          <div className="flex flex-row justify-center gap-2 sm:gap-4">
            <button 
              onClick={() => setCurrentPage('contact')} 
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl text-xs sm:text-base cursor-pointer"
            >
              Book Your Room
            </button>
            <button 
              onClick={() => setCurrentPage('about')} 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full font-bold transition-all text-xs sm:text-base cursor-pointer"
            >
              Explore More
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-white animate-bounce z-10">
          <i className="fas fa-chevron-down text-sm sm:text-xl opacity-50"></i>
        </div>
      </section>

      {/* Heritage & Elegance Section (تم إبقاء الصورة والنص بجانب بعضهما على الجوال) */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto grid grid-cols-2 items-center gap-4 sm:gap-16 px-3 sm:px-6">
          <div className="relative" data-aos="fade-right">
            <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 w-32 h-32 sm:w-64 sm:h-64 bg-orange-100 rounded-full -z-10"></div>
            <img 
              src={loungeImg} 
              alt="Lounge" 
              className="rounded-xl sm:rounded-3xl shadow-xl sm:shadow-2xl w-full h-[220px] sm:h-[400px] md:h-[450px] object-cover"
            />
            <div className="absolute top-4 -left-4 sm:top-10 sm:-left-10 bg-orange-500 text-white p-3 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg">
              <span className="text-base sm:text-3xl font-bold block">25+</span>
              <span className="text-[8px] sm:text-xs uppercase tracking-widest">Years</span>
            </div>
          </div>
          
          <div data-aos="fade-left">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-serif font-bold mb-3 sm:mb-6 leading-tight text-gray-900">
              The Heritage & <span className="text-orange-500 italic">Elegance</span> Of Hotel BS
            </h2>
            <p className="mb-2 sm:mb-4 text-gray-600 leading-relaxed text-[11px] sm:text-base">
              Since our opening in 1995, Hotel BS has been a symbol of luxury and high-end service. We believe that every stay should be more than just a room; it should be a story worth telling.
            </p>
            <p className="mb-4 sm:mb-6 text-gray-600 leading-relaxed text-[11px] sm:text-base hidden sm:block">
              From our award-winning restaurants to our serene spa facilities, every corner of our hotel is designed to offer you the ultimate comfort.
            </p>
            <button 
              onClick={() => setCurrentPage('about')} 
              className="inline-flex items-center text-orange-600 font-bold hover:text-orange-700 transition cursor-pointer text-xs sm:text-sm"
            >
              DISCOVER OUR STORY <i className="fas fa-arrow-right ml-1.5 sm:ml-3"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-900 py-10 sm:py-14 text-white text-center">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-6">
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-1 sm:mb-2">500+</h4>
            <p className="text-gray-400 uppercase text-[10px] sm:text-xs tracking-widest">Happy Guests</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-1 sm:mb-2">120</h4>
            <p className="text-gray-400 uppercase text-[10px] sm:text-xs tracking-widest">Luxury Suites</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-1 sm:mb-2">12</h4>
            <p className="text-gray-400 uppercase text-[10px] sm:text-xs tracking-widest">World Awards</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-1 sm:mb-2">5</h4>
            <p className="text-gray-400 uppercase text-[10px] sm:text-xs tracking-widest">Star Rating</p>
          </div>
        </div>
      </section>

      {/* World-Class Amenities Section (تم إبقاء الكاردات بجانب بعضها على الجوال بـ 3 أعمدة أو أعمدة متجاورة) */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-6 text-center">
          <h6 className="text-orange-500 font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3 text-xs sm:text-sm">Our Services</h6>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-8 sm:mb-12 text-gray-900">World-Class Amenities</h3>
          
          <div className="grid grid-cols-3 gap-3 sm:gap-8">
            
            {/* Prime Location */}
            <div className="group bg-white p-3 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300">
              <div className="w-10 h-10 sm:w-16 sm:h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-5 group-hover:bg-orange-500 transition-colors">
                <i className="fa-solid fa-location-arrow text-sm sm:text-2xl text-orange-500 group-hover:text-white"></i>
              </div>
              <h3 className="text-xs sm:text-lg font-bold mb-1 sm:mb-3 text-gray-900">Prime Location</h3>
              <p className="text-gray-600 text-[10px] sm:text-sm">Located in the heart of the city, minutes away from top tourist attractions.</p>
            </div>

            {/* Gourmet Dining */}
            <div className="group bg-white p-3 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300">
              <div className="w-10 h-10 sm:w-16 sm:h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-5 group-hover:bg-orange-500 transition-colors">
                <i className="fa-solid fa-utensils text-sm sm:text-2xl text-orange-500 group-hover:text-white"></i>
              </div>
              <h3 className="text-xs sm:text-lg font-bold mb-1 sm:mb-3 text-gray-900">Gourmet Dining</h3>
              <p className="text-gray-600 text-[10px] sm:text-sm">Savor exquisite flavors from around the world prepared by acclaimed chefs.</p>
            </div>

            {/* Fitness & Wellness */}
            <div className="group bg-white p-3 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300">
              <div className="w-10 h-10 sm:w-16 sm:h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-5 group-hover:bg-orange-500 transition-colors">
                <i className="fa-solid fa-dumbbell text-sm sm:text-2xl text-orange-500 group-hover:text-white"></i>
              </div>
              <h3 className="text-xs sm:text-lg font-bold mb-1 sm:mb-3 text-gray-900">Fitness & Wellness</h3>
              <p className="text-gray-600 text-[10px] sm:text-sm">Rejuvenate your body and mind in our state-of-the-art gym and luxury spa.</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}