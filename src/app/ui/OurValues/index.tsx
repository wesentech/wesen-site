export default function OurValues() {
  return (
    <section
      id="valores"
      aria-labelledby="valores-heading"
      className="py-24 bg-[#1E1E1E] text-white"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <h2
          id="valores-heading"
          className="text-2xl sm:text-3xl font-semibold font-sans mb-12"
        >
          Mais do que um serviço: uma parceria estratégica{" "}
          <span className="block">para o seu crescimento</span>
        </h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold font-sans">
              Tecnologia sem dor de cabeça
            </h3>
            <p className="text-zinc-300">
              Cuidamos de tudo para você: hospedagem, domínio, segurança,
              atualizações e suporte. Você foca no seu negócio, a gente cuida do
              resto.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold font-sans">
              Parceria de verdade
            </h3>
            <p className="text-zinc-300">
              Não somos só desenvolvedores. Somos seus parceiros na
              transformação digital, prontos pra caminhar com você a longo
              prazo.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold font-sans">
              Sites e sistemas que vendem
            </h3>
            <p className="text-zinc-300">
              Design moderno, velocidade, SEO e funcionalidades que geram
              resultado. Seu negócio visível, atrativo e pronto para crescer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}