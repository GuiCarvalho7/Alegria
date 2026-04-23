import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white px-4">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6 border border-blue-100"
        >
          <Sparkles className="w-4 h-4" />
          <span>Proposta Exclusiva: Alegria Brinquedos</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] mb-8"
        >
          Elevando a <span className="text-blue-600">Alegria</span> para o topo do digital.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Obrigado pela confiança em compartilhar os desafios do seu negócio. Entendemos exatamente o que você precisa para transformar sua operação e alavancar suas vendas online. Esta proposta foi desenhada sob medida para a sua realidade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button 
            onClick={() => document.getElementById('solucao')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
          >
            Explorar a Solução
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="flex items-center gap-3 py-2 px-4 bg-slate-50 border border-slate-100 rounded-2xl">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Apresentado por</p>
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-[10px]">W</span>
              </div>
              <span className="text-slate-900 font-display font-bold tracking-tighter text-lg">Wisefy<span className="text-blue-600">.</span></span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
