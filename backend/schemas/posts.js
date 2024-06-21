import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    body: { type: String, required: true },
});
  
export default mongoose.model('TestPosts', postSchema);
