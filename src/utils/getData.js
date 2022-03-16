import axios from 'axios';

export const getData = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: {
    key: 'AIzaSyB2OYF4YmThZ3id4IZQ1q2_CEAtp6Wpoo4',
  },
});
