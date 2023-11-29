import React from "react";
import { Typography, Grid, Grow, Tooltip, Rating } from "@mui/material";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const Movie = ({ movie, i }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={3} lg={3} xl={3} className={classes.movie}>
      <Grow in key={i} timeout={(i + 1) * 350}>
        <Link className={classes.links} to={`/movie/${movie.id}`}>
          {movie.poster_path ? (
            <img
              alt={movie.title}
              className={classes.image}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          ) : (
            <img
              alt={movie.title}
              className={classes.image}
              src="https://placehold.co/300x500"
            />
          )}
          <Typography className={classes.title} variant="h5">
            {movie.title}
          </Typography>
          <Tooltip
            disableTouchListener
            title={`${Math.round(movie.vote_average)} /10`}
          >
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
};

export default Movie;
