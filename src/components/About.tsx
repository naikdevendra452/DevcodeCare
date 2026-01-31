'use client';

import Image from 'next/image';

interface IconBox {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const iconBoxes: IconBox[] = [
  {
    icon: 'bi-card-checklist',
    title: 'INNOVATIVE',
    description:
      'Most of the modern web designs have similarities in their layouts and presentations because of the certain trends that have become mainstream. DEV CODE CARE will try to give you a unique web design that will make your brand stand out.',
    delay: 100,
  },
  {
    icon: 'bi-brightness-high',
    title: 'EXPERIMENTAL',
    description:
      'Once you start spending time online you will find websites with variations and out of the box concepts. DEV CODE CARE tries to experiment with the designs by applying new techniques as long as it makes sense to the end user.',
    delay: 200,
  },
  {
    icon: 'bi-calendar4-week',
    title: 'PERFECT',
    description:
      'DEV CODE CARE provides end to end creative solutions for local & global brands and businesses and help them reach their target audiences.',
    delay: 300,
  },
];

export default function About() {
  return (
    <section id="about">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h3>About Us</h3>
          <p>We&apos;re a leader in innovative Internet marketing solutions</p>
        </header>

        <div className="row about-container">
          <div className="col-lg-6 content order-lg-1 order-2">
            <p>
              We specialize in almost all the areas including, website development and sales
              optimization. We develop all kind of website, from a simple personal website to a
              very informative website with e-commerce services. We create your website in such
              a way that everything present on the website is helpful enough to get a clear
              view of your business in your client&apos;s mind. Our websites are very well-managed,
              so your viewers will have no problem finding what they need.
            </p>

            {iconBoxes.map((box) => (
              <div
                key={box.title}
                className="icon-box"
                data-aos="fade-up"
                data-aos-delay={box.delay}
              >
                <div className="icon">
                  <i className={`bi ${box.icon}`}></i>
                </div>
                <h4 className="title">
                  <a href="#">{box.title}</a>
                </h4>
                <p className="description">{box.description}</p>
              </div>
            ))}
          </div>

          <div className="col-lg-6 background order-lg-2" data-aos="zoom-in">
            <Image
              src="/img/about-img.svg"
              className="img-fluid"
              alt="About us"
              width={500}
              height={400}
            />
          </div>
        </div>

        <div className="row about-extra">
          <div className="col-lg-6" data-aos="fade-right">
            <Image
              src="/img/about-extra-1.svg"
              className="img-fluid"
              alt="Why we are different"
              width={500}
              height={400}
            />
          </div>
          <div className="col-lg-6 pt-5 pt-lg-0" data-aos="fade-left">
            <h4>WHY WE ARE DIFFERENT</h4>
            <p>We Take In Charge Your Journey Digital In Unison Towards A Common Goal</p>
            <p>
              As its beginning, we have been collaborating on the digital success of our
              customers. We are a digital agency dedicated to the development of web
              solutions for your business. Your business objectives are at the heart of our
              priorities: we promise to concretely transform your ideas into concrete
              projects so that they are developed to their full potential.
            </p>
          </div>
        </div>

        <div className="row about-extra">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
            <Image
              src="/img/about-extra-2.svg"
              className="img-fluid"
              alt="Achieve your goals"
              width={500}
              height={400}
            />
          </div>

          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-right">
            <h4>WE&apos;LL HELP TO ACHIEVE YOUR GOALS AND TO GROW BUSINESS</h4>
            <p>
              We Help To Take Your Business Online And Gives You The Best Quality Leads And
              Sales For Your Business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
