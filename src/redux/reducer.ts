import {FETCH_SUCCESS, FETCH_REQUEST} from './types';
import {WeathersAction} from './action';

export interface InitialStateType {
  weather: any;
  isLoading: boolean;
}
const initialState: InitialStateType = {
  weather: {
    city: {
      name: '',
    },
    list: [
      {
        dt: 0,
        dt_txt: 0,
        main: {temp: 0},
        weather: [
          {
            icon: '',
          },
        ],
      },
    ],
  },
  isLoading: false,
};
const weatherReducer = (
  state = initialState,
  action: WeathersAction,
): InitialStateType => {
  switch (action.type) {
    case FETCH_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        weather: action.payload,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default weatherReducer;
