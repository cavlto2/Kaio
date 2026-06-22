import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code & Coffee",
  description: "A melhor cafeteria para desenvolvedores",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50">
        {/* Barra de Navegação usando Link */}
        <nav className="flex gap-6 p-6 bg-zinc-200 dark:bg-zinc-900 justify-center font-mono text-lg">
          <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
          <Link href="/menu" className="hover:text-blue-500 transition-colors">Menu</Link>
          <Link href="/about" className="hover:text-blue-500 transition-colors">Sobre</Link>
          <Link href="/location" className="hover:text-blue-500 transition-colors">Localização</Link>
        </nav>
        
        {/* Conteúdo das Páginas */}
        <main className="flex-1 flex flex-col items-center p-12">
          {children}
        </main>
      </body>
    </html>
  );
} 