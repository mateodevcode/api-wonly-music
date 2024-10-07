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

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const ArtistaActualizado = await Artista.findOneAndUpdate({"email":params.id}, data, {
      new: true,
    });
    return NextResponse.json(ArtistaActualizado);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function DELETE(request, { params }) {
  await connectMongoDB();
  try {
    const ArtistaEliminado = await Artista.findByIdAndDelete(params.id);
    if (!ArtistaEliminado) {
      return NextResponse.json({ message: "Artista no encontrado" }, { status: 404 });
    }
    return NextResponse.json({ message: "Artista eliminado con éxito" });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}