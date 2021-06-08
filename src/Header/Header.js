// Ceci est un import par défaut à partir
// d'une librairie déjà installée
import React from "react";
// Ceci est un import de module CSS
import classes from "./Header.module.css";
import LeftIconGroup from "../LeftIconGroup/LeftIconGroup";
import CentralMessage from "../CentralMessage/CentralMessage";

// Une fonction qui retourne du JSX est un composant react
const Header = ({ message, pseudo, children }) => {
  return (
    <div className={classes.maDiv}>
      <LeftIconGroup></LeftIconGroup>
      <CentralMessage message={message} pseudo={pseudo}></CentralMessage>
      {children[1]}
    </div>
  );
};

// ceci est un export par défaut (l'autre type d'export s'appelle
// export nommé)
export default Header;
