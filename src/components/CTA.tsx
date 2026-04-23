import { motion } from 'motion/react';
import { Calendar, ArrowUpRight, MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 px-4 bg-white overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] border border-blue-50/50 rounded-full pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] border border-blue-50 rounded-full pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mb-12 inline-block p-4 bg-slate-50 rounded-3xl"
        >
          <div className="flex -space-x-2">
            <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-blue-600">WF</div>
            <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white uppercase">AB</div>
          </div>
        </motion.div>

        <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8 tracking-tighter">
          Pronto para levar a <span className="text-blue-600">Alegria</span> para o próximo nível?
        </h2>
        
        <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          O próximo passo é simples: uma reunião rápida para alinhar o acesso às contas e iniciarmos a implementação imediata. Não deixe suas vendas esperando.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
            <Calendar className="w-5 h-5" />
             Agendar Reunião de Início
          </button>
          
          <button className="px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold flex items-center gap-3 hover:bg-slate-50 transition-all">
            <MessageCircle className="w-5 h-5 text-green-500" />
            Dúvidas via WhatsApp
          </button>
        </div>

        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 opacity-60">
            <div className="flex items-center gap-4">
                <span className="text-xs font-bold font-sans uppercase tracking-[0.2em]">Wisefy</span>
                <div className="h-4 w-px bg-slate-300" />
                <span className="text-xs font-medium font-sans italic">Transformação Digital Estratégica</span>
            </div>
            <p className="text-[10px] font-sans uppercase tracking-widest font-bold">2026 • Proposta Comercial Alegria Brinquedos</p>
        </div>
      </div>
    </section>
  );
}
