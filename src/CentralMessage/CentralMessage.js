import React from 'react';

// API CONTEXT

const CentralMessage = ({message, pseudo}) => {
    return <div>{message}{pseudo}</div>;
}

export default CentralMessage;