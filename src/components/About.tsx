import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import loungeImg from '../assets/lounge-2930070_1920.jpg';
import travelImg from '../assets/to-travel-1677347_1920.jpg';
import iconImg from '../assets/icon-7797704_1280.png';

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 150,
      once: true,
    });
  }, []);

  return (
    <div className="bg-slate-50 text-gray-800 overflow-x-hidden min-h-screen">
      {/* Banner Section */}
      <section className="relative h-[30vh] sm:h-[40vh] flex items-center justify-center bg-gray-800 text-white pt-20">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center" 
          style={{ backgroundImage: `url(${loungeImg})` }}
        ></div>
        <div className="relative text-center z-10 px-4" data-aos="fade-up">
          <h2 className="text-3xl sm:text-5xl font-bold">Our Story</h2>
          <p className="text-orange-400 mt-2 tracking-[0.2em] sm:tracking-[0.3em] uppercase font-medium text-xs sm:text-base">Luxury & Comfort</p>
        </div>
      </section>

      {/* Main Story & Experience Section (تم إبقاء النص والصورة بجانب بعضهما حتى على الجوال) */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="container mx-auto grid grid-cols-2 gap-4 sm:gap-16 items-center px-3 sm:px-6">
          
          <div data-aos="fade-right">
            <h6 className="text-orange-500 font-bold uppercase tracking-widest mb-1 sm:mb-2 text-[10px] sm:text-sm">Since 1995</h6>
            <h2 className="text-xl sm:text-4xl font-bold mb-3 sm:mb-6 text-gray-900 leading-tight">
              Experience the Best <br /> Hospitality in the City
            </h2>
            <p className="text-xs sm:text-lg leading-relaxed text-gray-600 mb-4 sm:mb-6">
              Hotel BS offers a unique blend of modern luxury and traditional hospitality. Located in the heart of the city, we provide our guests with an unforgettable experience through our world-class amenities and personalized service.
            </p>
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <div className="border-l-2 sm:border-l-4 border-orange-500 pl-2 sm:pl-4">
                <span className="block text-base sm:text-2xl font-bold">200+</span>
                <span className="text-gray-500 text-[10px] sm:text-sm">Luxury Rooms</span>
              </div>
              <div className="border-l-2 sm:border-l-4 border-orange-500 pl-2 sm:pl-4">
                <span className="block text-base sm:text-2xl font-bold">15+</span>
                <span className="text-gray-500 text-[10px] sm:text-sm">Awards Won</span>
              </div>
            </div>
          </div>

          <div className="relative" data-aos="zoom-in">
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-full h-full border-2 border-orange-500 rounded-xl sm:rounded-2xl z-0"></div>
            <img 
              src={travelImg} 
              className="relative z-10 w-full h-[220px] sm:h-[450px] object-cover rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl" 
              alt="Hotel Interior" 
            />
          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-gray-900">Why Choose Us?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            
            <div className="p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition" data-aos="fade-up" data-aos-delay="100">
              <div className="text-2xl sm:text-3xl text-orange-500 mb-2 sm:mb-4 flex justify-center items-center h-10 sm:h-12">
                <i className="fa-solid fa-wifi"></i>
              </div>
              <h4 className="font-bold text-gray-800 text-xs sm:text-base">Free Wi-Fi</h4>
            </div>

            <div className="p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition" data-aos="fade-up" data-aos-delay="200">
              <div className="text-2xl sm:text-3xl text-orange-500 mb-2 sm:mb-4 flex justify-center items-center h-10 sm:h-12">
                <i className="fa-solid fa-person-swimming"></i>
              </div>
              <h4 className="font-bold text-gray-800 text-xs sm:text-base">Pool & Spa</h4>
            </div>

            <div className="p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition" data-aos="fade-up" data-aos-delay="300">
              <div className="text-2xl sm:text-3xl text-orange-500 mb-2 sm:mb-4 flex justify-center items-center h-10 sm:h-12">
                <i className="fa-solid fa-utensils"></i>
              </div>
              <h4 className="font-bold text-gray-800 text-xs sm:text-base">Fine Dining</h4>
            </div>

            <div className="p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition" data-aos="fade-up" data-aos-delay="400">
              <div className="text-2xl sm:text-3xl text-orange-500 mb-2 sm:mb-4 flex justify-center items-center h-10 sm:h-12">
                <i className="fa-solid fa-bell-concierge"></i>
              </div>
              <h4 className="font-bold text-gray-800 text-xs sm:text-base">24/7 Service</h4>
            </div>

          </div>
        </div>
      </section>

      {/* Guest Experiences Section (تم إبقاء التعليقات بجانب بعضها على الجوال أيضاً) */}
      <section className="relative py-12 sm:py-24 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${loungeImg})` }}>
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="container mx-auto px-3 sm:px-6 relative z-10">
          <h3 className="text-2xl sm:text-4xl font-bold text-center text-white mb-8 sm:mb-16" data-aos="fade-down">Guest Experiences</h3>

          <div className="grid grid-cols-2 gap-3 sm:gap-8">
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-8 rounded-xl sm:rounded-2xl text-white flex flex-col items-center text-center sm:text-right sm:flex-row sm:items-start gap-3 sm:gap-6" data-aos="fade-right">
              <img src={iconImg} className="w-12 h-12 sm:w-20 sm:h-20 rounded-full border-2 border-orange-400 object-cover shrink-0" alt="Guest" />
              <div>
                <div className="flex justify-center sm:justify-start gap-0.5 sm:gap-1 text-orange-400 mb-1 sm:mb-2 text-xs sm:text-base">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className="italic text-[11px] sm:text-lg leading-relaxed">"The service was impeccable. Every staff member made me feel like royalty. Highly recommended for business trips!"</p>
                <h5 className="mt-2 sm:mt-4 font-bold text-orange-400 text-xs sm:text-base">John Doe</h5>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-8 rounded-xl sm:rounded-2xl text-white flex flex-col items-center text-center sm:text-right sm:flex-row sm:items-start gap-3 sm:gap-6" data-aos="fade-left">
              <img src={iconImg} className="w-12 h-12 sm:w-20 sm:h-20 rounded-full border-2 border-orange-400 object-cover shrink-0" alt="Guest" />
              <div>
                <div className="flex justify-center sm:justify-start gap-0.5 sm:gap-1 text-orange-400 mb-1 sm:mb-2 text-xs sm:text-base">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className="italic text-[11px] sm:text-lg leading-relaxed">"A truly magical stay. The views from the suite were breathtaking and the food was 5-star quality."</p>
                <h5 className="mt-2 sm:mt-4 font-bold text-orange-400 text-xs sm:text-base">Sarah Wilson</h5>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}