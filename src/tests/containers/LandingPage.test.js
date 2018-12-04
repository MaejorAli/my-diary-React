import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { LandingPage } from '../../containers/LandingPage';

let wrapped;

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

LandingPage.handleSubmit = jest.fn();


wrapped = shallow(<LandingPage {...props} />);

describe('Profile container', () => {
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
      wrapped.find('input').at(2).simulate('change', { target: { value: 'bar' } });
      wrapped.find('input').at(3).simulate('change', { target: { value: 'cool' } });
      wrapped.find('input').at(4).simulate('change', { target: { value: 'aid' } });
    });

    it('', () => {
      expect(wrapped.find('input').first().prop('value')).toEqual('gu');
      expect(wrapped.find('input').at(1).prop('value')).toEqual('foo');
      expect(wrapped.find('input').at(2).prop('value')).toEqual('bar');
      expect(wrapped.find('input').at(3).prop('value')).toEqual('cool');
      expect(wrapped.find('input').at(4).prop('value')).toEqual('aid');
    });
    describe('', () => {
      it('', () => {
        wrapped.find('input').first().simulate('change', { target: { value: '' } });
        const submitButton = wrapped.find('#enter-signup');

        const mockedEvent = {
          preventDefault: jest.fn(),
        };

        submitButton.simulate('click', mockedEvent);
      });
      it('', () => {
        wrapped.find('input').at(1).simulate('change', { target: { value: '' } });
        const submitButton = wrapped.find('#enter-signup');

        const mockedEvent = {
          preventDefault: jest.fn(),
        };

        submitButton.simulate('click', mockedEvent);
      });
      it('', () => {
        wrapped.find('input').at(2).simulate('change', { target: { value: '' } });
        const submitButton = wrapped.find('#enter-signup');

        const mockedEvent = {
          preventDefault: jest.fn(),
        };

        submitButton.simulate('click', mockedEvent);
      });
      it('', () => {
        wrapped.find('input').at(3).simulate('change', { target: { value: '' } });
        const submitButton = wrapped.find('#enter-signup');

        const mockedEvent = {
          preventDefault: jest.fn(),
        };

        submitButton.simulate('click', mockedEvent);
      });
      it('', () => {
        wrapped.find('input').at(4).simulate('change', { target: { value: '' } });
        const submitButton = wrapped.find('#enter-signup');

        const mockedEvent = {
          preventDefault: jest.fn(),
        };

        submitButton.simulate('click', mockedEvent);
      });
      it('', () => {
        wrapped.find('input').at(4).simulate('change', { target: { value: 'password' } });
        const submitButton = wrapped.find('#enter-signup');

        const mockedEvent = {
          preventDefault: jest.fn(),
        };

        submitButton.simulate('click', mockedEvent);
      });

      it('', () => {
        wrapped.find('input').at(3).simulate('change', { target: { value: 'password' } });
        wrapped.find('input').at(4).simulate('change', { target: { value: 'password' } });
        const submitButton = wrapped.find('#enter-signup');

        const mockedEvent = {
          preventDefault: jest.fn(),
        };

        submitButton.simulate('click', mockedEvent);
        expect(props.history.push).toBeCalledWith('/user/profile');
      });
    });
  });
});
