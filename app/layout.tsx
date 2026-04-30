// @ts-nocheck
import type { Metadata } from 'next';
import { Oswald, Open_Sans } from 'next/font/google';
import { getKorivaConfig, buildCssVars } from '@/lib/koriva-config';
import './globals.css';

const heading = Oswald({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-heading' });
const body    = Open_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body' });

export async function generateMetadata(): Promise<Metadata> {
  const cfg = await getKorivaConfig();
  return {
    title: cfg?.seo?.title ?? 'Bushido Dojo — Chicago, IL',
    description: cfg?.seo?.description ?? "Chicago's premier traditional martial arts school. Karate, Judo, Taekwondo, and more for all ages.",
    keywords: cfg?.seo?.keywords ?? ['martial arts Chicago', 'karate', 'judo', 'taekwondo', 'kids martial arts'],
    openGraph: { title: cfg?.seo?.title ?? 'Bushido Dojo' },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cfg  = await getKorivaConfig();
  const vars = buildCssVars(cfg?.brand);
  return (
    <html lang="en" style={vars as React.CSSProperties}>
      <body className={`${heading.variable} ${body.variable} bg-dj-bg text-dj-text antialiased`}>
        {children}
      </body>
    </html>
  );
}
