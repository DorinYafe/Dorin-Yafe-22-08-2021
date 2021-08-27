import Home from '../components/Home/Home';
import Favorites from '../components/Favorites/Favorites';

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