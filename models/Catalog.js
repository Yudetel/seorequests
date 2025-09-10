import mongoose from "mongoose";

const catalogSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  publicists: [{ type: Object }],
  description: { type: String },
});

const Catalog =
  mongoose.models.Catalog || mongoose.model("Catalog", catalogSchema);

export default Catalog;
