import { motion } from 'motion/react';
import { Rocket, Zap, Calendar } from 'lucide-react';

export default function Timeline() {
  return (
    <section className="py-24 bg-slate-900 text-white px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-16">
          <span className="text-blue-400 font-bold uppercase tracking-widest text-xs">Velocidade</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">Cronograma de Entrega</h2>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2" />

          <div className="space-y-12 relative z-10">
            {/* Month 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="md:w-1/2 md:text-right">
                <div className="bg-blue-600 inline-block px-4 py-1 rounded-full text-xs font-bold mb-4">MÊS 01</div>
                <h3 className="text-2xl font-bold mb-4 flex items-center justify-center md:justify-end gap-3">
                  <Zap className="text-blue-400" /> Fundação
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Lançamento do E-commerce (Nuvemshop), implementação do Agente de IA para WhatsApp e configuração completa do ERP Bling. A base para lucrar estará pronta.
                </p>
              </div>
              <div className="hidden md:flex w-12 h-12 bg-slate-900 border-4 border-slate-800 rounded-full items-center justify-center relative">
                <div className="w-4 h-4 bg-blue-500 rounded-full" />
              </div>
              <div className="md:w-1/2" />
            </motion.div>

            {/* Month 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="md:w-1/2" />
              <div className="hidden md:flex w-12 h-12 bg-slate-900 border-4 border-slate-800 rounded-full items-center justify-center relative">
                <div className="w-4 h-4 bg-green-500 rounded-full" />
              </div>
              <div className="md:w-1/2 md:text-left">
                <div className="bg-green-600 inline-block px-4 py-1 rounded-full text-xs font-bold mb-4">MÊS 02</div>
                <h3 className="text-2xl font-bold mb-4 flex items-center justify-center md:justify-start gap-3">
                   Otimização <Rocket className="text-green-400" />
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Escalabilidade nos Marketplaces (ML e Magalu). SEO avançado em todos os canais e início das campanhas de CRM para fidelizar seus primeiros clientes digitais.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center">
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 text-left max-w-md">
                <Calendar className="w-8 h-8 text-blue-400 shrink-0" />
                <p className="text-xs text-slate-400 italic">
                    "Previsão de 60 dias para estabilizar toda a base digital, com acompanhamento diário do time Wisefy."
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
