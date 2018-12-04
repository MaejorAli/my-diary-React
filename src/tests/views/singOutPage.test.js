import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SignoutPage from '../../views/SignOutPage';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<SignoutPage />);
});


describe('Update Entry Page UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
