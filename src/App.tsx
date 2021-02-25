import React from 'react';
import logo from './assets/logo.png';
import styles from "./App.module.less"
import Home from "./home/home"
function App() {
  return (
    <div className={styles.App}>
        <img src={logo} className={styles.fangLogo} alt="logo" />
        <p>
            欢迎来到我的主页
        </p>
        <Home/>
    </div>
  );
}
export default App;
