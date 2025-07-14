import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section
      id="servicos"
      aria-labelledby="services-heading"
      className="py-24 bg-[#0f172a] text-white"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <h2
          id="services-heading"
          className="text-2xl sm:text-3xl font-semibold font-sans mb-8"
        >
          Nossas soluções
        </h2>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          {/* Item 1 */}
          <article
            className="max-h-[416px] border border-[#78909C] rounded flex flex-col items-center justify-around p-4 gap-6 text-center"
            aria-labelledby="servico-sites"
          >
            <Image
              src="/sites.svg"
              alt="Ícone representando criação de sites profissionais"
              width={40}
              height={40}
            />
            <h3 id="servico-sites" className="text-2xl font-sans font-semibold">
              Sites Profissionais
            </h3>
            <p className="font-sans">
              Desenvolvemos sites rápidos, responsivos e com foco em conversão.
              Ideal para empresas que querem se destacar online com uma presença
              profissional.
            </p>
            <Link
              href="/contato"
              className="inline-block rounded bg-gradient-to-b from-[#3b82f6] via-[#573BF6] to-[#573BF6] px-5 py-3 font-medium text-white hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Agende uma reunião
            </Link>
          </article>

          {/* Item 2 */}
          <article
            className="max-h-[416px] border border-[#78909C] rounded flex flex-col items-center justify-around p-4 gap-6 text-center"
            aria-labelledby="servico-mobile"
          >
            <Image
              src="/mobile.svg"
              alt="Ícone representando desenvolvimento de aplicativos mobile"
              width={40}
              height={40}
            />
            <h3 id="servico-mobile" className="text-2xl font-sans font-semibold">
              Aplicativos Mobile
            </h3>
            <p className="font-sans">
              Criamos aplicativos para Android e iOS que conectam você ao seu
              público com fluidez, design moderno e performance.
            </p>
            <Link
              href="/contato"
              className="inline-block rounded bg-gradient-to-b from-[#3b82f6] via-[#573BF6] to-[#573BF6] px-5 py-3 font-medium text-white hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Agende uma reunião
            </Link>
          </article>

          {/* Item 3 */}
          <article
            className="max-h-[416px] border border-[#78909C] rounded flex flex-col items-center justify-around p-4 gap-6 text-center"
            aria-labelledby="servico-bots"
          >
            <Image
              src="/bots.svg"
              alt="Ícone representando automação com bots e integrações"
              width={40}
              height={40}
            />
            <h3 id="servico-bots" className="text-2xl font-sans font-semibold">
              Bots e Integrações
            </h3>
            <p className="font-sans">
              Automatizamos tarefas repetitivas com bots para WhatsApp, Telegram
              e plataformas web. Reduza custos e ganhe produtividade.
            </p>
            <Link
              href="/contato"
              className="inline-block rounded bg-gradient-to-b from-[#3b82f6] via-[#573BF6] to-[#573BF6] px-5 py-3 font-medium text-white hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Agende uma reunião
            </Link>
          </article>

          {/* Item 4 */}
          <article
            className="max-h-[416px] border border-[#78909C] rounded flex flex-col items-center justify-around p-4 gap-6 text-center"
            aria-labelledby="servico-softwares"
          >
            <Image
              src="/softwares.svg"
              alt="Ícone representando sistemas personalizados sob demanda"
              width={40}
              height={40}
            />
            <h3
              id="servico-softwares"
              className="text-2xl font-sans font-semibold"
            >
              Sistemas sob Demanda
            </h3>
            <p className="font-sans">
              Automatize processos com sistemas feitos sob medida para sua operação. Integrados, intuitivos e seguros.
            </p>
            <Link
              href="/contato"
              className="inline-block rounded bg-gradient-to-b from-[#3b82f6] via-[#573BF6] to-[#573BF6] px-5 py-3 font-medium text-white hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Agende uma reunião
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}