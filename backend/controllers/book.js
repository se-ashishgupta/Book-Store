import { Book } from "../models/book.js";
import ErrorHandler from "../middlewares/error.js";

export const newBook = async (req, res, next) => {
  try {
    const { title, author } = req.body;
    const book = await Book.create({
      title,
      author,
      user: req.user,
    });

    res.status(201).json({
      success: true,
      message: "Task Added successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getMyBook = async (req, res, next) => {
  try {
    const userid = req.user._id;
    const book = await Book.find({ user: userid });

    res.status(200).json({
      success: true,
      book,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) return next(new ErrorHandler("Invalid Book Id", 404));

    await book.deleteOne();
    res.status(200).json({
      success: true,
      message: "Book deleted",
    });
  } catch (error) {
    next(error);
  }
};
