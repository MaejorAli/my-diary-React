import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Profile } from '../../containers/Profile';

const props = {
  signupUser: jest.fn(),
  signin: jest.fn(),
  PublishEntry: jest.fn(),
  getAllEntries: jest.fn(),
  GetEntries: jest.fn(),
  entries: [
    { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },
  ],
  entry: {},
  match: {
    params: { id: 1 },
  },
  deleteEntry: jest.fn(),
  deleteEntryReducer: jest.fn(),
  history: { push: jest.fn() },
  gottenProfile: {},
  getUserProfile: jest.fn(),
  status: 'true',
  statuss: 'true',
  updatedImage: 'true',
  entryLoading: '',
  updateImage: jest.fn(),
};

const wrapped = shallow(<Profile {...props} />);

describe('Profile container', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
  describe('Profile functionality', () => {
    it('should handle submit', () => {
      const submitButton = wrapped.find('#file-input');

      const mockedEvent = {
        target: {
          files: [
            {}, {},
          ],
        },
      };
      submitButton.simulate('change', mockedEvent);
    });
  });
});
