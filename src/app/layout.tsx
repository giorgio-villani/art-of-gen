import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Art of Gen - The Evolution of Art through Algorithms',
  description:
    'Immerse yourself in a world of generative art! Dive into the intersection of creativity and technology with "Generations," an innovative art exhibit that explores generative art as both a revolutionary new style and a natural extension of traditional artistic practices.',
  keywords:
    'generative, art, artists, classes, digital, gallery, workshops, teachers, school, learning, learn, art classes, sculpture, digital art, painting, drawing, creative classes, art education, Houston art studio, art lessons, art events, art exhibitions, creative community, art techniques, artistic skills, art for kids, art for adults, art courses, visual arts',
  openGraph: {
    title: 'Art of Gen',
    description: 'The Evolution of Art through Algorithms',
    url: 'https://www.theartofgen.com/',
    type: 'website',
    images: [
      {
        url: 'https://www.theartofgen.com/art-of-gen_metadata.png',
        width: 1200,
        height: 630,
        alt: 'Art of Gen Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Art of Gen',
    description: 'The Evolution of Art through Algorithms',
    images: {
      url: 'https://www.theartofgen.com/art-of-gen_metadata.png',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <div className="grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
