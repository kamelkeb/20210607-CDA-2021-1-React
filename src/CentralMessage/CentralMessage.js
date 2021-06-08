import React from "react";

const CentralMessage = ({ message, pseudo }) => {
  return <span> {message + pseudo}</span>;
};

export default CentralMessage;
