import React from 'react';
import Fact from './Fact';

export default ({ facts }) => {
  if (!facts || !facts.length) {
    return null;
  }

  return facts.map(({ id, value }) => <Fact key={id} text={value} />);
};
