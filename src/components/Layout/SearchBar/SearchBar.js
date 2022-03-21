import React, { useState } from 'react';
import './_searchbar.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${keyword}`);
    setKeyword('');
  };

  return (
    <form onSubmit={handleSearch} className='search'>
      <input
        type='text'
        value={keyword}
        onChange={handleChange}
        placeholder='Search'
        className='search__input'
      />
      <button type='submit' className='search__btn'>
        <AiOutlineSearch size={22} />
      </button>
    </form>
  );
};
