import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  anckor: { type: String, required: true },
  catalog: { type: String, required: true },
  questioner: { type: String, required: true },
  reporter: { type: String, required: true },
  description: { type: String },
});

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);

export default Task;
