import express from "express";
import User from "../models/User";
import mongoose from "mongoose";

const userRouter = express.Router();

userRouter.post("/", async (req, res, next): Promise<any> => {
  try {
    const user = new User({
      username: req.body.username,
      password: req.body.password,
    });
    user.generateToken();
    await user.save();
    return res.send(user);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).send(error);
    }
    return next(error);
  }
});
export default userRouter;
