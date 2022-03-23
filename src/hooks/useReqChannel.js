import { useEffect, useState } from 'react';
import { getData } from 'utils/getData';
import numeral from 'numeral';

export const useReqChannel = (channelId) => {
  const [channelInfo, setChannelInfo] = useState({
    channelIcon: '',
    subscribers: 0,
    videoCount: 0,
  });

  useEffect(() => {
    const get_channel_info = async () => {
      const {
        data: { items },
      } = await getData('/channels', {
        params: {
          part: 'snippet,statistics',
          id: channelId,
        },
      });

      setChannelInfo({
        channelIcon: items[0].snippet.thumbnails.default.url,
        videoCount: items[0].statistics.videoCount,
        subscribers: numeral(items[0].statistics.subscriberCount)
          .format('0.a')
          .toLocaleUpperCase(),
      });
    };
    get_channel_info();
  }, [channelId]);

  return channelInfo;
};
