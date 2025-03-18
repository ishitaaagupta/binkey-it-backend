import mongoose from "mongoose";

const EditorSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    title: { type: String, default: "" }, // Change 'quote' to 'title'
  },
  { timestamps: true }
);

export default mongoose.model("Editor", EditorSchema);
