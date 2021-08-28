import React from 'react';
import { prop, values } from 'ramda';
import { useDispatch, useSelector } from 'react-redux';
import { urls  } from '../dataSource/dataSource';
import { 
  SET_ERROR, SET_FIVE_DAYS_FORECAST, SET_LOADING, SET_WEATHER
} from '../redux/actions/weatherTypes';
import axios from 'axios';
import { weatherReducerPath } from '../redux/utils';

const useWeatherApi = () => {
    
  const dispatch = useDispatch();
  const currentLocationKey = useSelector(weatherReducerPath('currentLocationKey'));

  const URLS = values(urls(currentLocationKey));

  React.useEffect(() => {
    if (currentLocationKey) {
      Promise.all(URLS.map(async (url) => await axios.get(url)
        .then(prop('data'))))
        .then(([[currentCity], { DailyForecasts }]) => {
          dispatch({ type: SET_WEATHER, payload: currentCity });
          dispatch({ type: SET_FIVE_DAYS_FORECAST, payload: DailyForecasts });
          dispatch({ type: SET_LOADING, payload: false });

        }).catch((error) => {
          dispatch({ type: SET_ERROR, payload: error });
          dispatch({ type: SET_LOADING, payload: false });
        });

    }
  }, [currentLocationKey]);
};



export default useWeatherApi;