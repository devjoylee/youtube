import moment from 'moment';
import numeral from 'numeral';

export const getVideoInfo = (video) => {
  const videoInfo = {};

  if (video.snippet) {
    const { title, channelTitle, publishedAt, thumbnails, description, channelId } = video.snippet;

    videoInfo.title = title;
    videoInfo.channelTitle = channelTitle;
    videoInfo.description = description;
    videoInfo.channelId = channelId;
    videoInfo.publishedDay = moment(publishedAt).fromNow();
    videoInfo.thumbnail = thumbnails.medium.url;
  }

  if (video.statistics) {
    const { viewCount, likeCount, dislikeCount } = video.statistics;

    videoInfo.views = numeral(viewCount).format('0.a').toLocaleUpperCase();
    videoInfo.likes = numeral(likeCount).format('0.a').toLocaleUpperCase();
    videoInfo.dislikes = numeral(dislikeCount).format('0.a').toLocaleUpperCase();
  }

  return videoInfo;
};
