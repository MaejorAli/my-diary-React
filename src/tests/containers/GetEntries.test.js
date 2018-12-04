import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { GetEntries } from '../../containers/GetEntries';


const setup = (overrideProps) => {
  const props = {
    signupUser: jest.fn(),
    signin: jest.fn(),
    PublishEntry: jest.fn,
    getAllEntries: jest.fn,
    GetEntries: jest.fn,
    entries: [],
    entry: {},
    history: { push: jest.fn() },

  };
  const wrapped = shallow(<GetEntries {...props} {...overrideProps} />);
  return { props, wrapped };
};

describe('Get Entries container', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const { wrapped } = setup();
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
