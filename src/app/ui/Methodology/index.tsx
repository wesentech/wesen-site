"use client";

import Image from "next/image";
import { useState } from "react";

const etapas = [
  {
    id: 1,
    titulo: "1. Briefing e Planejamento",
    descricao:
      "Entendemos a fundo sua necessidade e objetivos. Alinhamento é o primeiro passo do sucesso.",
    imagem: "/briefing-planejamento.webp",
    icon: "/briefing.svg",
  },
  {
    id: 2,
    titulo: "2. Prototipação e Design",
    descricao:
      "Criamos wireframes e layouts com foco em experiência do usuário, usabilidade e identidade visual da sua marca.",
    imagem: "/prototipacao.webp",
    icon: "/design.svg",
  },
  {
    id: 3,
    titulo: "3. Desenvolvimento Ágil",
    descricao:
      "Utilizamos metodologias ágeis para garantir entregas rápidas, testadas e funcionais.",
    imagem: "/metodologia-agil.webp",
    icon: "/agil.svg",
  },
  {
    id: 4,
    titulo: "4. Deploy e Suporte",
    descricao:
      "Acompanhamos o pós-lançamento com suporte técnico e melhorias contínuas.",
    imagem: "/deploy.webp",
    icon: "/deploy.svg",
  },
];

export default function Methodology() {
  const [etapaAtiva, setEtapaAtiva] = useState(etapas[0]);

  return (
    <section
      id="metodologia"
      aria-labelledby="metodologia-heading"
      className="bg-[#1E1E1E] text-white px-4 py-20"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 id="metodologia-heading" className="text-3xl font-bold mb-12">
          Nossa metodologia
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 border border-[#78909C] rounded p-4">
          {/* Etapas à esquerda */}
          <div className="space-y-4">
            {etapas.map((etapa) => {
              const isAtiva = etapaAtiva.id === etapa.id;
              return (
                <button
                  key={etapa.id}
                  onClick={() => setEtapaAtiva(etapa)}
                  aria-pressed={isAtiva}
                  aria-label={`Selecionar etapa: ${etapa.titulo}`}
                  className={`w-full text-left flex items-center justify-center p-6 rounded-lg border transition-all ${
                    isAtiva
                      ? "bg-[#464444] border-[#78909C] text-white"
                      : "border-[#78909C] text-zinc-300 hover:bg-zinc-600"
                  }`}
                >
                  <span className="flex flex-shrink-0 items-center justify-center h-[166px] p-2 mr-4">
                    <Image
                      src={etapa.icon}
                      alt={`Ícone da etapa ${etapa.titulo}`}
                      width={32}
                      height={32}
                      className="inline-block mr-4"
                    />
                  </span>
                  <span>
                    <h3 className="text-2xl font-semibold font-sans text-white mb-2">
                      {etapa.titulo}
                    </h3>
                    <p className="text-sm">{etapa.descricao}</p>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Imagem à direita */}
          <div className="relative w-full min-h-[300px] rounded-lg overflow-hidden sm:h-[400px] md:h-[500px] lg:h-auto">
            <Image
              src={etapaAtiva.imagem}
              alt={`Imagem da etapa ${etapaAtiva.titulo}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-all duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}