import { or, path, pipe, slice, split } from "ramda";
import { atIndex } from "../common/functions";

export const weatherReducerPath = (...args) => path(['weatherReducer', ...args]);
export const favoritesReducerPath = (...args) => path(['favoritesReducer', ...args]);

export const extractCity = pipe(split('/'), atIndex(5));
export const extractLocationKey = pipe(split('/'), atIndex(6));