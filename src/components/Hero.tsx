'use client';

import Image from 'next/image';

export default function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="clearfix">
      <div className="container" data-aos="fade-up">
        <div className="hero-img" data-aos="zoom-out" data-aos-delay="200">
          <Image
            src="/img/hero-img.svg"
            alt="Hero illustration"
            width={500}
            height={400}
            className="img-fluid"
            priority
          />
        </div>

        <div className="hero-info" data-aos="zoom-in" data-aos-delay="100">
          <h2>
            We provide
            <br />
            <span>solutions</span>
            <br />
            for your business!
          </h2>
          <div>
            <a
              href="#about"
              className="btn-get-started scrollto"
              onClick={(e) => scrollToSection(e, '#about')}
            >
              Get Started
            </a>
            <a
              href="#services"
              className="btn-services scrollto"
              onClick={(e) => scrollToSection(e, '#services')}
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
