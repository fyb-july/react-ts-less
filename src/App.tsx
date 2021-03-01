import React from 'react';
import logo from './assets/logo.png';
import { BrowserRouter, Switch } from 'react-router-dom';
import {PrivateRoute} from "./routes/index"
import styles from "./App.module.less"
import Home from "./home/home"
import Header from "./Components/Header"
import Braft from "./Braft/Braft"
function App() {
  return (
    <BrowserRouter>
    <Header/>
        <div className={styles.App}>
            <h3>
                欢迎来到我的主页
            </h3>
            <img src={logo} className={styles.fangLogo} alt="logo" />
        </div>
      <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/braft" component={Braft} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
