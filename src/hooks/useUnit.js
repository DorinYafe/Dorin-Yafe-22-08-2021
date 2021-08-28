import { equals, ifElse, not, values } from 'ramda';
import React from 'react';

const useUnit = (init = 'celsius') => {
  const [value, setValue] = React.useState(init);

  const [ farentheit, celsius ] = ['farentheit', 'celsius'];

  const toggle = () => setValue(ifElse(
    equals(farentheit), 
    () => celsius, 
    () => farentheit
  ));

  const isFarenheit = equals(value, farentheit);
  const isCelsius = equals(value, celsius);

  return { toggle, value,  setValue, isFarenheit, isCelsius };
};

export default useUnit;