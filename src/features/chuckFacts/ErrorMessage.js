import React from 'react';

export default ({ message, status }) => {
  return (
    <div>
      <h3>{status}</h3>
      <p>{message}</p>
    </div>
  );
};
