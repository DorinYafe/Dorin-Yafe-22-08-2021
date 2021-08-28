import { Card, CardContent } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from '../../components/FiveDaysForecasts/FiveDaysForecasts.style';
import Loader from '../../components/Loader/Loader';
import Unit from '../../components/Unit/Unit';
import useFavoritesApi from '../../hooks/useFavoritesApi';
import { favoritesReducerPath } from '../../redux/utils';

const Favorites = () => {

  useFavoritesApi();
  const currentFavorites = useSelector(favoritesReducerPath('currentFavorites'));
  const loading = useSelector(favoritesReducerPath('loading'));
  const error = useSelector(favoritesReducerPath('error'));

  const { container } = useStyles();

  if (error) {
    console.log('!!!!! ', error);
    return (
      <h1>Error...</h1>
    );
  }
  
  return loading ? (
    <Loader />
  ) : (
    <div className={container}>
      {
        currentFavorites.map(({ Link, Temperature}) => (
          <Card>
            <CardContent>
              <Unit link={Link} temperature={Temperature} />
            </CardContent>
          </Card>
        ))
      }
    </div>
  );
};

export default Favorites;