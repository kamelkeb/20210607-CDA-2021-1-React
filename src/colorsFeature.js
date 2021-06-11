import React, { useReducer } from "react";

const getSafeColorChannel = (int) => {
  return int > 255 ? 255 : int < 0 ? 0 : int;
};

const channelToAction = {
  0: "affect_red",
  1: "affect_green",
  2: "affect_blue",
};
const initialColorState = [0, 0, 0];

const colorReducer = (state, action) => {
  const newState = [...state];

  switch (action.type) {
    case "affect_red":
      newState[0] = getSafeColorChannel(newState[0] + action.payload);
      return newState;
    case "affect_green":
      newState[1] = getSafeColorChannel(newState[1] + action.payload);
      return newState;
    case "affect_blue":
      newState[2] = getSafeColorChannel(newState[2] + action.payload);
      return newState;
    case "assombrir":
      return state.map((c) => getSafeColorChannel(c + action.payload));

    default:
      return state;
  }
};

export const useColors = () => {
  const [colors, dispatch] = useReducer(colorReducer, initialColorState);

  const affectSpecficColor = (channel, delta) =>
    dispatch({
      type: channelToAction[channel],
      payload: delta,
    });

  const assombrirCouleur = (delta) =>
    dispatch({
      type: "assombrir",
      payload: delta,
    });

  return [colors, affectSpecficColor, assombrirCouleur];
};
