import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import NameSpace from '../../store/name-space';
import {goods} from '../../../mocks/goods';
import Shop from './shop';

const mockStore = configureStore([]);

describe(`Testing shop component`, () => {
  const basker = []
  const store = mockStore({
    [NameSpace.DATA]: {
      goods: goods,
      isLoading: true,
      basket: [],
      totalCount: 0,
    },
  });

  it(`render shop with data`, () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Shop basket={basker} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
