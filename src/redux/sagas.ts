import {put, takeEvery, call} from 'redux-saga/effects';
import {fetchWeatherSuccess} from './action';
import {FETCH_REQUEST, ResponseGenerator} from './types';
import axios from 'axios';
const APIkey = '776943d88ee5cd6aa359633fb10cbc96';
const lat = 50.91173;
const lon = 34.80482;
async function fetchWeatherFromApi() {
  try {
    const {data} = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}&lang={uk}&units=metric`,
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

function* fetchWeatherWorker() {
  try {
    const data: ResponseGenerator = yield call(fetchWeatherFromApi);
    yield put(fetchWeatherSuccess(data));
  } catch (error) {
    console.error(error);
  }
}

export function* weatherWatcher() {
  yield takeEvery(FETCH_REQUEST, fetchWeatherWorker);
}
