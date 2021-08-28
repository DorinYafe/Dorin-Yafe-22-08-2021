import { Card, CardContent } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from '../../components/FiveDaysForecasts/FiveDaysForecasts.style';
import { weatherReducerPath } from '../../redux/utils';
import Loader from '../Loader/Loader';
import Unit from '../Unit/Unit';

const FiveDaysForecasts = () => {
  const fiveDays = useSelector(weatherReducerPath('fiveDaysForecasts'));
  const loading = useSelector(weatherReducerPath('loading'));

  const { container } = useStyles();

  return loading ? (
    <Loader />
  ) : (
    <div className={container}>
      { fiveDays.map(({ Link, Temperature}) => (
        <Card key={Link}>
          <CardContent>
            <Unit link={Link} temperature={Temperature} />
          </CardContent>
        </Card>
      )) }
    </div>
  );
};

export default FiveDaysForecasts;
