import { ObjectId } from "mongoose";
export interface ArtistMutation {
  name: string;
  description: string | null;
  image: string | null;
}
export interface AlbumMutation {
  name: string;
  artist: ObjectId;
  date: string;
  image: string | null;
}
