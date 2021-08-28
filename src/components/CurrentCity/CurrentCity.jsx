import { prop } from 'ramda';
import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import useStyles from './CurrentCity.style';
import { Typography } from '@material-ui/core';
import { weatherReducerPath } from '../../redux/utils';
import Unit from '../Unit/Unit';
import FavoritesAction from '../FavoritesAction/FavoritesAction';
import FavoriteAction from '../FavoritesAction/FavoritesAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Remove from '@material-ui/icons/Remove';
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../../redux/actions/favoriteTypes';



const CurrentCity = () => {

  const { container, title, chosenCity } = useStyles();


  const currentCity = useSelector(weatherReducerPath('currentCity'));
  const loading = useSelector(weatherReducerPath('loading'));
  const error = useSelector(weatherReducerPath('error'));


  const { Temperature, Link } = currentCity || {};

  if (error) {
    console.log('!!! ', error);
    return (
      <h1>Error</h1>
    );
  }

  return loading ? (
    <Loader />
  ) : (
    <div className={container}>
      <div className={chosenCity}>
        <Unit 
          temperature={Temperature} 
          link={Link}
        />
        <div>
          <FavoriteAction 
            link={Link} 
            Icon={FavoriteIcon} 
            type={ADD_TO_FAVORITES}
            title="Add to favorites"
          />
          <FavoriteAction 
            link={Link} 
            Icon={Remove} 
            type={REMOVE_FROM_FAVORITES}
            title="Remove from favorites"
          />
        </div>
      </div>
      <div>
        <Typography className={title}>
          {currentCity.WeatherText}
        </Typography>
      </div>
    </div>
  );
};

export default CurrentCity;