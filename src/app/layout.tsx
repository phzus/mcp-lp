import type { Metadata } from "next";
import { Tomorrow } from "next/font/google";
import "./globals.css";

const tomorrow = Tomorrow({
  variable: "--font-tomorrow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mentoria Caixa Preta | Escala Gringa",
  description:
    "A primeira mentoria à prova de falhas para afiliados de Nutra no mercado americano. Fature +R$100K/dia como Super Afiliado nos EUA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${tomorrow.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
