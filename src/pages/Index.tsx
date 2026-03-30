import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MessageCircle,
  Rocket,
  Bot,
  Smartphone,
  BrainCircuit,
  Globe,
  BarChart3,
  ShieldCheck,
  Zap,
  Clock,
  HeadphonesIcon,
  TrendingUp,
  Target,
  Settings,
  ArrowRight,
  Instagram,
  ChevronDown,
  Star,
  Quote,
} from "lucide-react";
import rodrigoPerfil from "@/assets/rodrigo-perfil.jpeg";
import rodrigoTrabalhando from "@/assets/rodrigo-trabalhando.png";

const WA_LINK = "https://wa.link/9ho1h0";
const IG_LINK = "https://www.instagram.com/rodrigoseibeldigital/";

type Lang = "pt" | "es";

const content = {
  pt: {
    langLabel: "PT-BR",
    heroTitle1: "Você está perdendo clientes todos os dias…",
    heroTitle2: "E nem percebe.",
    heroSub: "Instale um Sistema Automático de Geração de Clientes — com tráfego, CRM e automação integrados.",
    heroCta: "Quero parar de perder clientes",
    promise: "Venda todos os dias com um sistema que trabalha por você 24h — tráfego, automação e CRM em um só lugar.",
    painTitle: "Se você:",
    painItems: [
      "Demora pra responder",
      "Perde clientes no direct",
      "Não tem controle do comercial",
    ],
    painConclusion: "👉 Seu negócio está travado.",
    solution: "Eu estruturo todo o seu digital para gerar e organizar clientes automaticamente.",
    demoTitle: "Imagine isso:",
    demoSteps: [
      'Cliente comenta: "eu quero"',
      "Recebe mensagem automática",
      "Vai para o WhatsApp",
      "Venda fechada ✅",
    ],
    services: [
      { icon: "rocket", title: "Tráfego Pago", desc: "Mais clientes todos os dias" },
      { icon: "bot", title: "Automação", desc: "Respostas automáticas" },
      { icon: "smartphone", title: "Instagram Automático", desc: "Comentários viram leads" },
      { icon: "brain", title: "CRM", desc: "Controle total do seu funil" },
      { icon: "globe", title: "Páginas de Conversão", desc: "Mais vendas" },
      { icon: "chart", title: "Estrutura Completa", desc: "Crescimento previsível" },
    ],
    diffTitle1: "Você não contrata um serviço.",
    diffTitle2: "Você instala um sistema que gera vendas todos os dias.",
    socialProof: "Mais de 5.000 leads gerados para empresas.",
    socialLabel: "leads gerados",
    testimonialsTitle: "O que nossos clientes dizem",
    testimonials: [
      {
        name: "Ana Ferreira",
        role: "Dona de Clínica Estética",
        result: "+320% de agendamentos em 60 dias",
        text: "O Rodrigo estruturou todo meu funil e automação. Hoje recebo clientes no automático, sem precisar ficar no celular o dia todo.",
      },
      {
        name: "Carlos Mendes",
        role: "Dono de E-commerce",
        result: "De 50 para 400 vendas/mês",
        text: "Antes eu perdia clientes no direct. Agora com o CRM e automação, cada lead é acompanhado até fechar a venda.",
      },
      {
        name: "Luciana Santos",
        role: "Consultora de Negócios",
        result: "+150 leads qualificados por semana",
        text: "O sistema que o Rodrigo montou mudou meu negócio. Tráfego + automação = máquina de vendas.",
      },
    ],
    authorityName: "Rodrigo Seibel",
    authorityRole: "Especialista em tráfego, CRM e automação",
    authorityBio: [
      "🚀 Estruturo o digital de empresas",
      "📈 Geração de clientes + organização comercial",
      "🏆 +5.000 leads gerados",
    ],
    objections: [
      { icon: "shield", text: "Não precisa entender de tecnologia" },
      { icon: "zap", text: "Implementação rápida" },
      { icon: "headphones", text: "Suporte completo" },
    ],
    benefits: ["Mais clientes", "Menos esforço", "Mais controle", "Crescimento previsível"],
    offerTitle: "Diagnóstico estratégico gratuito",
    offerDesc: "Descubra exatamente o que está impedindo seu negócio de vender mais.",
    urgency: "Atendo poucas empresas por semana.",
    finalCta: "Quero estruturar meu negócio agora",
    floatingBtn: "Falar com especialista",
    footer: "Todos os direitos reservados.",
    faqTitle: "Perguntas Frequentes",
    faq: [
      { q: "Preciso entender de tecnologia?", a: "Não! Eu cuido de toda a parte técnica. Você só precisa focar no seu negócio." },
      { q: "Quanto tempo leva para ver resultados?", a: "Os primeiros resultados aparecem entre 7 e 30 dias, dependendo do seu nicho e investimento." },
      { q: "Funciona para qualquer tipo de negócio?", a: "Sim! Já atendi clínicas, e-commerces, consultores, restaurantes e muitos outros segmentos." },
      { q: "Qual o investimento necessário?", a: "O diagnóstico estratégico é gratuito. Nele, apresento um plano personalizado com valores sob medida para seu negócio." },
      { q: "Preciso ter Instagram ou site?", a: "Não necessariamente. Eu estruturo tudo do zero, desde redes sociais até páginas de conversão." },
      { q: "E se eu já tiver um gestor de tráfego?", a: "Sem problema! Posso complementar com automação, CRM e funil — áreas que a maioria dos gestores não cobre." },
    ],
  },
  es: {
    langLabel: "ES-PY",
    heroTitle1: "Estás perdiendo clientes todos los días…",
    heroTitle2: "Y ni te das cuenta.",
    heroSub: "Convertí mensajes en ventas automáticas con tráfico, CRM y automatización.",
    heroCta: "Hablar por WhatsApp",
    promise: "Vendé todos los días con un sistema que trabaja por vos 24h.",
    painTitle: "Si vos:",
    painItems: [
      "Tardás en responder",
      "Perdés clientes en el direct",
      "No tenés control comercial",
    ],
    painConclusion: "👉 Tu negocio está frenado.",
    solution: "Yo estructuro todo tu sistema digital para generar y organizar clientes automáticamente.",
    demoTitle: "Imaginá esto:",
    demoSteps: [
      'Cliente comenta: "yo quiero"',
      "Recibe mensaje automático",
      "Va al WhatsApp",
      "Venta cerrada ✅",
    ],
    services: [
      { icon: "rocket", title: "Tráfico Pago", desc: "Más clientes" },
      { icon: "bot", title: "Automatización", desc: "Respuestas automáticas" },
      { icon: "smartphone", title: "Instagram Automático", desc: "Comentarios generan leads" },
      { icon: "brain", title: "CRM", desc: "Control total" },
      { icon: "globe", title: "Páginas", desc: "Más conversión" },
      { icon: "chart", title: "Sistema Completo", desc: "Crecimiento predecible" },
    ],
    diffTitle1: "No contratás un servicio.",
    diffTitle2: "Instalás un sistema que vende todos los días.",
    socialProof: "Más de 5.000 leads generados para empresas.",
    socialLabel: "leads generados",
    testimonialsTitle: "Lo que dicen nuestros clientes",
    testimonials: [
      {
        name: "Ana Ferreira",
        role: "Dueña de Clínica Estética",
        result: "+320% de citas en 60 días",
        text: "Rodrigo estructuró todo mi embudo y automatización. Hoy recibo clientes en automático, sin estar pegada al celular todo el día.",
      },
      {
        name: "Carlos Mendes",
        role: "Dueño de E-commerce",
        result: "De 50 a 400 ventas/mes",
        text: "Antes perdía clientes en el direct. Ahora con CRM y automatización, cada lead es seguido hasta cerrar la venta.",
      },
      {
        name: "Luciana Santos",
        role: "Consultora de Negocios",
        result: "+150 leads cualificados por semana",
        text: "El sistema que Rodrigo montó cambió mi negocio. Tráfico + automatización = máquina de ventas.",
      },
    ],
    authorityName: "Rodrigo Seibel",
    authorityRole: "Especialista en tráfico, CRM e automatização",
    authorityBio: [
      "🚀 Estructuro el digital de empresas",
      "📈 Generación de clientes + organización comercial",
      "🏆 +5.000 leads generados",
    ],
    objections: [
      { icon: "shield", text: "No necesitás saber de tecnología" },
      { icon: "zap", text: "Implementación rápida" },
      { icon: "headphones", text: "Soporte completo" },
    ],
    benefits: ["Más clientes", "Menos esfuerzo", "Más control", "Crecimiento predecible"],
    offerTitle: "Diagnóstico estratégico gratuito",
    offerDesc: "Descubrí exactamente qué está frenando tu negocio.",
    urgency: "Atiendo pocas empresas por semana.",
    finalCta: "Quiero estructurar mi negocio ahora",
    floatingBtn: "Hablar con especialista",
    footer: "Todos los derechos reservados.",
    faqTitle: "Preguntas Frecuentes",
    faq: [
      { q: "¿Necesito saber de tecnología?", a: "¡No! Yo me encargo de toda la parte técnica. Vos solo enfocate en tu negocio." },
      { q: "¿Cuánto tiempo lleva ver resultados?", a: "Los primeros resultados aparecen entre 7 y 30 días, dependiendo de tu nicho e inversión." },
      { q: "¿Funciona para cualquier tipo de negocio?", a: "¡Sí! Ya atendí clínicas, e-commerces, consultores, restaurantes y muchos otros rubros." },
      { q: "¿Cuál es la inversión necesaria?", a: "El diagnóstico estratégico es gratuito. Ahí presento un plan personalizado con valores a medida para tu negocio." },
      { q: "¿Necesito tener Instagram o sitio web?", a: "No necesariamente. Yo estructuro todo desde cero, desde redes sociales hasta páginas de conversión." },
      { q: "¿Y si ya tengo un gestor de tráfico?", a: "¡Sin problema! Puedo complementar con automatización, CRM y embudo — áreas que la mayoría de los gestores no cubren." },
    ],
  },
};

