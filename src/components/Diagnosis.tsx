import { motion } from 'motion/react';
import { AlertCircle, Smartphone, ShoppingBag, TrendingDown } from 'lucide-react';

const problems = [
  {
    icon: TrendingDown,
    title: "Varejo Físico Estagnado",
    description: "A dependência exclusiva do ponto físico limita o crescimento. O público hoje está na palma da mão.",
    color: "bg-red-50 text-red-600 border-red-100"
  },
  {
    icon: Smartphone,
    title: "WhatsApp Caótico",
    description: "Atendimento manual que gera demora, perda de vendas e uma gestão de contatos desorganizada.",
    color: "bg-orange-50 text-orange-600 border-orange-100"
  },
  {
    icon: ShoppingBag,
    title: "Marketplaces sem Foco",
    description: "Estar no Mercado Livre ou Magalu sem estratégia é apenas 'existir'. Falta SEO e posicionamento.",
    color: "bg-amber-50 text-amber-600 border-amber-100"
  }
];

export default function Diagnosis() {
  return (
    <section className="py-24 bg-slate-50 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4"
          >
            Diagnóstico Atual
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6"
          >
            Por que mudar agora?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-600 max-w-3xl mx-auto italic"
          >
            "Observamos que a Alegria Brinquedos tem um potencial enorme subutilizado por ferramentas que não conversam entre si e processos manuais que consomem tempo precioso."
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-200 transition-colors group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${problem.color}`}>
                <problem.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{problem.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-16 p-8 bg-slate-900 rounded-3xl text-white flex flex-col md:flex-row items-center gap-6"
        >
          <div className="bg-white/10 p-4 rounded-2xl">
            <AlertCircle className="w-8 h-8 text-blue-400" />
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-bold mb-2">Conclusão do Diagnóstico</h4>
            <p className="text-slate-400 text-sm">
              O modelo atual está sobrecarregado. Sem digitalização agressiva, a Alegria perde mercado para concorrentes mais ágeis. Nossa missão é reverter esse cenário em tempo recorde.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
