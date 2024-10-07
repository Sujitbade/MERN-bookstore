import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
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
  },
  {
    timestamps: true, // Correct option for timestamps
  }
);

// Export the model with the correct name
export const Book = mongoose.model("Book", bookSchema);
