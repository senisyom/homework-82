import express from "express";
import mongoose from "mongoose";
import { ITrack, TrackMutation } from "../types";
import Track from "../models/Track";
const tracksRouter = express.Router();

tracksRouter.get("/tracks", async (req, res, next): Promise<any> => {
  
  try {
    const trackId = req.query.track_id as string;
    if (trackId) {
      const track = await Track.findById(trackId);
      return res.send(track);
    } else {
      const tracks = await Track.find();
      return res.send(tracks);
    }
  } catch (error) {
    next(error);
  }
});

tracksRouter.post("/tracks", async (req, res, next): Promise<any> => {
  try {
    const tracksMutation: TrackMutation = {
      name: req.body.name,
      duration: req.body.duration,
      album: req.body.album,
    };
    const track = new Track(tracksMutation);
    await track.save();
    return res.send(track);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).send(error);
    }
    return next(error);
  }
});
export default tracksRouter;
