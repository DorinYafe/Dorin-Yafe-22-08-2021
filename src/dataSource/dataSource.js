import axios from 'axios';
import { BASE_URL, API_KEY6, API_KEY5, API_KEY4, API_KEY2 } from '../config/weatherConstants';
import { pipe, prop, head, path, map, pick } from 'ramda';

export const urls = (locationKey) => Object.freeze({
  weather: `${BASE_URL}currentconditions/v1/${locationKey}?apikey=${API_KEY2}&language=en-us`,
  fiveDaysForecast: `${BASE_URL}forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY2}&language=en-us`
});

export const getWeather = async (locationKey) => await axios.get(
  `${BASE_URL}currentconditions/v1/${locationKey}?apikey=${API_KEY2}&language=en-us`
).then(pipe(prop('data'), head));

export const getFiveDaysForecast = async (locationKey) => await axios.get(
  `${BASE_URL}forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY2}&language=en-us`
).then(path(['data', 'DailyForecasts']));

export const autoCompleteSearch = async (locationName) => axios.get(
  `${BASE_URL}locations/v1/cities/autocomplete?apikey=${API_KEY2}&q=${locationName}&language=en-us`)
  .then(pipe(prop('data'), map(pick(['Key', 'LocalizedName']))));
