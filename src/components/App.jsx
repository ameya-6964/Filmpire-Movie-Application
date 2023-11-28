import React, { useRef } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Switch } from "react-router-dom";
import useStyles from "./styles";

//* ALl Component Imports
import { Actors, Navbar, Movies, Profile, MovieInformation } from "./index";
import useAlan from "./Alan";

const App = () => {
  const classes = useStyles();

  const alanBtnContainer = useRef();
  useAlan();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path={["/", "/approved"]}>
            <Movies />
          </Route>
          <Route path="/movie/:id">
            <MovieInformation />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          <Route path="/actors/:id">
            <Actors />
          </Route>
        </Switch>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
};

export default App;
