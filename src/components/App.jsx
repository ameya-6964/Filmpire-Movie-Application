import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Switch } from "react-router-dom";
import useStyles from "./styles";

//* ALl Component Imports
import { Actors, Navbar, Movies, Profile, MovieInformation } from "./index";

const App = () => {
  const classes = useStyles();
  console.log(classes);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/">
            <MovieInformation />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          <Route path="/movie/:id">
            <Movies />
          </Route>
          <Route path="/actor/:id">
            <Actors />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
