import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Dashboard from '../../components/Dashboard';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Dashboard />);
});


describe('Dashboard Component', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
