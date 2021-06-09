import "./App.css";
import React, { useState } from "react";
import Layout from "./Layout/Layout";

import {
  containerClass as mockContainerClass,
  menuContent as mockMenuContent,
  headerContent as mockHeaderContent,
} from "./mockData";

import { containerClass, menuContent, headerContent } from "./data";

function App() {
  const effectiveContainerClass = containerClass || mockContainerClass;
  const effectiveCenuContent = menuContent || mockMenuContent;
  const effectHeaderContent = headerContent || mockHeaderContent;

  const [compteur, setCompteur] = useState(0);
  const plusClickedHandler = () => {
    setCompteur(compteur + 1);
  };

  const moinsClickedHandler = () => {
    setCompteur(compteur - 1);
  };
  return (
    <div className={effectiveContainerClass}>
      <Layout
        menuContent={effectiveCenuContent}
        headerContent={{ ...effectHeaderContent, compteur }}
      >
        <div>
          <button onClick={plusClickedHandler}>Plus</button>
          <button onClick={moinsClickedHandler}>Moins</button>
          <span>La valeur du compteur: {compteur} </span>
        </div>
      </Layout>
    </div>
  );
}

export default App;
