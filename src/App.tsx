/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import Diagnosis from './components/Diagnosis';
import Solution from './components/Solution';
import Timeline from './components/Timeline';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[100]" 
        style={{ scaleX }} 
      />

      {/* Navbar Minimalista */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center pointer-events-none">
        <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl border border-slate-200 pointer-events-auto shadow-lg shadow-blue-900/5 group">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shrink-0 shadow-inner group-hover:rotate-12 transition-transform">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <span className="font-display font-bold text-slate-900 text-2xl tracking-tighter">Wisefy<span className="text-blue-600">.</span></span>
          </div>
        </div>
        <div className="bg-white/80 backdrop-blur-md px-5 py-2 rounded-full border border-slate-200 pointer-events-auto hidden md:block shadow-sm">
          <span className="text-xs font-bold font-sans text-slate-500 uppercase tracking-widest flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Alegria Brinquedos • Proposta Comercial
          </span>
        </div>
      </nav>

      <main>
        <Hero />
        <Diagnosis />
        <Solution />
        <Timeline />
        <Pricing />
        <CTA />
      </main>

      {/* Footer Minimal */}
      <footer className="bg-slate-50 py-16 px-6 border-t border-slate-100">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center">
                    <span className="text-white font-bold">W</span>
                </div>
                <span className="font-display font-bold text-2xl text-slate-900 tracking-tighter">Wisefy<span className="text-blue-600">.</span></span>
            </div>
            <p className="text-xs font-sans text-slate-400 font-medium">© 2026 Wisefy Intelligence. Transformação Digital e Vendas Consultivas.</p>
        </div>
      </footer>
    </div>
  );
}
