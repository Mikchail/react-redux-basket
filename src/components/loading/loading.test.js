import React from 'react'
import renderer from 'react-test-renderer'
import Loading from './loading'


test(`Should be loading`,()=>{
  const tree = renderer.create(<Loading/>)
  expect(tree).toMatchSnapshot();
})