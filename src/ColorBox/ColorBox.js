import React, { useState } from "react";
import classes from "./ColorBox.module.css";

const ColorBox = ({ colorsChannel }) => {
  // Colors
  const [colors, setColors] = useState([0, 0, 0]);

  const [deltaInputBuffer, setDeltaInputBuffer] = useState(10);
  const [delta, setDelta] = useState(10);
  const [invalidDeltaInput, setInvalidDeltaInput] = useState(false);

  // aurait pu être écrite sous forme d'une fonction à deux
  // paramètres, ici c'est pour montrer la forme "curifiéée"
  const augmenterValeurChannel = (channel) => (delta) => (colors) => {
    const newColors = [...colors];

    const safeColorChannel =
      colors[channel] + delta > 255 ? 255 : colors[channel] + delta;

    newColors[channel] = safeColorChannel;
    return newColors;
  };

  const incrementColors = (channel) => {
    // attention, ici 'colorRiser(channel)' retourne une fonction ^^
    setColors(augmenterValeurChannel(channel)(delta));
  };

  // Version classique (non curifiée)
  const diminuerValeurChannel = (channel, colors, delta) => {
    const newColors = [...colors];
    const safeColorChannel =
      colors[channel] - delta < 0 ? 0 : colors[channel] - delta;
    newColors[channel] = safeColorChannel;
    return newColors;
  };
  const decrementColors = (channel) => {
    setColors((colors) => diminuerValeurChannel(channel, colors, delta));
  };

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
            <button onClick={() => incrementColors(item.channel)}>+</button>
            <button onClick={() => decrementColors(item.channel)}>-</button>
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

export default ColorBox;
