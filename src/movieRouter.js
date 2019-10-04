import express from "express";
<<<<<<< HEAD
import {
  getAllMovies,
  getCreateMovie,
  postCreateMovie,
  movieDetail,
  getEditMovie,
  postEditMovie,
  deleteMovie,
  searchMovie
} from "./movieController";
=======
>>>>>>> 6ff4079fba36adeb21849ee9a105b35312aa400b

const movieRouter = express.Router();

// Add your magic here!
// Index
movieRouter.get("/", getAllMovies);

// Search Movie
movieRouter.get("/search", searchMovie);

// Create Movie
movieRouter.get("/create", getCreateMovie);
movieRouter.post("/create", postCreateMovie);

// Edit Movie
movieRouter.get("/:id/edit", getEditMovie);
movieRouter.post("/:id/edit", postEditMovie);

// Delete Movie
movieRouter.get("/:id/delete", deleteMovie);

// Movie Detail
movieRouter.get("/:id", movieDetail);

export default movieRouter;
