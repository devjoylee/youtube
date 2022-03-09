import axios from 'axios';

export const getData = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: {
    key: 'AIzaSyA-QsAnaeZ_EFaj3omY2KjelFsYdnW9Fjw',
  },
});
