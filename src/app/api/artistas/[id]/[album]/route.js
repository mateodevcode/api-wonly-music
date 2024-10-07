import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongoDB";
import Artista from "@/models/artista";

export async function GET(request, { params }) {
  try {
    connectMongoDB();
    const ArtistaEncontrado = await Artista.findOne({ id: params.id });
    const Albumes = await ArtistaEncontrado.musica.map((album) => album);
    const Album = await Albumes.find((album) => album.id === params.album);

    if (!Album)
      return NextResponse.json(
        {
          message: "Album no encontrado",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(Album);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 404,
    });
  }
}
