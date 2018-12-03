import axios from 'axios';

const baseURL = `${process.env.REACT_APP_API_URL}/api/v1`;
export default class API {
  constructor(token) {
    this.updateToken(token);
  }

  updateToken(token) {
    this.api = axios.create({
      baseURL,
      headers: { 'x-access-token': token },
    });
  }
}
