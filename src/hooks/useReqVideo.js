import { useEffect, useState } from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { getData } from 'utils/getData';

export const useReqVideo = (video) => {
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const videoDuration = moment.utc(seconds * 1000).format('mm:ss');
  const videoViews = numeral(views).format('0.a').toLocaleUpperCase();
  const videoId = video.id?.videoId || video.id;

  useEffect(() => {
    const get_video_info = async () => {
      const {
        data: { items },
      } = await getData('/videos', {
        params: {
          part: 'contentDetails,statistics',
          id: videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    get_video_info();
  }, [videoId]);

  return { videoViews, videoDuration, videoId };
};
