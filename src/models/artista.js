import mongoose, { Schema } from "mongoose";

const artistaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  imagenPerfil: {
    type: String,
    required: true,
  },
  imagenFondo: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  biografia: {
    type: String,
    required: true,
  },
  Url: {
    type: String,
    required: true,
  },
  topCanciones: {
    type: Array,
    default: [
      {
        titulo: "",
        artista: [],
        id: "",
        Url: "",
        imagenPerfil: "",
        album: "",
        imagenAlbum: "",
        idArtista: "",
        idAlbum: "",
        duracion: "",
      },
    ],
  },
  musica: {
    type: Array,
    default: [
      {
        album: "",
        id: "",
        Url: "",
        imagenPerfil: "",
        year: "",
        color: "",
        detalles: [
          {
            titulo: "",
            artista: "",
            id: "",
            Url: "",
            album: "",
            idArtista: "",
            duracion: "",
          },
        ],
      },
    ],
  },
});

const Artista =
  mongoose.models.Artista || mongoose.model("Artista", artistaSchema);
export default Artista;
