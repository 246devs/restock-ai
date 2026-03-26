import { Link, Outlet, useLocation } from 'react-router-dom';
import { Package, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Layout() {
  const location = useLocation();
  const isWholesaler = location.pathname === '/wholesaler';

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#fcfcfc] selection:bg-emerald-200 selection:text-emerald-900 overflow-hidden">
      <ScrollToTop />
      {/* Ultra-modern Floating Navbar */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="fixed top-6 left-0 right-0 z-50 px-4 pointer-events-none"
      >
        <div className="max-w-fit mx-auto bg-white/70 backdrop-blur-2xl border border-black/[0.04] shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-full h-14 flex items-center justify-between px-2 sm:px-3 pointer-events-auto">
          <Link to="/" className="flex items-center gap-2 font-semibold text-base tracking-tight text-slate-900 hover:opacity-70 transition-opacity pl-3 pr-4">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isWholesaler ? 'bg-orange-500' : 'bg-emerald-500'} text-white`}>
              <Package className="w-3.5 h-3.5" />
            </div>
            <span>RestockPay AI</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-500 bg-black/[0.03] p-1 rounded-full mr-2">
            <Link 
              to="/" 
              className={`px-5 py-1.5 rounded-full transition-all duration-300 ${!isWholesaler ? 'bg-white text-black shadow-sm' : 'hover:text-black'}`}
            >
              Retailers
            </Link>
            <Link 
              to="/wholesaler" 
              className={`px-5 py-1.5 rounded-full transition-all duration-300 ${isWholesaler ? 'bg-white text-black shadow-sm' : 'hover:text-black'}`}
            >
              Wholesalers
            </Link>
          </nav>

          <div className="flex items-center">
            <a 
              href={isWholesaler ? "#signup" : "https://wa.me/14155238886?text=join%20restock-ai"} 
              target={isWholesaler ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className={`hidden sm:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95 ${isWholesaler ? 'bg-orange-600' : 'bg-black'}`}
            >
              {isWholesaler ? 'Become a Supplier' : 'Try Sandbox'}
            </a>
            {/* Mobile Menu Toggle */}
            <Link 
              to={isWholesaler ? "/" : "/wholesaler"} 
              className="md:hidden px-4 py-2 rounded-full bg-black/[0.05] text-xs font-medium text-black"
            >
              {isWholesaler ? 'Retailers' : 'Wholesalers'}
            </Link>
          </div>
        </div>
      </motion.header>

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      <footer className="py-16 bg-white border-t border-black/[0.05] mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-0 font-semibold text-slate-900 tracking-tight">
            <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
              <Package className="w-3 h-3" />
            </div>
            RestockPay AI
          </div>
          <p>© 2026 RestockPay AI. Enyata x Interswitch Buildathon.</p>
          <p className="mt-4 md:mt-0 flex items-center gap-1.5">
            Powered by <span className="font-medium text-slate-900">Interswitch</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
