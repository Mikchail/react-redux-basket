import React from 'react';
import renderer from 'react-test-renderer'
import Card from './card';
import {goods} from '../../../mocks/goods';


const good = goods[1];

describe(`Test componet Card Snapshot`, () => {

  it(`should be Card`, () => {
    const tree = renderer.create(
      <Card good={good} addToBasket={()=>{}} hasInBasket={false} />
    ).toJSON();
   expect(tree).toMatchSnapshot();
  });
});