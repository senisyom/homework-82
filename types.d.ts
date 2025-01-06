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
export interface ITrack {
  _id: ObjectId;
  name: string;
  album: ObjectId;
  duration: string;
}
export type TrackMutation = Omit<ITrack, "_id">; 


export interface AlbumMutation {
  artist: ObjectId;
  date: string;
  image: string | null;
}
