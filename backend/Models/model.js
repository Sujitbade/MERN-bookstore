import mongoose from "mongoose";
import { nanoid } from "nanoid";

const bookSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => nanoid(10),
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Export the model
export const Book = mongoose.model("Book", bookSchema);
