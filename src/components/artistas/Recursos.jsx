"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Recursos = () => {
  const [artistas, setArtistas] = useState([]);

  useEffect(() => {
    const obtenerArtistas = async () => {
      const res = await fetch("/api/artistas");
      const data = await res.json();
      setArtistas(data);
    };
    obtenerArtistas();
  }, []);

  return (
    <div className="w-7/12 h-full mb-40">
      <div className="my-32">
        <h3 className="text-6xl">{`{JSON} Wonly - API Musica Gratis`}</h3>
        <p className="text-3xl my-5">
          Aqui encontrar Musicas de tus artistas favoritos en formato JSON
        </p>
        <div className="text-2xl">
          Desarrollador por:{" "}
          <Link href="https://one-second-cybersecurity.vercel.app">
            <span className="text-blue-500 text-2xl">
              One Second Cybersecurity
            </span>
          </Link>
        </div>
      </div>

      <div className="my-5">
        <h4 className="text-4xl font-semibold">Como usar la API?</h4>
        <p className="my-5">
          {`{JSON} Wonly - API Musica Gratis, tiene los siguientes artistas:`}
        </p>
        <pre className="bg-slate-800 py-5 px-10 rounded-lg">
          <code className="text-green-700">
            {`fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))`}
          </code>
        </pre>
      </div>

      <div>
        <h4 className="text-3xl font-semibold">Cuando usar la API?</h4>
        <p className="my-5">
          Puedes usar la API para obtener informacion de tus artistas favoritos
          y sus canciones en formato JSON para tu aplicacion web o movil.
        </p>
      </div>

      <div className="my-5">
        <h4 className="text-3xl font-semibold">Recursos</h4>
        <p className="my-2">
          {`{JSON} Wonly - API Musica Gratis, tiene los siguientes artistas:`}
        </p>

        <div className="flex flex-row justify-start items-center my-5">
          <Link href="/api/artistas">
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full w-max hover:bg-blue-500 hover:scale-[103%]">
              Obtener todos los artistas
            </div>
          </Link>
          <div className="mx-5 font-mono">
            {artistas.length} {artistas.length === 1 ? "Artista" : "Artistas"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recursos;
