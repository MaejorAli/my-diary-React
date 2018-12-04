import { updateEntryDetail } from '../mock/entryData';
import updateEntry from '../../actions/updateEntry';
import { CustomAPIError } from '../mock/API';

describe('updateArticle actionCreator test-suite', () => {
  it(`dispatches UPDATE_ARTICLE_LOADING, UPDATE_ARTICLE_SUCCESS
  upon successful server response`, async () => {
    const expectedActions = [
      {
        type: 'UPDATE_ENTRY_LOADING',
      },
      {
        type: 'UPDATE_ENTRY_SUCCESS',
        payload: updateEntryDetail.data,
      },
    ];

    const store = mockStore({});
    await store.dispatch(updateEntry(updateEntryDetail.data.data, 1));
    expect(store.getActions()).toEqual(expectedActions);
  });
  it(`dispatches UPDATE_ARTICLE_LOADING, UPDATE_ARTICLE_ERROR
  upon successful server response`, async () => {
    const expectedActions = [
      {
        type: 'UPDATE_ENTRY_LOADING',
      },
      {
        type: 'UPDATE_ENTRY_ERROR',
        error: new CustomAPIError('All fields are required', 400),
      },
    ];

    const store = mockStore({});
    await store.dispatch(updateEntry({ title: 'A new Article' }, 1));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
