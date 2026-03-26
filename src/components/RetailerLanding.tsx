import { useState, useEffect, useRef } from 'react';
import { ArrowRight, MessageSquare, Zap, ShieldCheck, Truck, Star, ChevronLeft, Video, Phone, Smile, Paperclip, Camera, Mic, Package, CheckCircle2, Search, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Chat Simulation Component
function ChatSimulation() {
  const [step, setStep] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    const el = containerRef.current;
    if (!el) return;

    el.scrollTop = el.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [step]);

  const messages = [
    { type: 'user', text: 'Abeg I need 5 cartons of Indomie Super Pack fast fast.', time: '10:00 AM' },
    { type: 'ai', text: 'No wahala! Searching nearby wholesalers...', isTyping: true, time: '10:00 AM' },
    { type: 'ai', text: 'Found it! Best price: ₦22,500 from Iya Ayo Store. Delivery: ₦1,000 via GIG Logistics.', isTyping: true, time: '10:01 AM' },
    { type: 'ai', text: 'Click below to pay securely via Interswitch escrow.\n\n', isLink: true, linkText: 'https://restockpay.com/pay/JNSIU2UN', time: '10:01 AM' },
    { type: 'user', text: 'Payment successful ✅', time: '10:02 AM' },
    { type: 'ai', text: 'Confirming payment with Interswitch...', isTyping: true, time: '10:02 AM' },
    { type: 'ai', text: 'Confirmed! 🔒 Funds are in escrow. GIG Logistics rider is on the way! 🚚', time: '10:02 AM' }
  ];

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1500),
      setTimeout(() => setStep(2), 3500),
      setTimeout(() => setStep(3), 5500),
      setTimeout(() => setStep(4), 7500),
      setTimeout(() => setStep(5), 9500),
      setTimeout(() => setStep(6), 11500),
      setTimeout(() => setStep(7), 13500),
      // Loop
      setTimeout(() => setStep(0), 18000)
    ];
    return () => timers.forEach(clearTimeout);
  }, [step === 0]); // Re-run when step resets to 0

  return (
    <div className="relative w-[320px] shrink-0 mx-auto bg-[#efeae2] rounded-[2.5rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden h-[600px] flex flex-col">
      {/* WhatsApp Header */}
      <div className="bg-[#075e54] text-white px-3 py-3 flex items-center gap-3 z-10 shadow-sm">
        <div className="flex items-center gap-1 cursor-pointer">
          <ChevronLeft className="w-5 h-5 -ml-1" />
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
            <Package className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="flex-1 cursor-pointer">
          <div className="font-semibold text-base leading-tight">RestockPay AI</div>
          <div className="text-[11px] text-white/80 leading-tight">online</div>
        </div>
        <div className="flex items-center gap-4">
          <Video className="w-5 h-5 cursor-pointer" />
          <Phone className="w-4 h-4 cursor-pointer" />
        </div>
      </div>

      {/* Chat Body */}
      <div ref={containerRef} className="flex-1 p-3 overflow-y-auto flex flex-col gap-3 relative bg-[#efeae2] no-scroll">
        {/* WhatsApp background pattern simulation */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', backgroundSize: 'cover' }}></div>

        <div className="text-center my-2">
          <span className="bg-[#e1f3fb] text-[#54656f] text-[11px] px-3 py-1 rounded-lg shadow-sm inline-block">TODAY</span>
        </div>
          <AnimatePresence>
            {messages.slice(0, step).map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`max-w-[85%] rounded-lg px-3 py-2 text-[14px] relative shadow-sm ${msg.type === 'user'
                  ? 'bg-[#dcf8c6] text-[#111b21] self-end rounded-tr-none'
                  : 'bg-white text-[#111b21] self-start rounded-tl-none'
                  }`}
              >
                {/* Tail for bubbles */}
                <div className={`absolute top-0 w-3 h-3 ${msg.type === 'user' ? '-right-2 bg-[#dcf8c6]' : '-left-2 bg-white'}`} style={{ clipPath: msg.type === 'user' ? 'polygon(0 0, 0 100%, 100% 0)' : 'polygon(100% 0, 100% 100%, 0 0)' }}></div>

                {msg.isTyping && idx === step - 1 ? (
                  <div className="flex gap-1 items-center h-5 px-1">
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <span className="leading-snug whitespace-pre-wrap">{msg.text}</span>
                    {msg.isLink && (
                      <a href="#" className="text-[#027eb5] hover:underline break-all mt-1 inline-block">
                        {msg.linkText}
                      </a>
                    )}
                    <div className="text-[10px] text-slate-400 text-right mt-1 leading-none flex justify-end items-center gap-1">
                      {msg.time}
                      {msg.type === 'user' && <CheckCircle2 className="w-3 h-3 text-[#53bdeb]" />}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
      </div>

      {/* WhatsApp Footer/Input */}
      <div className="bg-[#f0f0f0] px-2 py-2 flex items-end gap-2 z-10">
        <div className="flex-1 bg-white rounded-3xl px-3 py-2.5 flex items-center gap-3 text-[#54656f] shadow-sm min-h-[44px]">
          <Smile className="w-6 h-6 shrink-0 cursor-pointer" />
          <span className="text-[15px] flex-1 text-slate-400 truncate">Message</span>
          <Paperclip className="w-5 h-5 shrink-0 cursor-pointer" />
          <Camera className="w-5 h-5 shrink-0 cursor-pointer" />
        </div>
        <div className="w-11 h-11 rounded-full bg-[#00a884] flex items-center justify-center text-white shrink-0 shadow-sm cursor-pointer hover:bg-[#008f6f] transition-colors">
          <Mic className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  { name: "Iya Ayo", store: "Iya Ayo Provisions, Surulere", text: "Since I started using RestockPay AI on WhatsApp, I don't close my shop to go to market anymore. The goods come to me!" },
  { name: "Chinedu", store: "Chinedu Electronics, Alaba", text: "Fast delivery and the escrow gives me peace of mind. I get my cables and accessories same day." },
  { name: "Alhaji Musa", store: "Musa Supermarket, Kano", text: "Finding suppliers used to be hard. Now I just type what I want and the AI finds the best price." },
  { name: "Mama Nkechi", store: "Nkechi Stores, Aba", text: "Very easy to use. Even my sales girl uses it to restock when I am not around." },
  { name: "Tunde", store: "Tunde Drinks Depot", text: "I restock my drinks without leaving my shop. The riders are fast and the prices are just like Trade Fair." }
];

export default function RetailerLanding() {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      {/* FINTECH HERO SECTION */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=2070&auto=format&fit=crop"
            alt="Market background"
            className="w-full h-full object-cover object-center opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/95"></div>
        </div>

        {/* Diagonal Slant (Stripe style) */}
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-32 flex flex-col lg:flex-row items-center gap-12">
          {/* Left Text Content */}
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-sm font-medium mb-8 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              The Smartest Way to Restock in Nigeria
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight font-bold text-white mb-6"
            >
              Stock your shop. <br />
              <span className="text-emerald-400">Zero stress.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed font-light"
            >
              RestockPay AI is a WhatsApp-first platform that solves frequent stockouts. Snap an empty shelf, send a voice note, and get goods delivered from Balogun or Alaba without leaving your shop.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="https://wa.me/14155238886?text=join%20restock-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-emerald-400 transition-colors duration-300 shadow-lg shadow-emerald-500/20"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                Try on WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#journey"
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white/20 transition-colors shadow-sm"
              >
                See how it works
              </a>
            </motion.div>
          </div>

          {/* Right Chat Simulation */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full flex justify-center lg:justify-end perspective-1000"
          >
            <motion.div
              whileHover={{ rotateY: 0, rotateX: 0, scale: 1.02 }}
              className="relative transform lg:rotate-y-[-10deg] lg:rotate-x-[5deg] transition-all duration-700 ease-out shadow-2xl shadow-emerald-900/50 rounded-[2.5rem]"
            >
              <ChatSimulation />
            </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">Your Restock Journey</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">From an empty shelf to a fully stocked shop in four simple steps.</p>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-emerald-200 -translate-x-1/2 rounded-full hidden md:block"></div>

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
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 md:ml-auto">
                      <MessageSquare className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-2">1. Send a Message</h3>
                    <p className="text-slate-500">Just text what you need on WhatsApp, send a voice note in Pidgin, or snap a photo of the empty shelf. Our AI understands instantly.</p>
                  </motion.div>
                </div>
                <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-slate-50 -translate-x-1/2 z-10 hidden md:flex items-center justify-center text-white font-bold text-sm">1</div>
                <div className="md:w-1/2 md:pl-16"></div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between group">
                <div className="md:w-1/2 md:pr-16"></div>
                <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-slate-50 -translate-x-1/2 z-10 hidden md:flex items-center justify-center text-white font-bold text-sm">2</div>
                <div className="md:w-1/2 md:pl-16 flex flex-col items-start">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                      <Search className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-2">2. AI Finds the Best Price</h3>
                    <p className="text-slate-500">Our AI instantly scans verified wholesalers in major markets to find you the cheapest price and fastest delivery.</p>
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
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 md:ml-auto">
                      <CreditCard className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-2">3. Secure Escrow Payment</h3>
                    <p className="text-slate-500">Pay securely via Interswitch. Your money is held in escrow and only released when you receive your goods.</p>
                  </motion.div>
                </div>
                <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-slate-50 -translate-x-1/2 z-10 hidden md:flex items-center justify-center text-white font-bold text-sm">3</div>
                <div className="md:w-1/2 md:pl-16"></div>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between group">
                <div className="md:w-1/2 md:pr-16"></div>
                <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-slate-50 -translate-x-1/2 z-10 hidden md:flex items-center justify-center text-white font-bold text-sm">4</div>
                <div className="md:w-1/2 md:pl-16 flex flex-col items-start">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                      <Truck className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-2">4. Same-Day Delivery</h3>
                    <p className="text-slate-500">A verified GIG Logistics rider picks up the goods and delivers them straight to your shop within hours.</p>
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
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">Everything you need, <br /> right in WhatsApp.</h2>
          <p className="text-slate-500 text-lg">A seamless experience from ordering to delivery.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Box 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="md:col-span-2 bg-[#f8f9fa] rounded-[2rem] p-8 md:p-12 flex flex-col justify-between overflow-hidden relative group cursor-default"
          >
            <div className="relative z-10 max-w-md">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">Order with a photo or voice note</h3>
              <p className="text-slate-500 leading-relaxed">Don't know the exact name? Just snap a picture of the empty shelf or send a voice note in Pidgin. Our AI identifies it instantly.</p>
            </div>
            {/* Decorative element */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-emerald-100 rounded-tl-full opacity-50 translate-x-10 translate-y-10 group-hover:scale-110 transition-transform duration-500"></div>
          </motion.div>

          {/* Bento Box 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-emerald-600 rounded-[2rem] p-8 md:p-12 flex flex-col justify-between text-white relative overflow-hidden group cursor-default"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Best Prices</h3>
              <p className="text-emerald-100 leading-relaxed">We scan multiple verified wholesalers to find you the absolute best deal.</p>
            </div>
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
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">Secure Escrow</h3>
            <p className="text-slate-500 leading-relaxed">Your money is safe. We hold it until you confirm you've received your goods.</p>
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
                <Truck className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-slate-400 leading-relaxed">Logistics partners pick up from the wholesaler and deliver straight to your shop within hours.</p>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-emerald-500/20 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* ANIMATED TESTIMONIALS MARQUEE */}
      <section className="w-full bg-white py-24 border-t border-black/[0.05] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Trusted by Retailers Nationwide</h2>
        </div>

        <div className="relative flex overflow-x-hidden group w-full">
          <div className="animate-marquee flex gap-6 whitespace-nowrap py-4">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="w-[350px] md:w-[450px] shrink-0 bg-slate-50 rounded-3xl p-8 border border-slate-100 whitespace-normal">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-emerald-500 text-emerald-500" />)}
                </div>
                <p className="text-slate-700 text-lg mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.store}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-0 animate-marquee2 flex gap-6 whitespace-nowrap py-4">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="w-[350px] md:w-[450px] shrink-0 bg-slate-50 rounded-3xl p-8 border border-slate-100 whitespace-normal">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-emerald-500 text-emerald-500" />)}
                </div>
                <p className="text-slate-700 text-lg mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.store}</div>
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
          className="bg-emerald-50 rounded-[3rem] p-12 md:p-20 text-center flex flex-col items-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6 relative z-10">Ready to restock?</h2>
          <p className="text-lg text-emerald-800 mb-10 max-w-lg relative z-10">Join hundreds of retailers saving time and money every week.</p>
          <a
            href="https://wa.me/14155238886?text=join%20restock-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative z-10 flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-medium hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(37,211,102,0.4)] w-full sm:w-auto"
          >
            <MessageSquare className="w-5 h-5 fill-white" />
            Start on WhatsApp
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>
    </div>
  );
}
