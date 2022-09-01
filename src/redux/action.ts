import {FETCH_REQUEST, FETCH_SUCCESS} from './types';

type WeatherSuccessAction = {
  type: typeof FETCH_SUCCESS;
  payload: any;
};
type WeatherRequestAction = {
  type: typeof FETCH_REQUEST;
};
export const fetchWeatherRequest = (): WeatherRequestAction => ({
  type: FETCH_REQUEST,
});

export const fetchWeatherSuccess = (payload: any): WeatherSuccessAction => ({
  type: FETCH_SUCCESS,
  payload,
});
export type WeathersAction = WeatherSuccessAction | WeatherRequestAction;
