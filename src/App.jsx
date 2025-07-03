import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { CheckCircle, Users, Clock, Download, Mail, User, ArrowRight, Star, TrendingUp, Target, Zap } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Ops! 😅",
        description: "Por favor, preencha todos os campos para receber seu guia gratuito!",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "🎉 Sucesso!",
      description: "Seu guia gratuito será enviado para seu e-mail em instantes!"
    });

    setFormData({ name: '', email: '' });
  };

  const benefits = [
    "Estrutura de VSL testada e validada por copywriters 7 dígitos",
    "Técnicas de copywriting que convertem visitantes em compradores", 
    "Templates prontos + passo a passo para páginas de alta conversão",
    "Ideal para infoprodutores, afiliados e agências"
  ];

  const mentalTriggers = [
    { icon: Target, title: "Escassez", description: "Crie urgência irresistível" },
    { icon: Users, title: "Prova Social", description: "Mostre que outros já compraram" },
    { icon: Zap, title: "Autoridade", description: "Estabeleça sua credibilidade" },
    { icon: TrendingUp, title: "Reciprocidade", description: "Ofereça valor primeiro" },
    { icon: Star, title: "Compromisso", description: "Faça o cliente se comprometer" }
  ];

  return (
    <>
      <Helmet>
        <title>Transforme Palavras em Lucro: Crie Páginas de Vendas com VSL que Vendem</title>
        <meta name="description" content="Descubra o método comprovado para construir páginas de vendas com copy estratégica e VSLs hipnotizantes. Guia gratuito com 5 gatilhos mentais essenciais." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        <div className="relative z-10">
          <motion.header 
            className="text-center pt-12 pb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Zap className="w-4 h-4" />
              MÉTODO EXCLUSIVO
            </div>
          </motion.header>

          <section className="max-w-6xl mx-auto px-4 text-center mb-16">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-black text-highlight-dark mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transforme Palavras em Lucro
            </motion.h1>

            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl text-secondary mb-8 max-w-4xl mx-auto leading-relaxed font-semibold">
                Crie Páginas de Vendas com VSL que Vendem Mesmo Enquanto Você Dorme!
              </h2>
              
              <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
                Descubra o método comprovado para construir páginas de vendas com copy estratégica e VSLs hipnotizantes — mesmo que você não seja um expert em marketing ou escrita.
              </p>
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto mb-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=0&loop=1&playlist=dQw4w9WgXcQ" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
            </motion.div>
          </section>

          <section className="max-w-5xl mx-auto px-4 mb-16">
            <motion.div
              className="grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 bg-white rounded-xl p-6 border border-gray-200 shadow-md"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground text-lg font-medium">{benefit}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <section className="max-w-6xl mx-auto px-4 mb-16">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-highlight-dark mb-4">
                Os 5 Gatilhos Mentais Que Toda Página Precisa Ter
              </h3>
              <p className="text-xl text-foreground">
                Descubra os segredos psicológicos por trás das vendas que nunca param
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
              {mentalTriggers.map((trigger, index) => {
                const IconComponent = trigger.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 text-center shadow-lg border-2 border-transparent hover:border-secondary transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5
                    }}
                  >
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 -mt-12 border-4 border-background">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-highlight-dark font-bold text-lg mb-2">{trigger.title}</h4>
                    <p className="text-foreground text-sm leading-relaxed">{trigger.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          <section className="max-w-4xl mx-auto px-4 mb-16">
            <motion.div
              className="bg-secondary rounded-3xl p-8 md:p-12 text-center shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <Download className="w-10 h-10 text-accent" />
                <h3 className="text-3xl md:text-4xl font-black text-white">
                  Baixe Agora o Guia Grátis!
                </h3>
              </div>
              
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Descubra os 5 gatilhos mentais que toda página de vendas precisa ter para converter!
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-gray-900 placeholder-gray-500 text-lg font-medium border-2 border-transparent focus:outline-none focus:ring-4 focus:ring-accent/50 focus:border-accent transition-all"
                  />
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu melhor e-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-gray-900 placeholder-gray-500 text-lg font-medium border-2 border-transparent focus:outline-none focus:ring-4 focus:ring-accent/50 focus:border-accent transition-all"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full py-6 text-xl font-black bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Download className="w-6 h-6 mr-2" />
                  QUERO MEU GUIA GRATUITO
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </form>
            </motion.div>
          </section>

          <section className="max-w-4xl mx-auto px-4 mb-16">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <Users className="w-8 h-8 text-primary" />
                <Clock className="w-8 h-8 text-accent" />
              </div>
              
              <h4 className="text-2xl md:text-3xl font-bold text-highlight-dark mb-4">
                Já são mais de <span className="text-primary">3.500 empreendedores</span> usando este método
              </h4>
              
              <p className="text-xl text-foreground mb-8">
                Faça parte agora e transforme suas palavras em resultados reais!
              </p>

              <div className="flex flex-wrap items-center justify-center gap-8 text-center">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
                  <div className="text-3xl font-black text-primary mb-2">3.500+</div>
                  <div className="text-foreground">Empreendedores</div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
                  <div className="text-3xl font-black text-accent mb-2">97%</div>
                  <div className="text-foreground">Taxa de Sucesso</div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
                  <div className="text-3xl font-black text-secondary mb-2">24h</div>
                  <div className="text-foreground">Para Ver Resultados</div>
                </div>
              </div>
            </motion.div>
          </section>

          <footer className="text-center py-12 border-t border-gray-200">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              <p className="text-gray-500 mb-4">
                © 2025 - Todos os direitos reservados
              </p>
              <p className="text-gray-400 text-sm">
                Este material é oferecido gratuitamente para fins educacionais
              </p>
            </motion.div>
          </footer>
        </div>

        <Toaster />
      </div>
    </>
  );
}

export default App;