import { Outfit, Ovo } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const ovo = Ovo({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata = {
  title: 'Portfolio - Julya Petrovska',
  description:
    "Welcome to my portfolio website! I'm Julya Petrovska, a passionate developer and designer. Explore my projects, skills, and experience here.",
  openGraph: {
    title: 'Portfolio - Julya Petrovska',
    description: 'Frontend Developer | Next.js and Tailwind CSS Expert.',
    url: 'https://my-frontend-portfolio-julya-petrovska.vercel.app/',
    siteName: 'Portfolio - Julya Petrovska',
    images: [
      {
        url: 'https://my-frontend-portfolio-julya-petrovska.vercel.app/social-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Julya Petrovska Portfolio Preview',
      },
    ],
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body 
      className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
