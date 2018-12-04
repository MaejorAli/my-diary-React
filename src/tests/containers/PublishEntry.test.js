import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import PublishEntryComponent, { PublishEntry } from '../../containers/PublishEntry';
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
};

const wrapper = mount(
  <Root>
    <MemoryRouter initialEntries={[{ key: 'test' }]}>
      <PublishEntryComponent {...propsTrue} />
    </MemoryRouter>
  </Root>,
);

const wrapped = shallow(<PublishEntry {...props} />);

describe('Publish Entry container', () => {
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
