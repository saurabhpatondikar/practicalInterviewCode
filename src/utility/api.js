import axios from 'axios';
import Config from './config';

const instance = axios.create({
  baseURL: Config.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export function httpPost(url, data) {
  // alert(url)
  return instance.post(url,data);
}
