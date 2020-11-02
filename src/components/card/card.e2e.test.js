import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Card from './card';
import {goods} from '../../../mocks/goods';

Enzyme.configure({
  adapter: new Adapter(),
});
const good = goods[1];

describe(`Test componet Card`, () => {
  const addToBasket = jest.fn();

  it(`should be click`, () => {
    const wrapper = mount(
      <Card good={good} addToBasket={addToBasket} hasInBasket={false} />
    );
    const btn = wrapper.find('.card__button');
    btn.simulate('click');
    expect(addToBasket).toHaveBeenCalledTimes(1);
  });
});
