// Ceci est un import par défaut à partir
// d'une librairie déjà installée
import React from "react";
// Ceci est un import de module CSS
import classes from "./Header.module.css";

// Une fonction qui retourne du JSX est un composant react
const Header = () => {
  return <div className={classes.maDiv}>Mon Header</div>;
};

// ceci est un export par défaut (l'autre type d'export s'appelle
// export nommé)
export default Header;
