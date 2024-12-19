import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { title: "Segurança da Informação", description: "Avaliamos e aprimoramos a segurança dos seus sistemas e dados. Nossa abordagem abrangente garante que sua empresa esteja preparada para enfrentar os desafios atuais e futuros." },
    { title: "Pentests", description: "Realizamos testes de penetração detalhados para identificar e corrigir vulnerabilidades em seus sistemas. Nossos especialistas simulam ataques para fornecer uma visão clara de como proteger sua infraestrutura." },
    { title: "Projetos Computacionais", description: "Desenvolvemos soluções tecnológicas sob medida para atender às necessidades específicas do seu negócio. Desde sistemas de gestão até aplicações personalizadas, nossa equipe está pronta para transformar suas ideias em realidade." },
    { title: "Consultoria", description: "Nossos consultores são experientes na avaliação de riscos e na implementação de políticas de segurança eficazes. Oferecemos uma análise detalhada do seu ambiente digital e propomos soluções alinhadas às suas metas estratégicas." },
  ];

  const testimonials = [
    { img: 'https://via.placeholder.com/100', name: 'Maria Silva', company: 'Empresa X', text: 'A JCAMERA foi fundamental para proteger nossos dados e sistemas!' },
    { img: 'https://via.placeholder.com/100', name: 'João Santos', company: 'Empresa Y', text: 'Excelente trabalho em segurança da informação, muito satisfeitos!' },
    { img: 'https://via.placeholder.com/100', name: 'Ana Oliveira', company: 'Empresa Z', text: 'Recomendo os serviços, equipe muito qualificada e dedicada.' },
    { img: 'https://via.placeholder.com/100', name: 'Carlos Pereira', company: 'Empresa W', text: 'Soluções personalizadas que realmente atenderam nossas necessidades.' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <ul className="navbar-list">
          <li><a onClick={() => scrollToSection('about')} href="#">Sobre Nós</a></li>
          <li><a onClick={() => scrollToSection('services')} href="#">Serviços</a></li>
          <li><a onClick={() => scrollToSection('testimonials')} href="#">Depoimentos</a></li>
          <li><a onClick={() => scrollToSection('contact')} href="#">Contato</a></li>
        </ul>
      </nav>

      {/* Header */}
      <header className="header">
        <h1>Bem-Vindo à JCAMERA</h1>
        <p className="header-description">
          Protegemos seus dados e sistemas com soluções eficazes e personalizadas, com foco em segurança, excelência e confidencialidade.
        </p>
      </header>

      {/* Sobre Nós */}
      <div className="content" id="about">
        <h2>Sobre Nós</h2>
        <p>Quem Somos A JCAMERA Tecnologia da Informação é uma empresa dedicada a oferecer soluções de segurança da informação de alta qualidade. Com uma equipe de especialistas em pentests e desenvolvimento de projetos computacionais, nosso foco é garantir que sua empresa esteja protegida contra ameaças cibernéticas. Trabalhamos em parceria com nossos clientes para identificar vulnerabilidades e implementar medidas de segurança robustas que promovam a continuidade dos negócios.</p>
      </div>

      {/* Serviços */}
      <div className="carousel-container" id="services">
        <div
          className="carousel"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="carousel-item" key={index}>
              <div className="carousel-content">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-btn prev" onClick={handlePrev}>&#9664;</button>
        <button className="carousel-btn next" onClick={handleNext}>&#9654;</button>
      </div>

      {/* Depoimentos */}
      <div className="testimonials" id="testimonials">
        <h2>Depoimentos</h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <img src={testimonial.img} alt={`Foto de ${testimonial.name}`} />
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-company">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contato */}
      <div className="contact-form" id="contact">
        <h2>Entre em Contato</h2>
        <form>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Empresa" />
          <input type="text" placeholder="Cargo" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Telefone" />
          <textarea placeholder="Mensagem"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
