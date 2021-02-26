import React from 'react';
import logo from './assets/logo.png';
import { BrowserRouter, Switch } from 'react-router-dom';
import {PrivateRoute} from "./routes/index"
import styles from "./App.module.less"
import Home from "./home/home"
function App() {
  return (
    <BrowserRouter>
        <div className={styles.App}>
            <img src={logo} className={styles.fangLogo} alt="logo" />
            <p>
                欢迎来到我的主页
            </p>
        </div>
      <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
   
  );
}
export default App;
