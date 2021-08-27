import axios from 'axios';
import { BASE_URL, API_KEY6 } from '../config/weatherConstants';
import { pipe, prop, head, path } from 'ramda';

export const initialState = {
  data: null,
  loading: true, 
  error: null
};

export const urls = (locationKey) => Object.freeze({
  weather: `${BASE_URL}currentconditions/v1/${locationKey}?apikey=${API_KEY6}&language=en-us`,
  fiveDaysForecast: `${BASE_URL}forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY6}&language=en-us`
});

export const getWeather = async (locationKey) => await axios.get(
  `${BASE_URL}currentconditions/v1/${locationKey}?apikey=${API_KEY6}&language=en-us`
).then(pipe(prop('data'), head));

export const getFiveDaysForecast = async (locationKey) => await axios.get(
  `${BASE_URL}forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY6}&language=en-us`
).then(path(['data', 'DailyForecasts']));