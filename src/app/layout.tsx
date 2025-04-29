import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/sections/Footer';

// Police Inter avec sous-ensemble latin
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Site Vitrine | DETIA Consulting',
  description: 'Site vitrine professionnel pour présenter votre entreprise, vos services et vos compétences.',
  keywords: ['site vitrine', 'entreprise', 'services', 'professionnels'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}