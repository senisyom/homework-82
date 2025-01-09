import mongoose, { Types } from "mongoose";
import Track from "./Track";
import User from "./User";
const Schema = mongoose.Schema;
const TrackHistorySchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    validate: {
      validator: async (value: Types.ObjectId) => {
        const user = await User.findById(value);
        return Boolean(user);
      },
      message: "User does not exist!",
    },
  },
  track: {
    type: Schema.Types.ObjectId,
    ref: "Track",
    required: true,
    validate: {
      validator: async (value: Types.ObjectId) => {
        const track = await Track.findById(value);
        return Boolean(track);
      },
      message: "Track does not exist!",
    },
  },
});
const TrackHistory = mongoose.model("TrackHistory", TrackHistorySchema);
export default TrackHistory;
