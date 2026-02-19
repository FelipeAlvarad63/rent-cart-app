import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Rent Cart App",
  description: "Aplicación para rentar autos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>
          <header className="main-header">
            <div className="container">
              <h1>Rent Cart App</h1>
            </div>
          </header>
          <main className="container main-content">
            {children}
          </main>
          <footer className="main-footer">
            <div className="container">
              <p>&copy; 2026 Rent Cart App. Todos los derechos reservados.</p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
