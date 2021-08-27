import React from 'react';
import { head, path, pipe, prop, values } from 'ramda';
import { useDispatch, useSelector } from 'react-redux';
import { getFiveDaysForecast, getWeather, urls  } from '../dataSource/dataSource';
import { 
  SET_ERROR, SET_FIVE_DAYS_FORECAST, SET_LOADING, SET_WEATHER
} from '../redux/actions/weatherTypes';
import axios from 'axios';

const useWeatherApi = () => {
    
  const dispatch = useDispatch();
  const currentLocationKey = useSelector(path(['weatherReducer', 'currentLocationKey']));

  const URLS = values(urls(currentLocationKey));

  React.useEffect(() => {
    if (currentLocationKey) {
      Promise.all(URLS.map(async (url) => await axios.get(url)
        .then(prop('data'))))
        .then(([[currentCity], { DailyForecasts }]) => {
          debugger;
          dispatch({ type: SET_LOADING, payload: false });
          dispatch({ type: SET_WEATHER, payload: currentCity });
          dispatch({ type: SET_FIVE_DAYS_FORECAST, payload: DailyForecasts });

        }).catch((error) => {
          debugger;
          dispatch({ type: SET_ERROR, payload: error });
        });
    }

  }, [currentLocationKey]);
};

export default useWeatherApi;