import { motion } from 'motion/react';
import { ShieldCheck, Info, Tag, CreditCard, Layers, Layout, Server, Database } from 'lucide-react';

const plans = [
  {
    duration: "Plano 6 Meses",
    price: "R$ 1.500",
    period: "/mensal",
    highlight: false,
    description: "Ideal para estabilização inicial e lançamento."
  },
  {
    duration: "Plano 1 Ano",
    price: "R$ 2.500",
    period: "/mensal",
    highlight: true,
    description: "Acompanhamento estratégico completo com foco em escala.",
    bonus: "50% de desconto no 1º mês de infraestrutura"
  }
];

const externalCosts = [
  { name: "Hospedagem E-commerce (Nuvemshop)", icon: Layout, desc: "Sua vitrine virtual aberta 24h" },
  { name: "ERP Bling (Mensalidade)", icon: Database, desc: "O cérebro que organiza seu estoque" },
  { name: "Servidor de Automação IA", icon: Server, desc: "O motor que faz o robô de WhatsApp rodar" }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-slate-50 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Viabilidade</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mt-4">Investimento</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-6">
            Valores transparentes para uma parceria de longo prazo. Escolha o plano que melhor se adapta à velocidade de crescimento da Alegria Brinquedos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[2.5rem] border-2 relative overflow-hidden transition-all hover:scale-[1.02] ${
                plan.highlight 
                  ? "bg-slate-900 border-slate-900 text-white shadow-2xl shadow-slate-200" 
                  : "bg-white border-slate-200 text-slate-900"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white py-1 px-6 rounded-bl-2xl text-xs font-bold uppercase tracking-wider">
                  Recomendado
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.duration}</h3>
              <p className={`text-sm mb-8 ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>
                {plan.description}
              </p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-display font-bold">{plan.price}</span>
                <span className={`text-sm opacity-60`}>{plan.period}</span>
              </div>

              {plan.bonus && (
                <div className="flex items-center gap-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl mb-8">
                  <Tag className="w-5 h-4 text-blue-400" />
                  <p className="text-xs font-semibold text-blue-300 uppercase">{plan.bonus}</p>
                </div>
              )}

              <button className={`w-full py-4 rounded-xl font-bold transition-colors ${
                plan.highlight 
                  ? "bg-white text-slate-900 hover:bg-slate-100" 
                  : "bg-slate-900 text-white hover:bg-slate-800"
              }`}>
                Iniciar Parceria
              </button>
            </motion.div>
          ))}
        </div>

        {/* Extra Costs Card - VISUAL EMPHASIS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl mx-auto p-12 bg-white rounded-[2.5rem] border border-blue-100 shadow-xl shadow-blue-50/50"
        >
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <div className="flex items-center gap-2 text-blue-600 font-bold mb-4">
                <Info className="w-5 h-5" />
                <span className="uppercase text-xs tracking-widest">Importante</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 tracking-tight">Custos de Infraestrutura</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-sans">
                Para garantir sua autonomia, os custos das ferramentas são pagos diretamente aos fornecedores. Isso garante que as contas sejam suas.
              </p>
            </div>
            <div className="md:w-2/3 grid gap-6">
              {externalCosts.map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-12 text-center text-slate-400 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-xs font-sans uppercase tracking-[0.2em]">Pagamento via Faturamento / Contrato Transparente</span>
        </div>
      </div>
    </section>
  );
}
