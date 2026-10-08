export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6 italic">
          H<span className="text-orange-500">BS</span>
        </h2>
        <div className="flex justify-center gap-8 mb-10">
          <a href="#" className="hover:text-orange-500 transition text-xl">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-orange-500 transition text-xl">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-orange-500 transition text-xl">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p className="text-sm tracking-widest uppercase">
          Hotel BS © 2026. Excellence in Hospitality.
        </p>
      </div>
    </footer>
  );
}