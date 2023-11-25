import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Switch } from "react-router-dom";

//* ALl Component Imports
import { Actors, Navbar, Movies, Profile, MovieInformation } from "./index";

const App = () => {
  const a = 10;
  return (
    <div>
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
