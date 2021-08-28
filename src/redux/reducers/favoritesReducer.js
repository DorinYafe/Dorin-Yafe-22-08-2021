import { filter, uniq } from 'ramda';
import { notEqualsTo } from '../../common/functions';
import { 
  ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, SET_CURRENT_FAVORITES, SET_ERROR, SET_LOADING
} from '../actions/favoriteTypes';

const favoritesState = {
  favorites: [],
  currentFavorites: [],
  loading: false,
  error: null
};

const favoritesReducer = (state = favoritesState, { type, payload }) => {
  switch (type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: uniq([...state.favorites, payload])
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: filter(notEqualsTo(payload))(state.favorites)
      };
    case SET_CURRENT_FAVORITES:
      return {
        ...state,
        currentFavorites: payload
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

export default favoritesReducer;