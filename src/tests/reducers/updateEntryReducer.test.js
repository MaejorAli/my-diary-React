import updateEntryReducer from '../../reducers/updateEntryReducer';
import { updateEntryInitialState } from '../mock/updateMock';
import { postEntry } from '../mock/entryData';

describe('update entry reducer', () => {
  it('sets status key success to true upon UPDATE_ARTICLE_SUCCESS type', () => {
    const action = {
      type: 'UPDATE_ENTRY_SUCCESS',
      payload: postEntry.data,
    };
    expect(updateEntryReducer(updateEntryInitialState, action)).toEqual({
      updatedEntry: postEntry.data,
      status: {
        success: true,
        error: false,
      },
    });
  });
  it('sets status key success to false upon UPDATE_ARTICLE_LOADING type', () => {
    const action = {
      type: 'UPDATE_ENTRY_LOADING',
    };
    expect(updateEntryReducer(updateEntryInitialState, action)).toEqual({
      updatedEntry: {},
      status: {
        success: false,
        error: false,
      },
    });
  });
  it('sets status key error to true upon UPDATE_ARTICLE_ERROR type', () => {
    const action = {
      type: 'UPDATE_ENTRY_ERROR',
    };
    expect(updateEntryReducer(updateEntryInitialState, action)).toEqual({
      updatedEntry: {},
      status: {
        success: false,
        error: true,
      },
    });
  });
});
