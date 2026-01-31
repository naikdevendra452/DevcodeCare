import {
  Header,
  Hero,
  About,
  WhyUs,
  Portfolio,
  Clients,
  Contact,
  Footer,
  BackToTop,
  AOSInit,
} from '@/components';

export default function Home() {
  return (
    <>
      <AOSInit />
      <Header />
      <Hero />
      <main id="main">
        <About />
        <WhyUs />
        <Portfolio />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
