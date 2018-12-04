import { postEntry } from '../mock/entryData';
import publishEntry from '../../actions/publishEntry';
import { CustomAPIError } from '../mock/API';

describe('publishArticle actionCreator test-suite', () => {
  it(`dispatches PUBLISH_ARTICLE_LOADING, PUBLISH_ARTICLE_SUCCESS
  upon successful server response`, async () => {
    const expectedActions = [
      {
        type: 'PUBLISH_ENTRY_LOADING',
      },
      {
        type: 'PUBLISH_ENTRY_SUCCESS',
        payload: postEntry.data,
      },
    ];

    const store = mockStore({});
    await store.dispatch(publishEntry(postEntry.data.data));
    expect(store.getActions()).toEqual(expectedActions);
  });
  it(`dispatches PUBLISH_ENTRY_LOADING, PUBLISH_ENTRY_ERROR
  upon failed server response`, async () => {
    const expectedActions = [
      {
        type: 'PUBLISH_ENTRY_LOADING',
      },
      {
        type: 'PUBLISH_ENTRY_ERROR',
        error: new CustomAPIError('All fields are required', 400),
      },
    ];

    const store = mockStore({});
    await store.dispatch(publishEntry({ title: 'A new ENTRY' }));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
