import { equals, not, replace, toUpper, pipe } from "ramda";

export const atIndex = (index, array) => {
  const result = (arr) => arr[index];
  return !array 
    ? (arr) => result(arr)
    : result(array);
};

export const toTitle = replace(/(^|\s)\S/g, toUpper);

export const notEqualsTo = (param1) =>  pipe(equals(param1), not);