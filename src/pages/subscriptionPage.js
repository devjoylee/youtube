import { Container } from 'components';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMySubscriptions } from 'redux/actions';

export const SubscriptionPage = () => {
  const dispatch = useDispatch();
  const { subscriptions } = useSelector((state) => state.subscriptionList);
  console.log(subscriptions);

  useEffect(() => {
    dispatch(getMySubscriptions());
  }, [dispatch]);

  return (
    <Container>
      {/* {subscriptions.map((subscription, i) => {
      })} */}
    </Container>
  );
};