const serviceIcons: Record<string, React.ReactNode> = {
  rocket: <Rocket className="w-7 h-7" />,
  bot: <Bot className="w-7 h-7" />,
  smartphone: <Smartphone className="w-7 h-7" />,
  brain: <BrainCircuit className="w-7 h-7" />,
  globe: <Globe className="w-7 h-7" />,
  chart: <BarChart3 className="w-7 h-7" />,
};

const objectionIcons: Record<string, React.ReactNode> = {
  shield: <ShieldCheck className="w-8 h-8" />,
  zap: <Zap className="w-8 h-8" />,
  headphones: <HeadphonesIcon className="w-8 h-8" />,
};

const benefitIcons = [
  <TrendingUp className="w-8 h-8" />,
  <Target className="w-8 h-8" />,
  <Settings className="w-8 h-8" />,
  <BarChart3 className="w-8 h-8" />,
];

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Counter({ target }: { target: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const id = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(id);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(id);
  }, [isInView, target]);

  return <span ref={ref}>{count.toLocaleString("pt-BR")}</span>;
}

export default function Index() {
  const [lang, setLang] = useState<Lang>("pt");
  const t = content[lang];

  // LOGICA DE ANIMAÇÃO AUTOMATICA DOS PASSOS
  const [activeStep, setActiveStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const stepDelays = [2000, 2000, 1500, 5000];

    if (activeStep === 1) {
      // Show typing indicator before auto-reply
      setIsTyping(true);
      const typingTimeout = setTimeout(() => {
        setIsTyping(false);
        setActiveStep(2);
      }, stepDelays[1]);
      return () => clearTimeout(typingTimeout);
    }

    const timeout = setTimeout(() => {
      setActiveStep((prev) => (prev < 3 ? prev + 1 : 0));
    }, stepDelays[activeStep]);
    return () => clearTimeout(timeout);
  }, [activeStep]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="font-heading font-bold text-lg text-foreground">
            Rodrigo <span className="text-primary text-neon-sm">Seibel</span>
          </span>
          <button
            onClick={() => setLang(lang === "pt" ? "es" : "pt")}
            className="px-3 py-1.5 rounded-full border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary hover-neon-border transition-colors"
          >
            {lang === "pt" ? "🇵🇾 ES-PY" : "🇧🇷 PT-BR"}
          </button>
        </div>
      </nav>

      {/* BLOCO 1 — Hero */}
      <section className="pt-28 pb-20 px-4 md:pt-40 md:pb-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            >
              {t.heroTitle1}
              <br />
              <span className="text-gradient text-neon">{t.heroTitle2}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl"
            >
              {t.heroSub}
            </motion.p>
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-heading font-bold text-lg px-8 py-4 rounded-full hover:brightness-110 transition-all animate-pulse-glow"
            >
              <MessageCircle className="w-6 h-6" />
              {t.heroCta}
            </motion.a>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/40 to-primary/10 rounded-2xl blur-xl" />
              <img
                src={rodrigoTrabalhando}
                alt="Rodrigo Seibel trabalhando"
                className="relative w-72 md:w-96 rounded-2xl border-2 border-primary/30 shadow-2xl object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-center"
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground mx-auto animate-bounce" />
        </motion.div>
      </section>

      {/* BLOCO 2 — Promessa */}
      <AnimatedSection className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-heading text-2xl md:text-3xl font-semibold text-foreground text-neon-sm">
            {t.promise}
          </p>
        </div>
      </AnimatedSection>

      {/* BLOCO 3 — Dor */}
      <AnimatedSection className="py-16 px-4 bg-secondary/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">{t.painTitle}</h2>
          <ul className="space-y-3 text-lg text-muted-foreground mb-6">
            {t.painItems.map((item, i) => (
              <li key={i} className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-destructive inline-block" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-xl font-bold text-destructive">{t.painConclusion}</p>
        </div>
      </AnimatedSection>

      {/* BLOCO 4 — Solução */}
      <AnimatedSection className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
            {t.solution}
          </p>
        </div>
      </AnimatedSection>

      {/* BLOCO 5 — Demonstração Dinâmica */}
      <AnimatedSection className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-2 text-neon">
            {lang === "pt" ? "Demonstração ao vivo" : "Demostración en vivo"}
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            {lang === "pt" ? "Veja como funciona na prática" : "Mirá cómo funciona en la práctica"}
          </p>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Steps Animados */}
            <div className="flex-1 w-full">
              <div className="space-y-6">
                {[
                  { icon: <MessageCircle className="w-5 h-5" />, label: lang === "pt" ? "Cliente comenta no post" : "Cliente comenta en el post", num: 1 },
                  { icon: <BrainCircuit className="w-5 h-5" />, label: lang === "pt" ? "IA detecta o interesse" : "IA detecta el interés", num: 2 },
                  { icon: <Zap className="w-5 h-5" />, label: lang === "pt" ? "Mensagem automática enviada" : "Mensaje automático enviado", num: 3 },
                  { icon: <Target className="w-5 h-5" />, label: lang === "pt" ? "Venda realizada" : "Venta realizada", num: 4 },
                ].map((step, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-4 transition-all duration-700 ${
                      activeStep === i ? "opacity-100 scale-105" : "opacity-30 scale-100"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full border flex items-center justify-center font-heading font-bold text-sm shrink-0 transition-colors ${
                      activeStep === i ? "bg-primary text-primary-foreground border-primary" : "bg-primary/20 border-primary/40 text-primary"
                    }`}>
                      {step.num}
                    </div>
                    <div className={`flex items-center gap-3 bg-card border px-5 py-3 rounded-xl flex-1 transition-all ${
                      activeStep === i ? "border-primary shadow-lg" : "border-border"
                    }`}>
                      <span className="text-primary">{step.icon}</span>
                      <p className="font-heading font-semibold text-foreground">{step.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mockup WhatsApp Sincronizado */}
            <div className="flex-1 w-full max-w-sm">
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-2xl glow-primary">
                <div className="bg-whatsapp px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30">
                    <img src={rodrigoPerfil} alt="Rodrigo Seibel" className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-white text-sm">Rodrigo Seibel</p>
                    <p className="text-white/70 text-xs">online</p>
                  </div>
                </div>

                <div className="p-4 space-y-3 min-h-[220px] bg-background">
                  {/* Mensagem Cliente */}
                  {activeStep >= 0 && (
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex justify-start">
                      <div className="bg-secondary border border-border rounded-xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                        <p className="text-xs text-primary font-bold mb-1">@cliente_real</p>
                        <p className="text-foreground text-sm">
                          {lang === "pt" ? "Eu quero! Como funciona?" : "¡Yo quiero! ¿Cómo funciona?"}
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Typing Indicator */}
                  <AnimatePresence>
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="flex justify-end"
                      >
                        <div className="bg-primary/20 border border-primary/30 rounded-xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                          <div className="flex items-center gap-1.5">
                            <motion.span
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                              className="w-2 h-2 rounded-full bg-primary"
                            />
                            <motion.span
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                              className="w-2 h-2 rounded-full bg-primary"
                            />
                            <motion.span
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                              className="w-2 h-2 rounded-full bg-primary"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Resposta IA */}
                  {activeStep >= 2 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="flex justify-end">
                      <div className="bg-primary/20 border border-primary/30 rounded-xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                        <p className="text-foreground text-sm">
                          {lang === "pt"
                            ? "Olá! Vi que você se interessou. Posso te apresentar nossa solução em 2 minutos? Clique aqui 👇"
                            : "¡Hola! Vi que te interesó. ¿Puedo presentarte nuestra solución en 2 minutos? Hacé clic aquí 👇"}
                        </p>
                        <p className="text-right text-xs text-muted-foreground mt-1">
                          {lang === "pt" ? "agora" : "ahora"} ✓✓
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Botão de Venda */}
                <div className="px-4 pb-4">
                  <a
                    href={WA_LINK}
                    className={`block w-full text-center bg-primary text-primary-foreground font-heading font-bold py-3 rounded-xl transition-all duration-500 ${
                      activeStep === 3 ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none"
                    }`}
                  >
                    {lang === "pt" ? "Quero isso no meu negócio" : "Quiero esto en mi negocio"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* BLOCO 6 — Serviços */}
      <AnimatedSection className="py-20 px-4 bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-12">
            {lang === "pt" ? "O que eu faço por você" : "Lo que hago por vos"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-card border border-border rounded-xl p-6 hover-neon-border hover-glow cursor-default group"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                  {serviceIcons[s.icon]}
                </div>
                <h3 className="font-heading font-bold text-lg mb-1 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* BLOCO 7 — Diferencial */}
      <AnimatedSection className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-heading text-xl md:text-2xl text-muted-foreground mb-2">
            {t.diffTitle1}
          </p>
          <p className="font-heading text-2xl md:text-4xl font-bold text-gradient text-neon">
            {t.diffTitle2}
          </p>
        </div>
      </AnimatedSection>

      {/* BLOCO 8 — Prova Social */}
      <AnimatedSection className="py-20 px-4 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="font-heading text-5xl md:text-7xl font-bold text-primary text-neon mb-3">
              +<Counter target={5000} />
            </div>
            <p className="text-xl text-muted-foreground">{t.socialLabel}</p>
            <p className="text-foreground mt-4 text-lg">{t.socialProof}</p>
          </div>

          <h3 className="font-heading text-2xl md:text-3xl font-bold text-center mb-10">
            {t.testimonialsTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.testimonials.map((test, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-card border border-border rounded-xl p-6 hover-neon-border hover-glow relative"
              >
                <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-heading font-bold text-lg">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground">{test.name}</p>
                    <p className="text-muted-foreground text-sm">{test.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-4 italic">"{test.text}"</p>
                <div className="bg-primary/10 border border-primary/20 rounded-lg px-3 py-2">
                  <p className="text-primary font-heading font-bold text-sm text-neon-sm">{test.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* BLOCO 9 — Autoridade */}
      <AnimatedSection className="py-20 px-4">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/40 to-primary/10 rounded-full blur-lg" />
              <img
                src={rodrigoPerfil}
                alt="Rodrigo Seibel"
                className="relative w-40 h-40 md:w-52 md:h-52 rounded-full border-2 border-primary/40 object-cover object-top shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-heading text-3xl font-bold mb-2 text-foreground text-neon-sm">{t.authorityName}</h2>
            <p className="text-primary font-medium mb-6">{t.authorityRole}</p>
            <ul className="space-y-2 text-muted-foreground">
              {t.authorityBio.map((b, i) => (
                <li key={i} className="text-lg">{b}</li>
              ))}
            </ul>
            <a
              href={IG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-primary hover:underline font-medium hover-glow px-3 py-1 rounded-full"
            >
              <Instagram className="w-5 h-5" />
              @rodrigoseibeldigital
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* BLOCO 10+11 — Vantagens Unificadas */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/20 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <AnimatedSection className="relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-4 text-neon-sm">
              {lang === "pt" ? "Por que escolher a gente?" : "¿Por qué elegirnos?"}
            </h2>
            <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
              {lang === "pt"
                ? "Simplicidade, velocidade e resultados reais para o seu negócio."
                : "Simplicidad, velocidad y resultados reales para tu negocio."}
            </p>

            {/* Objeções — 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
              {t.objections.map((obj, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  whileHover={{ scale: 1.04, y: -6 }}
                  className="relative bg-card border border-border rounded-2xl p-8 text-center cursor-default group overflow-hidden hover-neon-border"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.4)] transition-all duration-500">
                      <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                        {objectionIcons[obj.icon]}
                      </div>
                    </div>
                    <p className="font-heading font-semibold text-foreground text-lg">{obj.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Divisor */}
            <div className="flex items-center gap-4 max-w-md mx-auto mb-14">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/30" />
              <span className="text-primary text-neon-sm font-heading font-bold text-sm">
                {lang === "pt" ? "RESULTADOS" : "RESULTADOS"}
              </span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/30" />
            </div>

            {/* Benefícios — 4 itens */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {t.benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
                  whileHover={{ scale: 1.1, y: -6 }}
                  className="text-center group cursor-default"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:border-primary/40 group-hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.5)] transition-all duration-500">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">{benefitIcons[i]}</div>
                  </div>
                  <p className="font-heading font-bold text-lg text-foreground">{b}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* BLOCO 12 — Oferta */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <AnimatedSection className="relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-primary/30 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden glow-primary-lg">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mx-auto mb-6"
              >
                <Target className="w-10 h-10 text-primary" />
              </motion.div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3 text-foreground text-neon">
                {t.offerTitle}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">{t.offerDesc}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-heading font-bold text-lg px-10 py-5 rounded-full hover:brightness-110 transition-all animate-pulse-glow shadow-2xl"
                >
                  <MessageCircle className="w-6 h-6" />
                  {t.heroCta}
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                {lang === "pt" ? "💬 100% gratuito • Sem compromisso" : "💬 100% gratuito • Sin compromiso"}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* BLOCO 13 — Urgência */}
      <AnimatedSection className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/30 rounded-full px-6 py-3 hover-glow">
            <Clock className="w-5 h-5 text-destructive" />
            <p className="font-heading font-bold text-destructive">{t.urgency}</p>
          </div>
        </div>
      </AnimatedSection>

      {/* BLOCO — FAQ */}
      <AnimatedSection className="py-20 px-4 bg-secondary/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-10 text-neon-sm">
            {t.faqTitle}
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {t.faq.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 hover-neon-border transition-all data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="font-heading font-semibold text-foreground hover:no-underline py-5 text-left">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </AnimatedSection>

      {/* BLOCO 14 — CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-t from-primary/10 to-transparent">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-foreground text-neon">
            {t.finalCta}
          </h2>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-heading font-bold text-xl px-10 py-5 rounded-full hover:brightness-110 transition-all animate-pulse-glow"
          >
            <MessageCircle className="w-7 h-7" />
            {t.heroCta}
            <ArrowRight className="w-6 h-6" />
          </a>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Rodrigo Seibel. {t.footer}</p>
        <a
          href={IG_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-2 text-primary hover:underline"
        >
          <Instagram className="w-4 h-4" />
          @rodrigoseibeldigital
        </a>
      </footer>

      {/* Botão Flutuante */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-whatsapp hover:brightness-110 text-whatsapp-foreground font-bold px-5 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-105"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline">{t.floatingBtn}</span>
      </a>
    </div>
  );
}
