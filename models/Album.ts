import mongoose, { Schema, Types } from "mongoose";
import Artist from "./Artist";

const AlbumSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: Types.ObjectId,
    required: true,
    validate: {
      validator: async (value: Types.ObjectId) => {
        const artist = await Artist.findById(value);
        return Boolean(artist);
      },
      message: "Artist does not exist!",
    },
  },
  releaseDate: {
    type: Date,
    required: true,
  },
});

const Album = mongoose.model("Album", AlbumSchema);
export default Album;
