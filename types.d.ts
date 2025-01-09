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

export type TrackMutation = Omit<ITrack, "_id">;
export interface UserFields {
  username: string;
  password: string;
  token: string;
}
export interface UserMethods {
  checkPassword(password: string): Promise<boolean>;
  generateToken(): void;
}
export type UserModel = Model<UserFields, {}, UserMethods>;
