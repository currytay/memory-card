import React from "react";
import { Route } from "react-router-dom";
import Landing from "./Landing";
import Game from "./Game";

// component to handle routing between pages
const Routes = () => {
  return (
    <>
      {/* Landing page */}
      <Route exact path="/" component={Landing} />
      {/* Play page */}
      <Route exact path="/play" render={(props) => <Game {...props} />} />
    </>
  );
};

export default Routes;
