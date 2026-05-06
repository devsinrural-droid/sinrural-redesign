import type { Metadata } from "next";
import { Bricolage_Grotesque, Fraunces } from "next/font/google";
import "./globals.css";
import { WhatsAppFAB } from "@/components/whatsapp-fab";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sinrural-redesign.vercel.app"),
  title: {
    default: "SinRural — Sindicato dos Produtores Rurais de Passos",
    template: "%s · SinRural",
  },
  description:
    "Há 60 anos representando ~1.300 produtores rurais de Passos e do Sudoeste de Minas Gerais. Serviços jurídicos, fiscais, contábeis, ambientais, PRONAF, leilões e Expass Agro.",
  keywords: [
    "sindicato rural Passos",
    "SinRural",
    "produtor rural Passos MG",
    "Expass Agro",
    "leilão de gado Passos",
    "PRONAF Sudoeste de Minas",
    "FAEMG SENAR Passos",
  ],
  authors: [{ name: "SinRural" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "SinRural",
    title: "SinRural — Unidos pelo Agro",
    description:
      "Sindicato dos Produtores Rurais de Passos. Há 60 anos, ao lado de quem trabalha o campo.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bricolage.variable} ${fraunces.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppFAB />
      </body>
    </html>
  );
}
