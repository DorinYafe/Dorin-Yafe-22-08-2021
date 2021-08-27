import { TEL_AVIV_LOCATION_KEY } from '../../config/weatherConstants';
import { 
  SET_CURRENT_LOCATION_KEY, SET_ERROR, SET_FIVE_DAYS_FORECAST, SET_LOADING, SET_WEATHER
} from '../actions/weatherTypes';

const weatherState = {
  currentCity: null,
  fiveDaysForecast:  [],
  currentLocationKey: TEL_AVIV_LOCATION_KEY,
  loading: true,
  error: null
};

const weatherReducer = (state = weatherState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_LOCATION_KEY:
      return {
        ...state,
        currentLocationKey: payload
      };
    case SET_FIVE_DAYS_FORECAST:
      return {
        ...state,
        fiveDaysForecast: payload
      };
    case SET_WEATHER:
      return {
        ...state,
        currentCity: payload
      };
    case SET_LOADING: 
      return {
        ...state,
        loading: payload
      };
    case SET_ERROR: 
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  };
};

export default weatherReducer;