import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getChannelInfo, getVideosByChannel, subscriptionStatus } from 'redux/actions';
import { Container, ChannelHeader, ChannelPlayList } from 'components';

export const ChannelPage = () => {
  const dispatch = useDispatch();
  const { channelId } = useParams();

  useEffect(() => {
    dispatch(getVideosByChannel(channelId));
    dispatch(getChannelInfo(channelId));
    dispatch(subscriptionStatus(channelId));
  }, [dispatch, channelId]);

  return (
    <Container className='channel_page'>
      <ChannelHeader />
      <ChannelPlayList />
    </Container>
  );
};
