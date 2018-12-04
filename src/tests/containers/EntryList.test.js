import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EntryList from '../../containers/EntryList';


const setup = (overrideProps) => {
  const props = {
    signupUser: jest.fn(),
    signin: jest.fn(),
    PublishEntry: jest.fn(),
    getAllEntries: jest.fn(),
    GetEntries: jest.fn(),
    entries: [],
    entry: {},
    match: {
      params: { id: 1 },
    },
    deleteEntry: jest.fn(),
    deleteEntryReducer: jest.fn(),
    history: { push: jest.fn() },
  };
  const wrapped = shallow(<EntryList {...props} {...overrideProps} />);
  return { props, wrapped };
};

describe('Get An Entry container', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const { wrapped } = setup();
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
