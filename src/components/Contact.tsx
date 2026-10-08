import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import loungeImg from '../assets/lounge-2930070_1920.jpg';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    // 1. التحقق من أن جميع الحقول ممتلئة
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all fields before submitting.');
      return;
    }

    // 2. التحقق من صحة صيغة الإيميل
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // إذا كان كل شيء صحيحاً، إظهار المربع المنبثق في منتصف الشاشة
    setSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    // إخفاء النافذة المنبثقة تلقائياً بعد 4 ثوانٍ
    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen relative">
      
      {/* Success Modal */}
      {success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl text-center max-w-xs sm:max-w-sm w-full mx-auto transform transition-all">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-inner">
              <i className="fas fa-check text-3xl sm:text-4xl"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Success!</h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-6 leading-relaxed">Your message has been successfully sent. We will get back to you soon.</p>
            <button 
              onClick={() => setSuccess(false)}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 sm:py-3 rounded-xl transition cursor-pointer text-sm sm:text-base"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Banner Section */}
      <section className="relative h-[30vh] flex items-center justify-center bg-gray-800 text-white pt-20">
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center" 
          style={{ backgroundImage: `url(${loungeImg})` }}
        ></div>
        <div className="relative text-center px-4" data-aos="fade-up">
          <h2 className="text-3xl sm:text-5xl font-bold">Get In Touch</h2>
          <p className="text-orange-400 mt-2 tracking-widest uppercase italic text-xs sm:text-sm">We are here for you 24/7</p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-10 sm:py-20">
        <div className="container mx-auto px-2 sm:px-6">
          {/* الكارد الرئيسي بجانب بعضه تماماً بتصميم مصغر متجاوب */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-3">
            
            {/* Contact Info Sidebar */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-12 text-white">
              <h3 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-8 italic">Contact <span className="text-orange-500">Information</span></h3>
              <p className="text-gray-400 mb-6 sm:mb-10 text-xs sm:text-lg">Have questions? Our team is ready to assist you at any time of the day.</p>
              
              <div className="space-y-4 sm:space-y-8">
                <div className="flex items-center gap-3 sm:gap-6 group">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition shrink-0">
                    <i className="fas fa-phone-alt text-xs sm:text-base"></i>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-sm text-gray-400 uppercase tracking-tighter">Call Us</p>
                    <p className="text-xs sm:text-lg font-semibold">(617) 555-5555</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-6 group">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition shrink-0">
                    <i className="fas fa-envelope text-xs sm:text-base"></i>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-sm text-gray-400 uppercase tracking-tighter">Email Us</p>
                    <p className="text-xs sm:text-lg font-semibold break-all">frontdesk@hotelbs.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-6 group">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition shrink-0">
                    <i className="fas fa-map-marker-alt text-xs sm:text-base"></i>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-sm text-gray-400 uppercase tracking-tighter">Visit Us</p>
                    <p className="text-xs sm:text-lg font-semibold">50 Main St, Boston MA</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 mt-8 sm:mt-16">
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition text-xs sm:text-base"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition text-xs sm:text-base"><i className="fab fa-instagram"></i></a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition text-xs sm:text-base"><i className="fab fa-twitter"></i></a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 p-6 sm:p-12 bg-white">
              <h3 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-8 text-gray-900">Send us a Message</h3>
              
              {/* Error Message Alert */}
              {error && (
                <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded-xl flex items-center gap-2">
                  <i className="fas fa-exclamation-circle text-base shrink-0"></i>
                  <span className="text-xs sm:text-sm font-medium">{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                  <div>
                    <label className="block text-[11px] sm:text-sm font-bold text-gray-700 mb-1 uppercase tracking-wide">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe" 
                      className="w-full bg-gray-50 border border-gray-200 p-2.5 sm:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition text-xs sm:text-base" 
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] sm:text-sm font-bold text-gray-700 mb-1 uppercase tracking-wide">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@mail.com" 
                      className="w-full bg-gray-50 border border-gray-200 p-2.5 sm:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition text-xs sm:text-base" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] sm:text-sm font-bold text-gray-700 mb-1 uppercase tracking-wide">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Booking / Inquiry / Feedback" 
                    className="w-full bg-gray-50 border border-gray-200 p-2.5 sm:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition text-xs sm:text-base" 
                  />
                </div>
                <div>
                  <label className="block text-[11px] sm:text-sm font-bold text-gray-700 mb-1 uppercase tracking-wide">Message</label>
                  <textarea 
                    rows={3} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?" 
                    className="w-full bg-gray-50 border border-gray-200 p-2.5 sm:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition text-xs sm:text-base"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1 cursor-pointer text-xs sm:text-base"
                >
                  Send Message <i className="fas fa-paper-plane ml-2"></i>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="h-[350px] sm:h-[450px] w-full bg-gray-200 relative">
        <iframe 
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.1763116568853!2d-71.0621!3d42.3584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3708940c04955%3A0x7be940f807887e22!2sBoston%2C%20MA!5e0!3m2!1sen!2sus!4v1625000000000" 
          allowFullScreen={true} 
          loading="lazy"
          title="Hotel Location"
        ></iframe>
      </section>
    </div>
  );
}