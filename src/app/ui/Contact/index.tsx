import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-heading"
      className="relative h-[500px] md:h-[600px]"
    >
      {/* Imagem de fundo */}
      <Image
        src="/bg-contato.webp"
        alt="Notebook com código sendo digitado"
        fill
        className="object-cover"
        quality={85}
      />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-[#1E1E1E]/70 z-10" />

      {/* Conteúdo centralizado */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 text-white">
        <h2
          id="contato-heading"
          className="text-2xl md:text-3xl font-bold mb-4"
        >
          Pronto para tirar sua ideia do papel?
        </h2>
        <p className="text-base md:text-lg max-w-xl mb-6 font-semibold">
          Mande mensagem no nosso WhatsApp e bora iniciar o processo de
          descoberta do seu projeto!
        </p>
        <Link
          href="https://wa.me/5547992217503" // Troque pelo seu número real
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir WhatsApp para falar com a WeSen Technologies"
          className="inline-block rounded bg-gradient-to-b from-[#3b82f6] via-[#573BF6] to-[#573BF6] px-5 py-3 font-medium text-white hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          Mandar mensagem
        </Link>
      </div>
    </section>
  );
}