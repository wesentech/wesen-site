import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="bg-[#1c2431] text-white py-24 px-4 text-center"
      aria-labelledby="hero-heading"
    >
      <header className="max-w-4xl mx-auto">
        <h1
          id="hero-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
        >
          <span className="text-transparent bg-gradient-to-b from-[#3b82f6] via-[#573BF6] to-[#573BF6] bg-clip-text">
            Soluções Digitais
          </span>{" "}
          Sob Medida para o Seu Negócio
        </h1>

        <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
          Sites, aplicativos, sistemas e bots criados com foco em inovação,
          performance e crescimento.
        </p>

        <Link
          href="/contato"
          className="inline-block mt-6 bg-gradient-to-b from-[#3b82f6] via-[#573BF6] to-[#573BF6] text-white font-semibold px-6 py-3 rounded-md shadow-md hover:scale-105 transition-transform"
          aria-label="Ir para seção de contato"
        >
          Entrar em contato
        </Link>
      </header>

      {/* Ícones de tecnologias */}
      <div className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-8 px-4">
        {[
          "css",
          "html",
          "graphql",
          "java",
          "javascript",
          "kotlin",
          "mongodb",
          "nextjs",
          "react",
          "spring",
          "sql",
          "sqlite",
          "typescript",
        ].map((tech, idx) => (
          <Image
            key={idx}
            src={`/icons/${tech}.svg`}
            alt={`Tecnologia ${tech}`}
            width={48}
            height={48}
            className="opacity-80 hover:opacity-100 transition-opacity w-12 h-12 sm:w-14 sm:h-14"
          />
        ))}
      </div>
    </section>
  );
}
