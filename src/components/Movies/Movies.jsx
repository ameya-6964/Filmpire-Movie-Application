/* eslint-disable import/no-cycle */
import React, { useState } from "react";

import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "../../services/TMDB";
import { MovieList } from "..";

import Pagination from "../Pagination/Pagination";
import FeaturedMovie from "../FeaturedMovie/FeaturedMovie";

const Movies = () => {
  const [page, setPage] = useState(1);
  const lg = useMediaQuery((theme) => theme.breakpoints.only("lg"));
  const numberOfMovies = lg ? 17 : 17;
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No Movies That Match That Name.
          <br />
          Please Search For Something Else
        </Typography>
      </Box>
    );
  }
  if (error) return `Error Occured ${error}`;
  return (
    <div>
      <FeaturedMovie movie={data.results[0]} />
      <MovieList movies={data} numberOfMovies={numberOfMovies} excludeFirst />
      <Pagination
        currentPage={page}
        setPage={setPage}
        totalPages={data.total_pages}
      />
    </div>
  );
};

export default Movies;
