import React, { useState } from 'react';
import { ArrowRight, TrendingUp, CheckCircle2, Store, Banknote, Truck, MessageSquare, X, ShieldCheck, Globe, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const testimonials = [
  { name: "Chief Okafor", business: "Okafor & Sons Dist., Trade Fair", text: "We used to wait for retailers to visit our plaza. Now, orders drop on my phone every hour. It has transformed my business." },
  { name: "Mrs. Balogun", business: "Balogun Drinks Depot", text: "The Interswitch escrow payment is perfect. No more 'I will pay you tomorrow' stories from retailers. I get my money instantly." },
  { name: "Emeka", business: "Emeka Gadgets, Computer Village", text: "RestockPay AI handles the delivery riders. I just pack the items and hand them over. Very smooth and stress-free." },
  { name: "Alhaji Danjuma", business: "Danjuma Provisions, Kano", text: "My sales volume has doubled since I joined. The platform connects me to retailers I would never have reached." },
  { name: "Iya Ibeji", business: "Iya Ibeji Wholesale, Balogun", text: "I love that I don't have to manage a complicated website. Everything happens seamlessly." }
];

export default function WholesalerLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    category: '',
    phone: '',
    location: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('restock_wholesaler', JSON.stringify(formData));
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      {/* FINTECH HERO SECTION */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7a?q=80&w=2070&auto=format&fit=crop" 
            alt="Warehouse background" 
            className="w-full h-full object-cover object-center opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/95"></div>
        </div>
        
        {/* Diagonal Slant (Stripe style) */}
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-32 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-300 text-sm font-medium mb-8 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            For Wholesalers & Major Distributors
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight font-bold text-white mb-6 max-w-5xl mx-auto"
          >
            Scale your distribution. <br/>
            <span className="text-orange-400">Across Nigeria.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light"
          >
            Join RestockPay AI to connect with thousands of retailers across Nigeria. Get instant orders, guaranteed Interswitch escrow payments, and seamless logistics.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto z-10"
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center justify-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-orange-400 transition-colors duration-300 shadow-lg shadow-orange-500/20"
            >
              Become a Supplier
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#journey" 
              className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white/20 transition-colors shadow-sm"
            >
              See how it works
            </a>
          </motion.div>
        </div>
      </section>

      {/* LOGO MARQUEE */}
      <section className="w-full border-y border-black/[0.05] bg-white overflow-hidden py-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 flex flex-col items-center"
        >
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">Powered by trusted partners</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-xl font-bold font-serif flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded-sm"></div> Interswitch
            </div>
            <div className="text-xl font-bold tracking-tighter flex items-center gap-2 text-red-600">
              <Truck className="w-6 h-6" /> GIG Logistics
            </div>
            <div className="text-xl font-bold italic flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-green-500" /> WhatsApp
            </div>
          </div>
        </motion.div>
      </section>

      {/* THE JOURNEY (HOW IT WORKS) */}
      <section id="journey" className="w-full bg-slate-50 py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">Your Supplier Journey</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Focus on supplying, we handle the marketing, payments, and logistics.</p>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-orange-200 -translate-x-1/2 rounded-full hidden md:block"></div>

            <div className="space-y-12 md:space-y-24">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between group">
                <div className="md:w-1/2 md:pr-16 md:text-right flex flex-col md:items-end mb-6 md:mb-0">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 md:ml-auto">
                      <Globe className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-2">1. Get Listed</h3>
                    <p className="text-slate-500">Join our network and list your bulk inventory. Our AI instantly makes your products available to thousands of retailers.</p>
                  </motion.div>
                </div>
                <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-orange-500 rounded-full border-4 border-slate-50 -translate-x-1/2 z-10 hidden md:flex items-center justify-center text-white font-bold text-sm">1</div>
                <div className="md:w-1/2 md:pl-16"></div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between group">
                <div className="md:w-1/2 md:pr-16"></div>
                <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-orange-500 rounded-full border-4 border-slate-50 -translate-x-1/2 z-10 hidden md:flex items-center justify-center text-white font-bold text-sm">2</div>
                <div className="md:w-1/2 md:pl-16 flex flex-col items-start">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                      <MessageSquare className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-2">2. Receive Orders</h3>
                    <p className="text-slate-500">Get notified via WhatsApp or your dashboard whenever a retailer places an order for your goods.</p>
                  </motion.div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between group">
                <div className="md:w-1/2 md:pr-16 md:text-right flex flex-col md:items-end mb-6 md:mb-0">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 md:ml-auto">
                      <ShieldCheck className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-2">3. Guaranteed Payment</h3>
                    <p className="text-slate-500">Before you even pack the order, the retailer's funds are secured in our Interswitch escrow system. Zero risk of default.</p>
                  </motion.div>
                </div>
                <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-orange-500 rounded-full border-4 border-slate-50 -translate-x-1/2 z-10 hidden md:flex items-center justify-center text-white font-bold text-sm">3</div>
                <div className="md:w-1/2 md:pl-16"></div>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between group">
                <div className="md:w-1/2 md:pr-16"></div>
                <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-orange-500 rounded-full border-4 border-slate-50 -translate-x-1/2 z-10 hidden md:flex items-center justify-center text-white font-bold text-sm">4</div>
                <div className="md:w-1/2 md:pl-16 flex flex-col items-start">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                      <Truck className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-2">4. Handover to Rider</h3>
                    <p className="text-slate-500">A verified GIG Logistics partner arrives at your warehouse to pick up the goods. Once delivered, your funds are released instantly.</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENTO GRID FEATURES */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">Why sell on RestockPay AI?</h2>
          <p className="text-slate-500 text-lg">Focus on supplying, we handle the rest.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Box 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="md:col-span-2 bg-orange-600 rounded-[2rem] p-8 md:p-12 flex flex-col justify-between text-white relative overflow-hidden group cursor-default"
          >
            <div className="relative z-10 max-w-md">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Massive Volume</h3>
              <p className="text-orange-100 leading-relaxed">Get connected to thousands of retailers across the city. Receive bulk orders directly on your phone without marketing.</p>
            </div>
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-white/10 rounded-tl-full opacity-50 translate-x-10 translate-y-10 group-hover:scale-110 transition-transform duration-500"></div>
          </motion.div>

          {/* Bento Box 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-[#f8f9fa] rounded-[2rem] p-8 md:p-12 flex flex-col justify-between relative group cursor-default"
          >
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Banknote className="w-5 h-5 text-orange-600" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">Guaranteed Payment</h3>
            <p className="text-slate-500 leading-relaxed">Funds are secured in Interswitch escrow before the rider picks up. Zero risk of unpaid invoices.</p>
          </motion.div>

          {/* Bento Box 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-[#f8f9fa] rounded-[2rem] p-8 md:p-12 flex flex-col justify-between relative group cursor-default"
          >
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Truck className="w-5 h-5 text-orange-600" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">Zero Logistics</h3>
            <p className="text-slate-500 leading-relaxed">Our logistics partners handle all pickups and deliveries. You just prep the order.</p>
          </motion.div>

          {/* Bento Box 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="md:col-span-2 bg-slate-900 rounded-[2rem] p-8 md:p-12 flex flex-col justify-between text-white relative overflow-hidden group cursor-default"
          >
            <div className="relative z-10 max-w-md">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Store className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Digital Storefront</h3>
              <p className="text-slate-400 leading-relaxed">Manage your inventory, update prices, and track earnings all from a simple dashboard or via WhatsApp.</p>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-orange-500/20 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* ANIMATED TESTIMONIALS MARQUEE */}
      <section className="w-full bg-white py-24 border-t border-black/[0.05] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Trusted by Major Distributors</h2>
        </div>
        
        <div className="relative flex overflow-x-hidden group w-full">
          <div className="animate-marquee flex gap-6 whitespace-nowrap py-4">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="w-[350px] md:w-[450px] shrink-0 bg-slate-50 rounded-3xl p-8 border border-slate-100 whitespace-normal">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-orange-500 text-orange-500" />)}
                </div>
                <p className="text-slate-700 text-lg mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.business}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute top-0 animate-marquee2 flex gap-6 whitespace-nowrap py-4">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="w-[350px] md:w-[450px] shrink-0 bg-slate-50 rounded-3xl p-8 border border-slate-100 whitespace-normal">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-orange-500 text-orange-500" />)}
                </div>
                <p className="text-slate-700 text-lg mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.business}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="w-full max-w-5xl mx-auto px-6 py-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-orange-50 rounded-[3rem] p-12 md:p-20 text-center flex flex-col items-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6 relative z-10">Ready to scale?</h2>
          <p className="text-lg text-orange-800 mb-10 max-w-lg relative z-10">Join the fastest growing wholesale network in Nigeria.</p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group relative z-10 flex items-center gap-2 bg-orange-600 text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-orange-700 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(234,88,12,0.4)]"
          >
            Become a Supplier
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </section>

      {/* SIGNUP MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-10 w-full max-w-md relative shadow-2xl"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">Application Received!</h3>
                  <p className="text-slate-500 mb-8">Our team will contact you shortly to verify your store and get you onboarded.</p>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="w-full bg-slate-900 text-white rounded-2xl px-5 py-4 font-semibold hover:bg-slate-800 transition-all"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-2">Join the Network</h3>
                  <p className="text-slate-500 text-sm mb-8">Start receiving orders from verified retailers.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Business Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-slate-900 focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all outline-none"
                        placeholder="e.g. Chinedu Stores Ltd"
                        value={formData.businessName}
                        onChange={e => setFormData({...formData, businessName: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Category</label>
                      <select 
                        required
                        className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-slate-900 focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all outline-none appearance-none"
                        value={formData.category}
                        onChange={e => setFormData({...formData, category: e.target.value})}
                      >
                        <option value="" disabled>Select primary category</option>
                        <option value="provisions">Provisions & Groceries</option>
                        <option value="drinks">Drinks & Beverages</option>
                        <option value="toiletries">Toiletries & Cosmetics</option>
                        <option value="electronics">Electronics & Accessories</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">WhatsApp Number</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-slate-900 focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all outline-none"
                        placeholder="0801 234 5678"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Market Location</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-slate-900 focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all outline-none"
                        placeholder="e.g. Trade Fair, Lagos"
                        value={formData.location}
                        onChange={e => setFormData({...formData, location: e.target.value})}
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-orange-600 text-white rounded-2xl px-5 py-4 font-semibold hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-600/20 transition-all duration-300 mt-4"
                    >
                      Submit Application
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
