import publishEntryReducer from '../../reducers/publishEntryReducer';
import { publishEntryInitialState } from '../mock/publishMock';
import { postEntry } from '../mock/entryData';

describe('PUBLISH entry reducer', () => {
  it('sets status key success to true upon PUBLISH_ARTICLE_SUCCESS type', () => {
    const action = {
      type: 'PUBLISH_ENTRY_SUCCESS',
      payload: postEntry.data,
    };
    expect(publishEntryReducer(publishEntryInitialState, action)).toEqual({
      publishedEntry: postEntry.data,
      status: {
        success: true,
        error: false,
      },
    });
  });
  it('sets status key success to false upon PUBLISH_ARTICLE_LOADING type', () => {
    const action = {
      type: 'PUBLISH_ENTRY_LOADING',
    };
    expect(publishEntryReducer(publishEntryInitialState, action)).toEqual({
      publishedEntry: {},
      status: {
        success: false,
        error: false,
      },
    });
  });
  it('sets status key error to true upon PUBLISH_ARTICLE_ERROR type', () => {
    const action = {
      type: 'PUBLISH_ENTRY_ERROR',
    };
    expect(publishEntryReducer(publishEntryInitialState, action)).toEqual({
      publishedEntry: {},
      status: {
        success: false,
        error: true,
      },
    });
  });
});
