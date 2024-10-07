import { NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongoDB";
import Artista from "@/models/artista";

export async function GET(request, { params }) {
  try {
    connectMongoDB();
    const ArtistaEncontrado = await Artista.findOne({ "id": params.id });
    if (!ArtistaEncontrado)
      return NextResponse.json(
        {
          message: "Artista no encontrado",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(ArtistaEncontrado);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 404,
    });
  }
}
