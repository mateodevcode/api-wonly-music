import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongoDB";
import Artista from "@/models/artista";


export async function GET(req, res) {
  await connectMongoDB();
  const Artistas = await Artista.find({});
  return NextResponse.json(Artistas);
}

export async function POST(request) {
  const {
    nombre,
    id,
    imagenPerfil,
    imagenFondo,
    color,
    biografia,
    Url,
    topCanciones,
    musica,
  } = await request.json();
  await connectMongoDB();
  await Artista.create({
    nombre,
    id,
    imagenPerfil,
    imagenFondo,
    color,
    biografia,
    Url,
    topCanciones,
    musica,
  });
  return NextResponse.json({ message: "Artista creado" }, { status: 201 });
}
