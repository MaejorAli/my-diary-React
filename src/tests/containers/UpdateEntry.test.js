import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import UpdateEntryComponent, { UpdateEntry } from '../../containers/UpdateEntry';
import Root from '../../root';

const props = {
  signupUser: jest.fn(),
  signin: jest.fn(),
  publishEntry: jest.fn(),
  error: false,
  history: { push: jest.fn() },
  status: {
    success: true,
  },
  publishedEnty: '',
  match: {
    params: { id: 1 },
  },
  getAnEntry: jest.fn(),
  updateEntry: jest.fn(),
};

const propsTrue = {
  signupUser: jest.fn(),
  signin: jest.fn(),
  publishEntry: jest.fn(),
  error: true,
  history: { push: jest.fn() },
  status: {
    success: true,
  },
  publishedEnty: '',
  match: {
    params: { id: 1 },
  },
  getAnEntry: jest.fn(),
  updateEntry: jest.fn(),
};
const wrapper = mount(
  <Root>
    <MemoryRouter initialEntries={[{ key: 'test' }]}>
      <UpdateEntryComponent {...propsTrue} />
    </MemoryRouter>
  </Root>,
);

const wrapped = shallow(<UpdateEntry {...props} />);


describe('Update Entry container', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
    });
  });
  describe('', () => {
    beforeEach(() => {
      wrapped.find('input').simulate('change', { target: { value: 'gu' } });
      wrapped.find('textarea').first().simulate('change', { target: { value: 'foo' } });
    });

    it('', () => {
      expect(wrapped.find('input').first().prop('value')).toEqual('gu');
      expect(wrapped.find('textarea').first().prop('value')).toEqual('foo');
    });
  });
  describe('simulate handle event', () => {
    it('should simulate submit', () => {
      const submitButton = wrapped.find('#publishEntry');

      const mockedEvent = {
        preventDefault: jest.fn(),
      };

      submitButton.simulate('click', mockedEvent);
    });
  });
});
