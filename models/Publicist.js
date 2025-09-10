import mongoose from "mongoose";

const publicistSchema = new mongoose.Schema({
  nikName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  real: {
    password: { type: String, required: true },
  },
});

const Publicist =
  mongoose.models.Publicist || mongoose.model("Publicist", publicistSchema);

export default Publicist;
