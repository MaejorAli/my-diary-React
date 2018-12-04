import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Signin } from '../../containers/Signin';


const props = {
  errorMessage: 'true',
  signupUser: jest.fn(),
  signin: jest.fn(),
  signup: (a, callback) => {
    callback();
  },
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
  gottenProfile: {},
  getUserProfile: jest.fn(),
};
const wrapped = shallow(<Signin {...props} />);

describe('Sign in container', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
  describe('', () => {
    beforeEach(() => {
      wrapped.find('input').first().simulate('change', { target: { value: 'gu' } });
      wrapped.find('input').at(1).simulate('change', { target: { value: 'foo' } });
    });

    it('', () => {
      expect(wrapped.find('input').first().prop('value')).toEqual('gu');
      expect(wrapped.find('input').at(1).prop('value')).toEqual('foo');
    });
    describe('', () => {
      it('', () => {
        wrapped.find('input').first().simulate('change', { target: { value: '' } });
        const submitButton = wrapped.find('#enter-signin');

        const mockedEvent = {
          preventDefault: jest.fn(),
        };

        submitButton.simulate('click', mockedEvent);
      });
      it('', () => {
        wrapped.find('input').at(1).simulate('change', { target: { value: '' } });
        const submitButton = wrapped.find('#enter-signin');

        const mockedEvent = {
          preventDefault: jest.fn(),
        };

        submitButton.simulate('click', mockedEvent);
      });
      it('', () => {
        wrapped.find('input').at(2).simulate('change', { target: { value: '' } });
        const submitButton = wrapped.find('#enter-signin');

        const mockedEvent = {
          preventDefault: jest.fn(),
        };

        submitButton.simulate('click', mockedEvent);
      });
      it('', () => {
        wrapped.find('input').at(1).simulate('change', { target: { value: 'password' } });
        wrapped.find('input').at(2).simulate('change', { target: { value: 'password' } });
        const submitButton = wrapped.find('#enter-signin');

        const mockedEvent = {
          preventDefault: jest.fn(),
        };

        submitButton.simulate('click', mockedEvent);
      });
    });
  });
});
