import React from "react";
import { useState } from "react";
function Compteur() {
  const [compteur, setCompteur] = useState(0);

  const incrementHandler = () => setCompteur((compteur) => compteur + 1);
  const decrementHandler = () => setCompteur((compteur) => compteur - 1);
  return (
    <>
      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
      <span>{compteur}</span>
    </>
  );
}

export default Compteur;
