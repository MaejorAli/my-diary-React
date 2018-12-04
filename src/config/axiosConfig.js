import axios from 'axios';

const baseURL = 'https://secure-shelf-65268.herokuapp.com/api/v1';
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
