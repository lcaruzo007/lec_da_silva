import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowRight, Code, Database, Globe, Cpu, Github, Linkedin, Mail, ExternalLink, Terminal, Briefcase, GraduationCap, Instagram, BookOpen, Youtube } from "lucide-react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Lucas Caruzo";
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  
  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 150);
    return () => clearInterval(typingEffect);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Criar link mailto com os dados do formulário
    const subject = encodeURIComponent(`Contato de ${formData.name}`);
    const body = encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`);
    const mailtoLink = `mailto:lucascaruzo76@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    setSubmitStatus("success");
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
    
    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

  const skills = [
    { name: "Python", icon: <Terminal className="w-6 h-6" />, level: "Avançado", description: "Desenvolvimento backend e scripts" },
    { name: "Django", icon: <Database className="w-6 h-6" />, level: "Avançado", description: "Framework principal para web apps" },
    { name: "Banco de Dados", icon: <Database className="w-6 h-6" />, level: "Intermediário", description: "PostgreSQL, MySQL, SQLite" },
    { name: "JavaScript", icon: <Code className="w-6 h-6" />, level: "Intermediário", description: "Frontend interativo e React" },
    { name: "HTML & CSS", icon: <Globe className="w-6 h-6" />, level: "Avançado", description: "Design responsivo e moderno" },
    { name: "Git & GitHub", icon: <Github className="w-6 h-6" />, level: "Avançado", description: "Controle de versão e colaboração" },
    { name: "Engenharia de Software", icon: <Code className="w-6 h-6" />, level: "Intermediário", description: "Arquitetura e boas práticas" },
    { name: "Metodologia Scrum", icon: <Briefcase className="w-6 h-6" />, level: "Intermediário", description: "Gestão ágil de projetos" },
  ];

  const projects = [
    {
      title: "Sistema de Gerenciamento de Edifícios",
      description: "Sistema web para monitoramento e controle de reservas de salas em edifícios acadêmicos e administrativos. Registrado no INPI.",
      image: "/lec_da_silva/images/project-bg-green-1.png",
      tags: ["Django", "PostgreSQL", "IoT"],
      link: "#"
    },
    {
      title: "M.I.A - Máquinas e Implementos Agrícolas",
      description: "Sistema web para gerenciamento e controle de manutenção, abastecimento e revisões de maquinário agrícola. Registrado no INPI.",
      image: "/lec_da_silva/images/project-bg-green-2.png",
      tags: ["Django", "Python", "PostgreSQL"],
      link: "#"
    },
    {
      title: "FAM Inteligente",
      description: "Projeto em desenvolvimento para digitalização e automação de instituições filantrópicas com IoT e sistemas web para a Fundação de Apoio ao Menor.",
      image: "/lec_da_silva/images/project-bg-green-1.png",
      tags: ["Django", "IoT", "Em Andamento"],
      link: "#"
    }
  ];

  const articles = [
    {
      id: 1,
      title: "Django como Agente de Mudança",
      summary: "Apresentação sobre novos paradigmas nos projetos de software utilizando o framework Django para desenvolvimento ágil e eficiente.",
      category: "Web Development",
      date: "2025",
      link: "https://josif.ifsuldeminas.edu.br/ojs/index.php/anais/article/view/2737"
    },
    {
      id: 2,
      title: "Otimização da Gestão de Registros Acadêmicos",
      summary: "Análise do papel dos softwares em ambientes acadêmicos para otimização de processos e gestão eficiente de registros.",
      category: "Sistemas",
      date: "2025",
      link: "https://josif.ifsuldeminas.edu.br/ojs/index.php/anais/article/view/2785"
    },
    {
      id: 3,
      title: "M.I.A: Administração de Máquinas e Implementos Agrícolas",
      summary: "Sistema desenvolvido com Django para gerenciamento e controle de manutenção de maquinário agrícola utilizando metodologia Scrum.",
      category: "Agronegócio",
      date: "2024",
      link: "https://josif.ifsuldeminas.edu.br/ojs/index.php/anais/article/view/1833"
    },
    {
      id: 4,
      title: "Gerenciamento Integrado de Edifícios",
      summary: "Desenvolvimento de sistema para monitoramento e controle de edifícios acadêmicos e administrativos seguindo conceitos de edifícios inteligentes.",
      category: "IoT",
      date: "2024",
      link: "https://josif.ifsuldeminas.edu.br/ojs/index.php/anais/article/view/1830"
    },
    {
      id: 5,
      title: "Toponímia Quilombola nos Sertões",
      summary: "Análise de registros cartográficos e documentais (c. 1760-1824) nos sertões de Cabo Verde, Jacuí e Rio Pardo.",
      category: "História",
      date: "2022",
      link: "https://josif.ifsuldeminas.edu.br/ojs/index.php/anais/article/view/1830/1835"
    },
    {
      id: 6,
      title: "FAM Inteligente: Digitalização de Instituições Filantrópicas",
      summary: "Projeto em andamento de modernização com IoT e sistemas web para automatizar processos e otimizar a gestão de recursos em instituições filantrópicas.",
      category: "Extensão",
      date: "2025 (Em Andamento)",
      link: "#"
    },
    {
      id: 7,
      title: "Programa Campus Inteligente: Gestão de Produção Agrícola",
      summary: "Software que centraliza dados e apoia a tomada de decisões estratégicas para digitalizar e otimizar a gestão de produção agrícola, melhorando processos e reduzindo desperdícios.",
      category: "Agronegócio",
      date: "2024",
      link: "https://josif.ifsuldeminas.edu.br/ojs/index.php/anais/article/view/2447"
    },
    {
      id: 8,
      title: "Minha Vivência nos Registros Acadêmicos",
      summary: "Relato de experiência na Coordenação de Registros Acadêmicos do IFSULDEMINAS, revelando a complexidade e impacto institucional da gestão de registros, matrículas e processos administrativos.",
      category: "Educação",
      date: "2025",
      link: "https://josif.ifsuldeminas.edu.br/ojs/index.php/anais/article/view/2794"
    }
  ];

  const timeline = [
    {
      year: "2025",
      title: "Membro do CONSUP",
      description: "Conselho Superior do IFSULDEMINAS - maior grupo institucional da instituição, responsável por decisões estratégicas.",
      icon: <Briefcase className="w-5 h-5" />,
      highlight: true
    },
    {
      year: "2025",
      title: "Presidente do Centro Acadêmico",
      description: "Liderança do Centro Acadêmico de Ciência da Computação.",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      year: "2025",
      title: "Representações Estudantis",
      description: "Comissão Própria de Avaliação, NEABI e outros colegiados institucionais.",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      year: "2023",
      title: "Ciência da Computação",
      description: "Início da graduação no IFSULDEMINAS Campus Muzambinho.",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      year: "2023",
      title: "Diretor de Relações Exteriores",
      description: "Centro Acadêmico - primeira atuação em liderança estudantil.",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      year: "2020-2022",
      title: "Técnico em Informática",
      description: "Formação técnica integrada ao ensino médio.",
      icon: <Code className="w-5 h-5" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Lucas Caruzo - Desenvolvedor Full Stack</title>
        <meta name="description" content="Portfólio de Lucas Eduardo Caruzo da Silva. Desenvolvedor especializado em Django, Python e Sistemas Web. Membro do CONSUP do IFSULDEMINAS." />
        <meta name="keywords" content="Lucas Caruzo, Desenvolvedor, Django, Python, Web Development, IFSULDEMINAS, Programador" />
        <meta property="og:title" content="Lucas Caruzo - Desenvolvedor Full Stack" />
        <meta property="og:description" content="Portfólio profissional com projetos em Django, Python e Sistemas de Gestão." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lcaruzo007.github.io/lec_da_silva/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Lucas Eduardo Caruzo da Silva" />
        <link rel="canonical" href="https://lcaruzo007.github.io/lec_da_silva/" />
      </Helmet>
      
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-black focus:rounded-lg">
        Pular para o conteúdo principal
      </a>
      
      <div className="flex flex-col gap-20 pb-20" id="main-content">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/lec_da_silva/images/hero-bg-green.png" 
            alt="Background" 
            className="w-full h-full object-cover opacity-30 dark:opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/95 to-background" />
          
          {/* Matrix Rain Effect Overlay (CSS only simulation) */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>

        <div className="container relative z-10 text-center px-4">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md text-primary font-medium animate-in fade-in slide-in-from-bottom-4 duration-700 shadow-[0_0_15px_rgba(74,222,128,0.2)]">
            <span className="mr-2">●</span> Disponível para projetos
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-foreground motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-8 duration-1000 delay-100">
            Olá! Eu sou o <br />
            <span className="text-primary drop-shadow-[0_0_30px_rgba(74,222,128,0.6)] dark:drop-shadow-[0_0_30px_rgba(74,222,128,0.6)] font-mono break-words">
              {text}<span className="motion-safe:animate-pulse">_</span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Desenvolvedor apaixonado por tecnologia e inovação. "Mesmo nos tempos mais sombrios, a esperança prevalece, sendo a luz que nos guia para fora da escuridão." (Superman)
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Button size="lg" onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })} className="text-lg px-8 py-6 rounded-full shadow-[0_0_20px_rgba(74,222,128,0.4)] hover:shadow-[0_0_40px_rgba(74,222,128,0.6)] hover:bg-primary hover:text-black transition-all duration-300 font-bold">
              Ver Projetos <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" className="text-lg px-8 py-6 rounded-full bg-white/5 border-primary/30 text-primary hover:bg-primary/10 backdrop-blur-md">
              Entrar em Contato
            </Button>
          </div>
        </div>
      </section>

      {/* SOBRE MIM & TIMELINE */}
      <section id="sobre" className="container scroll-mt-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Sobre Mim</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Olá! Meu nome é <strong className="text-primary">Lucas Eduardo Caruzo da Silva</strong> e sou um desenvolvedor focado em criar experiências digitais funcionais, modernas e intuitivas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Graduando em Bacharelado em Ciência da Computação no Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas, Campus Muzambinho-MG. Desenvolvo projetos nas áreas de Web Development com Django e Sistemas de Gestão.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary/50 transition-colors group">
                <h3 className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform origin-left">4</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Programas Registrados INPI</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary/50 transition-colors group">
                <h3 className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform origin-left">10+</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Publicações Científicas</p>
              </div>
            </div>
          </div>

          {/* Timeline Visual */}
          <div className="relative pl-8 border-l border-white/10 space-y-12 py-4">
            {timeline.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[41px] top-0 p-2 rounded-full bg-background border border-primary/50 text-primary group-hover:bg-primary group-hover:text-black transition-all shadow-[0_0_10px_rgba(74,222,128,0.2)]">
                  {item.icon}
                </div>
                <span className="text-sm font-mono text-primary mb-1 block">{item.year}</span>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTIGOS E PESQUISAS */}
      <section id="artigos" className="container scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Artigos & Pesquisas</h2>
          <p className="text-muted-foreground text-lg">Exploração de tópicos técnicos e compartilhamento de conhecimento.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.link}
              className="group glass p-6 rounded-2xl border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(74,222,128,0.2)] cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <Badge className="bg-primary/20 text-primary border-none capitalize">
                  {article.category}
                </Badge>
                <span className="text-xs text-muted-foreground font-mono">{article.date}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                {article.summary}
              </p>
              
              <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 gap-1 transition-all">
                Ler Artigo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="container scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Habilidades</h2>
          <p className="text-muted-foreground text-lg">Tecnologias e ferramentas que utilizo no dia a dia.</p>
        </div>

        <TooltipProvider>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div 
                    className="glass glass-hover p-4 sm:p-6 rounded-xl flex flex-col items-center justify-center gap-3 sm:gap-4 text-center group border-primary/10 cursor-help"
                    role="button"
                    tabIndex={0}
                  >
                    <div className="p-3 sm:p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(74,222,128,0.1)] group-hover:shadow-[0_0_25px_rgba(74,222,128,0.4)]">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-sm sm:text-lg group-hover:text-primary transition-colors">{skill.name}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-background/95 backdrop-blur-sm border-primary/20">
                  <p className="font-semibold text-primary">{skill.level}</p>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="container scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projetos</h2>
          <p className="text-muted-foreground text-lg">Principais trabalhos desenvolvidos recentemente.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card/40 border-white/5 overflow-hidden group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-background">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 z-5"></div>
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" className="rounded-full bg-background/50 backdrop-blur-md border border-primary/50 text-primary hover:bg-primary hover:text-black">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6 relative z-20">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3 text-sm leading-relaxed">
                  {project.description}
                </p>
                <Button className="w-full group/btn bg-white/5 hover:bg-primary hover:text-black border-white/10 hover:border-primary transition-all duration-300" variant="outline">
                  Ver Detalhes 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA após projetos */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Gostou do que viu?</h3>
          <p className="text-muted-foreground mb-8">
            Estou sempre aberto a novos desafios e oportunidades de colaboração. Vamos conversar sobre seu próximo projeto!
          </p>
          <Button 
            size="lg" 
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:shadow-[0_0_30px_rgba(74,222,128,0.5)] hover:scale-105 transition-all"
          >
            Entrar em Contato <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="container scroll-mt-24 mb-20">
        <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-3xl border-primary/20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-[80px] -z-10" />

          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">Vamos Conversar?</h2>
            <p className="text-muted-foreground text-lg">
              Tem um projeto em mente ou quer apenas trocar uma ideia? Entre em contato!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium ml-1 text-foreground">Seu Nome</label>
                <Input 
                  placeholder="João Silva" 
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="bg-background/50 border-border focus:border-primary focus:ring-primary/20 h-12" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium ml-1 text-foreground">Seu Email</label>
                <Input 
                  type="email" 
                  placeholder="joao@exemplo.com" 
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="bg-background/50 border-border focus:border-primary focus:ring-primary/20 h-12" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium ml-1 text-foreground">Mensagem</label>
              <Textarea 
                placeholder="Conte-me sobre seu projeto..." 
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                required
                className="bg-background/50 border-border focus:border-primary focus:ring-primary/20 min-h-[150px]" 
              />
            </div>
            <Button 
              type="submit" 
              size="lg" 
              disabled={isSubmitting}
              className="w-full text-lg h-14 shadow-[0_0_20px_rgba(74,222,128,0.2)] hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] hover:bg-primary hover:text-black transition-all font-bold disabled:opacity-50"
            >
              {isSubmitting ? "Enviando..." : submitStatus === "success" ? "Mensagem Enviada!" : "Enviar Mensagem"}
            </Button>
          </form>

          <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="https://github.com/lcaruzo007" target="_blank" rel="noopener noreferrer" aria-label="Visite meu GitHub" className="p-4 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-all hover:-translate-y-1 border border-white/5 hover:border-primary/50">
              <Github className="w-6 h-6" aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/lucascaruzo/" target="_blank" rel="noopener noreferrer" aria-label="Conecte-se no LinkedIn" className="p-4 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-all hover:-translate-y-1 border border-white/5 hover:border-primary/50">
              <Linkedin className="w-6 h-6" aria-hidden="true" />
            </a>
            <a href="https://www.youtube.com/@lucascaruzo4847" target="_blank" rel="noopener noreferrer" aria-label="Inscreva-se no YouTube" className="p-4 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-all hover:-translate-y-1 border border-white/5 hover:border-primary/50">
              <Youtube className="w-6 h-6" aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/l.caruzo/" target="_blank" rel="noopener noreferrer" aria-label="Siga no Instagram" className="p-4 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-all hover:-translate-y-1 border border-white/5 hover:border-primary/50">
              <Instagram className="w-6 h-6" aria-hidden="true" />
            </a>
            <a href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K9609562J2" target="_blank" rel="noopener noreferrer" aria-label="Veja meu Currículo Lattes" className="p-4 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-all hover:-translate-y-1 border border-white/5 hover:border-primary/50">
              <BookOpen className="w-6 h-6" aria-hidden="true" />
            </a>
            <a href="mailto:lucascaruzo76@gmail.com" aria-label="Envie um email" className="p-4 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-all hover:-translate-y-1 border border-white/5 hover:border-primary/50">
              <Mail className="w-6 h-6" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      </div>
    </>
  );
}
