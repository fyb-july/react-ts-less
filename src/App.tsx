import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import {PrivateRoute} from "./routes/index"

import Home from "./home"
import Header from "./components1/Header"
import Braft from "./braft1/Braft"
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/braft" component={Braft} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
