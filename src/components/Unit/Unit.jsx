import { Button, Typography } from '@material-ui/core';
import { path, map, pipe, join, split } from 'ramda';
import React from 'react';
import { toTitle } from '../../common/functions';
import Match from '../../common/PatternMatching';
import useToggle from '../../hooks/useUnit';
import { extractCity } from '../../redux/utils';
import useStyles from './Unit.style';

const proccessCityName = pipe(extractCity, split('-'), map(toTitle), join('-'));

function Unit({ temperature, link }) {

  const { toggle, isCelsius } = useToggle();
  const { unitWrapper, cityTitle, container } = useStyles();

  const cityName = proccessCityName(link);

  const convertFarenheit = (value) => Math.floor(value) * 9 / 5 + 32;

  const getCelsius = () => Match(temperature)
    .when(path(['Metric', 'Value']), path(['Metric', 'Value']))
    .when(path(['Maximum','Value']), path(['Maximum', 'Value']))
    .orElse('');

  const getFarenheit = () => Match(temperature)
    .when(path(['Imperial', 'Value']), path(['Imperial', 'Value']))
    .when(path(['Maximum','Value']), pipe(path(['Maximum', 'Value']), convertFarenheit))
    .orElse('');

  const getSign = () => isCelsius ? '°C' : '°F';

  return (
    <span className={container}>
      <Typography className={cityTitle}>{cityName}</Typography>
      <div className={unitWrapper}>
        <Button onClick={toggle}>Toggle Unit</Button>
        <span>{ `${isCelsius ? getCelsius() : getFarenheit()}${getSign()}`}</span>
      </div>
    </span>
 
  );
}

export default Unit;
