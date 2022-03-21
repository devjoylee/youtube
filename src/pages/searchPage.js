import { Container } from 'components';
import React from 'react';
import { useParams } from 'react-router-dom';

export const SearchPage = () => {
  const { query } = useParams();

  return (
    <Container className='search_page'>
      <h1>Search {query}...</h1>
    </Container>
  );
};
