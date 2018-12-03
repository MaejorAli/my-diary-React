import { combineReducers } from 'redux';

import authReducers from './authReducers';
import publishEntryReducer from './publishEntryReducer';
import updateEntryReducer from './updateEntryReducer';
import entryReducer from './entryReducer';
import deleteEntryReducer from './deleteEntryReducer';
import profileReducer from './profileReducer';
import updateProfileImageReducer from './updateProfileImageReducers';


export default combineReducers({
  auth: authReducers,
  publishEntryReducer,
  updateEntryReducer,
  entries: entryReducer,
  deleteEntryReducer,
  profileReducer,
  updateProfileImageReducer,
});
