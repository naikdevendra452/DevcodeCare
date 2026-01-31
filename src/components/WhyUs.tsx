'use client';

import { useEffect, useRef } from 'react';

interface Card {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

interface CounterStat {
  value: number;
  label: string;
}

const cards: Card[] = [
  {
    icon: 'bi-calendar4-week',
    title: 'Corporis dolorem',
    description:
      'Deleniti optio et nisi dolorem debitis. Aliquam nobis est temporibus sunt ab inventore officiis aut voluptatibus.',
    delay: 100,
  },
  {
    icon: 'bi-camera-reels',
    title: 'Voluptates dolores',
    description:
      'Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur.',
    delay: 200,
  },
  {
    icon: 'bi-chat-square-text',
    title: 'Eum ut aspernatur',
    description:
      'Autem quod nesciunt eos ea aut amet laboriosam ab. Eos quis porro in non nemo ex.',
    delay: 300,
  },
];

const counterStats: CounterStat[] = [
  { value: 232, label: 'Clients' },
  { value: 421, label: 'Projects' },
  { value: 1364, label: 'Hours Of Support' },
  { value: 42, label: 'Hard Workers' },
];

export default function WhyUs() {
  const countersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple counter animation
    const animateCounters = () => {
      const counters = countersRef.current?.querySelectorAll('.counter-value');
      counters?.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0', 10);
        const duration = 1000;
        const startTime = performance.now();

        const updateCounter = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const currentValue = Math.floor(progress * target);
          counter.textContent = currentValue.toString();

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target.toString();
          }
        };

        requestAnimationFrame(updateCounter);
      });
    };

    // Intersection Observer for counter animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h3>Why choose us?</h3>
          <p>
            Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo
            abhorreant vituperatoribus.
          </p>
        </header>

        <div className="row row-eq-height justify-content-center">
          {cards.map((card) => (
            <div key={card.title} className="col-lg-4 mb-4">
              <div className="card" data-aos="zoom-in" data-aos-delay={card.delay}>
                <i className={`bi ${card.icon}`}></i>
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                  <a href="#" className="readmore">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          ref={countersRef}
          className="row counters"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {counterStats.map((stat) => (
            <div key={stat.label} className="col-lg-3 col-6 text-center">
              <span className="counter-value" data-target={stat.value}>
                0
              </span>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
