import React from 'react';
import renderer from 'react-test-renderer'
import Basket from './basket';
import {basket} from '../../../mocks/goods';


// const good = goods[1];

describe(`Test componet Basket Snapshot`, () => {

  it(`should be empty Basket `, () => {
    const tree = renderer.create(
      <Basket basket={[]} />
    ).toJSON();
   expect(tree).toMatchSnapshot();
  });
  it(`should be with goods Basket `, () => {
    const tree = renderer.create(
      <Basket basket={basket} />
    ).toJSON();
   expect(tree).toMatchSnapshot();
  });
});