import {
  Instagram,
  Github,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white py-6 px-4" aria-label="Rodapé">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
        
        {/* Redes sociais */}
        <div className="text-center sm:text-left">
          <p className="text-sm mb-2 sm:mb-0">Nossas redes:</p>
          <div className="flex justify-center sm:justify-start items-center gap-4">
            <a
              href="https://instagram.com/wesentech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Wesen Technologies"
              className="hover:text-blue-400 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
           
            <a
              href="https://github.com/wesentech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub da Wesen Technologies"
              className="hover:text-blue-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Direitos autorais */}
        <p className="text-xs text-center sm:text-right text-zinc-400">
          © {new Date().getFullYear()} Wesen Technologies. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}