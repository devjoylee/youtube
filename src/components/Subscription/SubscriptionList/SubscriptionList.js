import React from 'react';
import { ItemTemplate } from 'components';
import './_subscriptionList.scss';

export const SubscriptionList = ({ subscriptions }) => {
  return (
    <ul className='subscription_list'>
      {subscriptions?.map((subscription, i) => (
        <ItemTemplate key={i} item={subscription} type='subscription' />
      ))}
    </ul>
  );
};
