import { motion } from 'motion/react';
import { ShoppingCart, MessageSquare, Database, Globe, Users, CheckCircle2 } from 'lucide-react';

const solutions = [
  {
    icon: Globe,
    title: "Loja Virtual Própria",
    benefits: ["Vendas 24/7 sem interrupções", "Pagamentos via Pix, Cartão e Boleto", "Autonomia total de marca"],
    color: "text-blue-600 bg-blue-50"
  },
  {
    icon: MessageSquare,
    title: "Agente de IA no WhatsApp",
    benefits: ["Automatização de respostas", "Funcionamento 24h por dia", "Redução de 70% na carga operacional"],
    color: "text-green-600 bg-green-50"
  },
  {
    icon: Database,
    title: "ERP de Estoque (Bling)",
    benefits: ["Sincronização Loja vs Marketplaces", "Controle real do estoque físico", "Gestão simplificada em um só lugar"],
    color: "text-purple-600 bg-purple-50"
  },
  {
    icon: ShoppingCart,
    title: "Otimização Marketplaces",
    benefits: ["SEO para Mercado Livre e Magalu", "Fotos profissionais e anúncios atraentes", "Estratégia de precificação inteligente"],
    color: "text-orange-600 bg-orange-50"
  },
  {
    icon: Users,
    title: "CRM Estratégico",
    benefits: ["Fidelização de clientes antigos", "Campanhas sazonais inteligentes", "Registro detalhado de consumo"],
    color: "text-indigo-600 bg-indigo-50"
  }
];

export default function Solution() {
  return (
    <section id="solucao" className="py-24 bg-white px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <div className="sticky top-12">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">O Plano de Ação</span>
              <h2 className="text-4xl font-display font-bold text-slate-900 mt-4 mb-6">Uma solução robusta, mas simples de usar.</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Não estamos apenas instalando softwares. Estamos construindo o ecossistema digital da Alegria Brinquedos. Cada peça foi escolhida para funcionar em harmonia.
              </p>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-sm font-semibold text-slate-700 font-sans">Sem Linguagem Técnica</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm font-semibold text-slate-700 font-sans">Foco Total em Resultado</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  <span className="text-sm font-semibold text-slate-700 font-sans">Acompanhamento Integrado</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {solutions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-xl hover:shadow-slate-100 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">{item.title}</h3>
                <ul className="space-y-3">
                  {item.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
