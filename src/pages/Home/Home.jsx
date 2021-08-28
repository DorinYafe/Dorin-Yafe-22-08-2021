import React from 'react';
import Search from '../../components/Search/Search';
import CurrentCity from '../../components/CurrentCity/CurrentCity';
import useStyles from './Home.style';
import FiveDaysForecasts from '../../components/FiveDaysForecasts/FiveDaysForecasts';

const Home = () => {

  const { searchBar } = useStyles();

  return (
    <>
      <div className={searchBar}>
        <Search />
      </div>
      <CurrentCity />
      <FiveDaysForecasts />
    </>
  );
};

export default Home;