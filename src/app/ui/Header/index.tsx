import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return(
        <header className="bg-[#1F2937] shadow dark:bg-gray-800 border-b border-[#78909C] py-1">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <Link className="block text-teal-600 dark:text-teal-300" href="/">
            <span className="sr-only">Home</span>
            <Image
              src={"/logo-wesen.svg"}
              alt="Wesen Technologies"
              width={120}
              height={40}
            />
          </Link>
        </div>
      </header>
    )
}