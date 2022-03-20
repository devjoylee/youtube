import { useEffect, useState } from 'react';
import { getData } from 'utils/getData';

export const useReqChannel = (channelId) => {
  const [channelIcon, setChannelIcon] = useState(null);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await getData('/channels', {
        params: {
          part: 'snippet',
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
  }, [channelId]);

  return { channelIcon };
};
