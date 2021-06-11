import "./App.css";
import ColorBox2 from "./ColorBox2/ColorBox2";
import ColorBox from "./ColorBox/ColorBox";
import Layout from "./Layout/Layout";
import Compteur from "./Compteur/Compteur";
import {
  containerClass,
  headerContent,
  menuContent,
  colorsChannel,
} from "./mockData";
import { useState } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

const Home = () => (
  <div>
    <h1>HOME</h1>
    <p>Veuillez vous authentifier</p>
  </div>
);

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className={containerClass}>
      <Switch>
        <Route path="/compteur" exact>
          <Layout menuContent={menuContent} headerContent={headerContent}>
            <Compteur></Compteur>
          </Layout>
        </Route>
        <Route path="/couleurs/2">
          {isLogged ? (
            <Layout menuContent={menuContent} headerContent={headerContent}>
              <ColorBox2 colorsChannel={colorsChannel} />
            </Layout>
          ) : (
            <Redirect to="/"></Redirect>
          )}
        </Route>
        <Route path="/couleurs">
          <Layout menuContent={menuContent} headerContent={headerContent}>
            <ColorBox colorsChannel={colorsChannel}></ColorBox>
          </Layout>
        </Route>
        <Route path="/">
          <Layout menuContent={menuContent} headerContent={headerContent}>
            <Home></Home>
          </Layout>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
