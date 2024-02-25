/* eslint-disable react/prop-types */
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
    setSearchQuery('');
  };

  return (
    <header className="">
      <form onSubmit={handleSubmit} className="">
        <button type="submit" className="">
          <span className="">Search</span>
        </button>

        <input
          value={searchQuery}
          onChange={handleInputChange}
          className=""
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images"
        />
      </form>
    </header>
  );
};

export default SearchBar;
