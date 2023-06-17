import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchRequest } from '../redux/slices/searchSlice';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const dispatch = useDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>):any => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      dispatch(searchRequest(searchQuery));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleSearch} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
