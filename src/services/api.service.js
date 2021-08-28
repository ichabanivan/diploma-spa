
// outsource dependencies
import qs from 'qs';
import axios from 'axios';

export const instanceJSON = axios.create({
  paramsSerializer,
  baseURL: 'https://api.jsonbin.io',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  }
});

instanceJSON.interceptors.response.use(prepareResponse);

// axios instance prepared for app
const instanceNEWS = axios.create({
  paramsSerializer,
  baseURL: 'https://newsapi.org/v2',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  }
});

//setup interceptors
instanceNEWS.interceptors.response.use(prepareResponse);

// prepare results. Solution to prepare data ... or not
function prepareResponse (response) {
  // NOTE solution to prepare data
  return response.data;
}

// override query serializer to define array Format as API needed
function paramsSerializer (options) {
  return qs.stringify(options, { arrayFormat: 'repeat', encode: false });
}

export default instanceNEWS;
