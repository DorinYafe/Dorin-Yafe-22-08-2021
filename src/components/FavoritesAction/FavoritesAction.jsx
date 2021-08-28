import React from 'react';
import useStyles from './FavoritesAction.style';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton, Typography } from '@material-ui/core';
import { extractLocationKey } from '../../redux/utils';
import { useDispatch } from 'react-redux';
import { ADD_TO_FAVORITES } from '../../redux/actions/favoriteTypes';

const FavoriteAction = ({ link, type, Icon, title }) => {

  const {favoritesWrapper} = useStyles();
  const dispatch = useDispatch();
  const locationKey = extractLocationKey(link);

  const handleClick = () =>  dispatch({ type, payload: locationKey});

  return (
    <div className={favoritesWrapper}>
      <IconButton onClick={handleClick}>
        <Icon />
      </IconButton>
      <Typography>
        { title }
      </Typography>
    </div>
  );
};

export default FavoriteAction;