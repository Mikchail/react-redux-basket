import {apiService as api} from '../../api';
import {reducer, ActionCreator, Operations,ActionType} from './reducer';
import {goods} from '../../../mocks/goods';

// describe(`Operations Data`, () => {
//   it(`Should make a correct API call to get request`, () => {
//     const goodsLoader = Operations.loadFilms();
//     const dispatch = jest.fn();
//     return goodsLoader(dispatch, () => {}, api)
//       .get().then(() => {
//         expect(dispatch).toHaveBeenCalledWith({
//           type: ActionType.LOAD_GOODS,
//           payload: [{fake: true}],
//         });
//       });
//   });
// });

describe(`Reducer data`, () => {
  it(`Should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      goods: [],
      isLoading: true,
      isLoadingError: false,
      basket: [],
      totalCount: 0,
    });
  });
  it(`Should update goods by load`, () => {
    expect(
      reducer(
        {
          goods: [],
        },
        {
          type: ActionType.LOAD_GOODS,
          payload: goods,
        }
      )
    ).toEqual({
      goods,
    });
  });
  it(`Should update goods load status`, () => {
    expect(
      reducer(
        {
          isLoading: true,
        },
        {
          type: ActionType.IS_LOADING_GOODS,
          payload: false,
        }
      )
    ).toEqual({
      isLoading: false,
    });
  });
  it(`Should update goods error status`, () => {
    expect(
      reducer(
        {
          isLoadingError: false,
        },
        {
          type: ActionType.LOAD_GOODS_ERROR,
          payload: true,
        }
      )
    ).toEqual({
      isLoadingError: true,
    });
  });
});
