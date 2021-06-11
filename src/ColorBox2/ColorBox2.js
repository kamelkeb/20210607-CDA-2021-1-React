import React, { useState } from "react";
import classes from "./ColorBox.module.css";
import { useColors } from "../colorsFeature";

const ColorBox2 = ({ colorsChannel }) => {
  const [deltaInputBuffer, setDeltaInputBuffer] = useState(10);
  const [delta, setDelta] = useState(10);
  const [invalidDeltaInput, setInvalidDeltaInput] = useState(false);

  const [colors, affectSpecficColor] = useColors();

  const deltaInputHandler = () => {
    const value = deltaInputBuffer;

    if (isNaN(value)) {
      // La valeur saisie n'est pas valide
      setInvalidDeltaInput(true);
    } else {
      setInvalidDeltaInput(false);
      setDelta(Number(value));
    }
  };

  const invalidInputValue = invalidDeltaInput && (
    <p style={{ color: "red" }}>Veuillez saisir un nombre</p>
  );

  return (
    <div>
      {colorsChannel.map((item) => {
        return (
          <div>
            <span>{item.name.toUpperCase()}: </span>
            <button onClick={() => affectSpecficColor(item.channel, delta)}>
              +
            </button>
            <button onClick={() => affectSpecficColor(item.channel, -delta)}>
              -
            </button>
          </div>
        );
      })}
      <span>Veuillez saisir le pas d'incrément</span>
      <input
        value={deltaInputBuffer}
        onChange={(e) => setDeltaInputBuffer(e.target.value)}
        style={{ width: "120px", border: "1px solid black" }}
      ></input>
      <button onClick={deltaInputHandler}>Valider</button>
      <br />
      {invalidInputValue}

      <span>La valeur actuelle du delta est de : {delta}</span>
      <div>
        {colors[0]}, {colors[1]}, {colors[2]}
      </div>

      <div
        className={classes.ColorBox}
        style={{ background: `rgb(${colors})` }}
      ></div>
    </div>
  );
};

export default ColorBox2;
