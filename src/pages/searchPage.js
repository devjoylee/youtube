import { Container } from 'components';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVideosBySearch } from 'redux/actions';

export const SearchPage = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.searchVideo);

  console.log(videos);
  useEffect(() => {
    dispatch(getVideosBySearch(query));
  }, [dispatch, query]);

  return (
    <Container className='search_page'>
      <h1>Search {query}...</h1>
    </Container>
  );
};
