import Image from "next/image";

export default function Portfolio() {
  return (
    <section
      className="py-24"
      aria-labelledby="portfolio-titulo"
    >
      <div className="bg-[#1F2937] text-white p-8 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl font-bold mb-4 " id="portfolio-titulo">
          Nossos últimos projetos desenvolvidos
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3  mb-6 lg:gap-8">
          <article className="h-32 rounded bg-[#464444] p-2 gap-1.5 flex flex-col justify-center  transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
            <div>
            <h3 className="font-sans font-medium text-[#3B82F6] text-2xl">
              Quadra Livre
            </h3>
            <p className="font-sans text-gray-300">
              Criamos um aplicativo inteligente para quadras esportivas que
              substitui a caderneta física por uma plataforma digital moderna e
              eficiente.{" "}
            </p>
            </div>
          </article>
          <div className="h-32 rounded bg-gray-300 lg:col-span-2  transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">  
            <Image
                  src="/mobile.app.webp"
                  alt="Imagem do app Quadra Livre mostrando uma quadra esportiva e funcionalidades do app"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded"
                />          
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3  mb-6 lg:gap-8">
          <article className="h-32 rounded bg-[#464444] p-2 gap-1.5 flex flex-col justify-center  transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
            <div>
            <h3 className="font-sans font-medium text-[#3B82F6] text-2xl">
              Quadra Livre
            </h3>
            <p className="font-sans text-gray-300">
              Criamos um aplicativo inteligente para quadras esportivas que
              substitui a caderneta física por uma plataforma digital moderna e
              eficiente.{" "}
            </p>
            </div>
          </article>
          <div className="h-32 rounded bg-gray-300 lg:col-span-2  transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">  
            <Image
                  src="/mobile.app.webp"
                  alt="Imagem do app Quadra Livre mostrando uma quadra esportiva e funcionalidades do app"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded"
                />          
          </div>
        </div>
        
      </div>
    </section>
  );
}
