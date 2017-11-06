import React from 'react';
import SearchInput from './SearchInputContainer';
import Facts from './FactsContainer';
import ErrorMessage from './ErrorMessageContainer';

export default () => {
  return (
    <div className="Facts-search">
      <SearchInput />
      <Facts />
      <ErrorMessage />
    </div>
  );
};
