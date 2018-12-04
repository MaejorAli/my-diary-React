import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import GetEntriesPage from '../../views/GetEntriesPage';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<GetEntriesPage />);
});


describe('Get Entries Page UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
