import express from "express";
import Artist from "../models/Artist";
import mongoose from "mongoose";
import { imagesUpload } from "../multer";
import { ArtistMutation } from "../types";
const artistRouter = express.Router();

artistRouter.get("/artists", async (req, res, next): Promise<any> => {
  try {
    const artists = await Artist.find();
    return res.send(artists);
  } catch (error) {
    next(error);
  }
});
artistRouter.post(
  "/artists",
  imagesUpload.single("image"),
  async (req, res, next): Promise<any> => {
    try {
      const artistMutation: ArtistMutation = {
        name: req.body.name,
        description: req.body.description ? req.body.description : null,
        image: req.file ? req.file.filename : null,
      };
      const artist = new Artist(artistMutation);
      await artist.save();
      return res.send(artist);
    } catch (error) {
      if (error instanceof mongoose.Error.ValidationError) {
        return res.status(400).send(error);
      }
      return next(error);
    }
  }
);
export default artistRouter;
