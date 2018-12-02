import { combineReducers } from 'redux';

import authReducers from './authReducers';
import publishEntryReducer from './publishEntryReducer';
import updateEntryReducer from './updateEntryReducer';
import entryReducer from './entryReducer';
import deleteEntryReducer from './deleteEntryReducer';


export default combineReducers({
  auth: authReducers,
  publishEntryReducer,
  updateEntryReducer,
  entries: entryReducer,
  deleteEntryReducer,
});
