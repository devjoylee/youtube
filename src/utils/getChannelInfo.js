import numeral from 'numeral';

export const getChannelInfo = (channel) => {
  const channelInfo = {};

  if (channel.snippet) {
    const { title, thumbnails, description } = channel.snippet;

    channelInfo.title = title;
    channelInfo.description = description;
    channelInfo.thumbnail = thumbnails.medium.url;
  }

  if (channel.statistics) {
    const { subscriberCount } = channel.statistics;

    channelInfo.subscribers = numeral(subscriberCount).format('0.a').toLocaleUpperCase();
  }

  return channelInfo;
};
