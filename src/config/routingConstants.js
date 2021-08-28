import Home from '../pages/Home/Home';
import Favorites from '../pages/Favorites/Favorites';

const routeMapping = Object.freeze({
  home: {
    path: '/',
    exact: true,
    component: Home
  },
  favorites: {
    path: '/favorites',
    exact: true,
    component: Favorites
  }
});

export default routeMapping;