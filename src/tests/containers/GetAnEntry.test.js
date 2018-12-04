import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { GetAnEntry } from '../../containers/GetAnEntry';

let wrapped;
const props = {
  signupUser: jest.fn(),
  signin: jest.fn(),
  PublishEntry: jest.fn(),
  getAllEntries: jest.fn(),
  GetEntries: jest.fn(),
  getAnEntry: jest.fn(),
  entries: [],
  entry: {
    id: 3,
  },
  match: {
    params: { id: 1 },
  },
  deleteEntry: jest.fn(),
  deleteEntryReducer: {
    success: false,
    error: false,
  },
  history: { push: jest.fn() },
  getEntry: jest.fn(),
};

describe('Get An Entry container', () => {
  beforeEach(() => {
    wrapped = shallow(<GetAnEntry {...props} />);
  });
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
    test('that the modify button goes to the correct route', () => {
      wrapped.find('button').first().simulate('click');
      expect(props.history.push).toBeCalledWith('/entries/update/3');
    });
    test('that the delete button, behaves as it should', () => {
      wrapped.find('#deleteButton').simulate('click');
      expect(props.deleteEntry).toBeCalled();
      wrapped.setProps({
        deleteEntryReducer: {
          success: true,
        },
        entry: {
          error: '',
        },
      });
    });
    test('that it behaves as it should', () => {
      wrapped.find('#deleteButton').simulate('click');
      expect(props.deleteEntry).toBeCalled();
      wrapped.setProps({
        deleteEntryReducer: {
          error: true,
        },
        entry: {
          error: '',
        },
      });
    });
  });
});
