import type { Metadata } from "next";
import { Lexend, Lexend_Exa } from "next/font/google";
import "./globals.css";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import WhatsAppButton from "./ui/Components/WhatsappButton";

const lexendSans = Lexend({
  variable: "--font-lexend-sans",
  subsets: ["latin"],
});

const lexendMono = Lexend_Exa({
  variable: "--font-lexend-exa",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WeSen Technologies - Soluções Digitais sob Medida",
  description:
    "Desenvolvemos sites, sistemas, aplicativos e bots com foco em inovação, performance e resultado. Tecnologia estratégica e simples para seu negócio.",
  keywords: [
    "Desenvolvimento Web",
    "Aplicativos",
    "Bots",
    "Next.js",
    "Tailwind CSS",
    "Tecnologia para empresas",
    "WeSen Technologies",
  ],
  authors: [{ name: "WeSen Technologies", url: "https://wesen.tech" }],
  metadataBase: new URL("https://wesen.tech"), // ajuste para seu domínio real
  openGraph: {
    title: "WeSen Technologies",
    description:
      "Soluções digitais personalizadas com propósito e resultado. Conectamos seu negócio ao digital.",
    url: "https://wesen.tech",
    siteName: "WeSen Technologies",
    images: [
      {
        url: "/og-image.svg", // coloque uma imagem em /public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "WeSen Technologies",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WeSen Technologies",
    description:
      "Soluções digitais sob medida com inovação, performance e estratégia.",
    images: ["/og-image.jpg"],
  },
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${lexendSans.variable} ${lexendMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <WhatsAppButton/>
        <Footer/>
      </body>
    </html>
  );
}
