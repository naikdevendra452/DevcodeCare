import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DevCodeCare - Web Development Solutions',
  description: 'We provide innovative web development solutions for your business. Specializing in website development, e-commerce, and digital marketing.',
  keywords: 'web development, website design, e-commerce, digital marketing, DevCodeCare',
  authors: [{ name: 'DevCodeCare' }],
  openGraph: {
    title: 'DevCodeCare - Web Development Solutions',
    description: 'We provide innovative web development solutions for your business.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Montserrat:300,400,500,700"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
