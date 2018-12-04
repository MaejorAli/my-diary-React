import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PublishEntryPage from '../../views/PublishEntryPage';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<PublishEntryPage />);
});


describe('Publish Entry Page UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
