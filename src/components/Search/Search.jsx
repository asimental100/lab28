import React from 'react';
import PropTypes from 'prop-types';

function Search({ searchTerm, onChange }) {
  return (
    <div>
      <label htmlFor="search"></label>
      <input
        id="search"
        type="search"
        name="search"
        placeholder="Keyword"
        value={searchTerm}
        onChange={onChange}
      />
    </div>
  );
}

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Search;
