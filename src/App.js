import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
