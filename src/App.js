import React, { useState, useEffect } from 'react';
import './App.css'; // Importe seu arquivo de estilo
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importando o CSS do carousel

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.content h2, .content p');
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top + scrollTop;
        if (scrollTop + window.innerHeight > elementTop) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1>Bem-Vindo à JCAMERA</h1>
        <p className="header-description">
          Protegemos seus dados e sistemas com soluções eficazes e personalizadas, com foco em segurança, excelência e confidencialidade.
        </p>
      </header>

      <div className="content">
        <h2>Sobre Nós</h2>
        <p>A JCAMERA Tecnologia da Informação é uma empresa dedicada a oferecer soluções de segurança da informação de alta qualidade. Com uma equipe de especialistas em pentests e desenvolvimento de projetos computacionais, nosso foco é garantir que sua empresa esteja protegida contra ameaças cibernéticas. Trabalhamos em parceria com nossos clientes para identificar vulnerabilidades e implementar medidas de segurança robustas que promovam a continuidade dos negócios.</p>

        <h2>Nossos Serviços</h2>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          showThumbs={false}
          showStatus={false}
          dynamicHeight={false}
          className="carousel"
        >
          <div className="carousel-item">
            <div className="carousel-content">
              <h3>Segurança da Informação</h3>
              <h4>Avaliamos e aprimoramos a segurança dos seus sistemas e dados. Nossa abordagem abrangente garante que sua empresa esteja preparada para enfrentar os desafios atuais e futuros.</h4>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-content">
              <h3>Pentests</h3>
              <h4>Realizamos testes de penetração detalhados para identificar e corrigir vulnerabilidades em seus sistemas. Nossos especialistas simulam ataques para fornecer uma visão clara de como proteger sua infraestrutura.</h4>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-content">
              <h3>Projetos Computacionais</h3>
              <h4>Desenvolvemos soluções tecnológicas sob medida para atender às necessidades específicas do seu negócio. Desde sistemas de gestão até aplicações personalizadas, nossa equipe está pronta para transformar suas ideias em realidade.</h4>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-content">
              <h3>Consultoria</h3>
              <h4>Consultoria em Segurança da Informação Nossos consultores são experientes na avaliação de riscos e na implementação de políticas de segurança eficazes. Oferecemos uma análise detalhada do seu ambiente digital e propondo soluções que se alinham com suas metas estratégicas.</h4>
            </div>
          </div>
        </Carousel>

        <h2>Contato</h2>
        <p>Entre em Contato Tem alguma dúvida ou deseja saber mais sobre nossos serviços? Nossa equipe está à disposição para ajudá-lo. Preencha o formulário de contato ou ligue para nós e descubra como a JCAMERA Tecnologia da Informação pode proteger o que há de mais valioso em seu negócio.</p>
      </div>
    </div>
  );
}

export default App;
