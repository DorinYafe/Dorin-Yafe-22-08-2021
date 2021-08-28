import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../dataSource/dataSource';
import { SET_CURRENT_FAVORITES, SET_ERROR, SET_LOADING } from '../redux/actions/favoriteTypes';
import { favoritesReducerPath } from '../redux/utils';

const useFavoritesApi = () => {
    
  const dispatch = useDispatch();
  const favorites = useSelector(favoritesReducerPath('favorites'));
  
  
  React.useEffect(() => {
    if (favorites) {
  
      Promise.all(favorites.map(getWeather))
        .then((results) => {
          dispatch({ type: SET_CURRENT_FAVORITES, payload: results });
          dispatch({ type: SET_LOADING, payload: false });
  
        }).catch((error) => {
          dispatch({ type: SET_ERROR, payload: error });
          dispatch({ type: SET_LOADING, payload: false });
        });
  
    }
  }, [favorites]);
};

export default useFavoritesApi;