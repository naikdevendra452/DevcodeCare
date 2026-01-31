'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Update active section
      const sections = navLinks.map((link) => link.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerHeight = isScrolled ? 60 : 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }

    setIsMobileMenuOpen(false);
  }, [isScrolled]);

  return (
    <header
      id="header"
      className={`d-flex align-items-center ${isScrolled ? 'header-scrolled' : ''}`}
    >
      <div className="container d-flex justify-content-between">
        <div className="logo">
          <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')}>
            <Image
              src="/img/logo.png"
              alt="DevCodeCare Logo"
              width={150}
              height={50}
              style={{ width: 'auto', height: 'auto', maxHeight: isScrolled ? '45px' : '60px' }}
              priority
            />
          </a>
        </div>

        <nav id="navbar" className={`navbar ${isMobileMenuOpen ? 'navbar-mobile' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className={`nav-link scrollto ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className={`mobile-nav-toggle bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          />
        </nav>
      </div>
    </header>
  );
}
