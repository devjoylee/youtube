import { Container } from 'components';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVideosByChannel } from 'redux/actions';

export const ChannelPage = () => {
  const dispatch = useDispatch();
  const { channelId } = useParams();
  const { videos } = useSelector((state) => state.channelVideo);
  console.log(videos);

  useEffect(() => {
    dispatch(getVideosByChannel(channelId));
  }, [dispatch, channelId]);

  return <Container>channel page</Container>;
};
