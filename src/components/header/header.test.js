import {render} from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header';
import {Router} from 'react-router-dom';
import history from '../../history';

describe(`Testing Header`, () => {
  it(`Should be with basket length`, () => {
    const tree = renderer
      .create(
        <Router history={history}>
          <Header basketLength={2} />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`Should be without basket length`, () => {
    const tree = renderer
      .create(
        <Router history={history}>
          <Header basketLength={0} />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
