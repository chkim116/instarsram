import React from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
function App() {
  return (
    <Switch>
      <Route path="/" exact={true} component={Login} />
      <Route path="/home" component={Home} />
    </Switch>
  );
}

export default App;
