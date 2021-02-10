import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Routes from "./components/Routes";

const App = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Routes />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
