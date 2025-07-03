import mongoose from "mongoose";
const snippetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    }
}, { timestamps: true });
const SNIPPETS = mongoose.model("Snippets", snippetSchema);
export default SNIPPETS;
