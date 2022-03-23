import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMySubscriptions } from 'redux/actions';
import { Container, SubscriptionList } from 'components';

export const SubscriptionPage = () => {
  const dispatch = useDispatch();
  const { subscriptions } = useSelector((state) => state.subscriptionList);

  useEffect(() => {
    dispatch(getMySubscriptions());
  }, [dispatch]);

  return (
    <Container className='subscr_page'>
      <SubscriptionList subscriptions={subscriptions} />
    </Container>
  );
};
