import Recursos from "@/components/artistas/Recursos";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="w-full bg-black h-full text-white flex flex-col justify-start items-center">
        <Link 
        href="/"
        >
        <Image src="https://i.postimg.cc/vZ9v2vCG/wonly-music_(2).png" alt="logo" width={200} height={200} className="w-40 h-40" />
        </Link>
        <h2 className="text-8xl font-serif font-extrabold my-10">
          API Musica Gratis 
        </h2>
      <Recursos />
    </div>
  );
}
