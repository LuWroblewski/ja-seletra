import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import SideMenu from '@/components/principais/sideMenu/sideMenu';
import Title from '@/components/principais/title/title';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Painel gerenciamento ',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <SideMenu />
        <Title title='Painel de Gerenciamento' />

        {children}
      </body>
    </html>
  );
}
