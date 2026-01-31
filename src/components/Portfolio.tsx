'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';

type Category = 'all' | 'app' | 'web' | 'card';

interface PortfolioItem {
  id: number;
  title: string;
  category: Exclude<Category, 'all'>;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  { id: 1, title: 'App 1', category: 'app', image: '/img/portfolio/app1.jpg' },
  { id: 2, title: 'Web 3', category: 'web', image: '/img/portfolio/web3.jpg' },
  { id: 3, title: 'App 2', category: 'app', image: '/img/portfolio/app2.jpg' },
  { id: 4, title: 'Card 2', category: 'card', image: '/img/portfolio/card2.jpg' },
  { id: 5, title: 'Web 2', category: 'web', image: '/img/portfolio/web2.jpg' },
  { id: 6, title: 'App 3', category: 'app', image: '/img/portfolio/app3.jpg' },
  { id: 7, title: 'Card 1', category: 'card', image: '/img/portfolio/card1.jpg' },
  { id: 8, title: 'Card 3', category: 'card', image: '/img/portfolio/card3.jpg' },
  { id: 9, title: 'Web 1', category: 'web', image: '/img/portfolio/web1.jpg' },
];

const filters: { key: Category; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'app', label: 'App' },
  { key: 'card', label: 'Card' },
  { key: 'web', label: 'Web' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="portfolio" className="clearfix">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h3 className="section-title">Our Portfolio</h3>
        </header>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12">
            <ul id="portfolio-flters">
              {filters.map((filter) => (
                <li
                  key={filter.key}
                  className={activeFilter === filter.key ? 'filter-active' : ''}
                  onClick={() => setActiveFilter(filter.key)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveFilter(filter.key);
                    }
                  }}
                >
                  {filter.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`col-lg-4 col-md-6 portfolio-item filter-${item.category}`}
            >
              <div className="portfolio-wrap">
                <Image
                  src={item.image}
                  className="img-fluid"
                  alt={item.title}
                  width={400}
                  height={300}
                />
                <div className="portfolio-info">
                  <h4>
                    <a href="#">{item.title}</a>
                  </h4>
                  <p>{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
                  <div>
                    <a
                      href={item.image}
                      className="portfolio-lightbox link-preview"
                      title={item.title}
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="#" className="link-details" title="More Details">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
