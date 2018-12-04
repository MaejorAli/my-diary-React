import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SignOut } from '../../containers/Signout';

const setup = (overrideProps) => {
  const props = {
    signOutUser: jest.fn(),
  };
  const wrapped = shallow(<SignOut {...props} {...overrideProps} />);
  return { props, wrapped };
};

describe('Sign out container', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const { wrapped } = setup();
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
