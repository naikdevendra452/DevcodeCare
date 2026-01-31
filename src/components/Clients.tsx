'use client';

import Image from 'next/image';

const clients = [
  { id: 1, name: 'Client 1', logo: '/img/clients/client-1.png' },
  { id: 2, name: 'Client 2', logo: '/img/clients/client-2.png' },
  { id: 3, name: 'Client 3', logo: '/img/clients/client-3.png' },
  { id: 4, name: 'Client 4', logo: '/img/clients/client-4.png' },
  { id: 5, name: 'Client 5', logo: '/img/clients/client-5.png' },
  { id: 6, name: 'Client 6', logo: '/img/clients/client-6.png' },
  { id: 7, name: 'Client 7', logo: '/img/clients/client-7.png' },
  { id: 8, name: 'Client 8', logo: '/img/clients/client-8.png' },
];

export default function Clients() {
  return (
    <section id="clients" className="section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h3>Our Clients</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque dere santome nida.
          </p>
        </div>

        <div
          className="row g-0 clients-wrap clearfix"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          {clients.map((client) => (
            <div key={client.id} className="col-lg-3 col-md-4 col-xs-6">
              <div className="client-logo">
                <Image
                  src={client.logo}
                  className="img-fluid"
                  alt={client.name}
                  width={150}
                  height={75}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
