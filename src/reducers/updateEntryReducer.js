import {
  UPDATE_ENTRY_LOADING,
  UPDATE_ENTRY_SUCCESS,
  UPDATE_ENTRY_ERROR,
} from '../actions/actionTypes';

const initialState = {
  updatedEntry: {},
  status: {
    error: false,
    success: false,
  },
};

const updateEntryReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ENTRY_LOADING:
      return {
        ...state,
        status: {
          error: false,
          success: false,
        },
      };

    case UPDATE_ENTRY_SUCCESS:
      return {
        ...state,
        updatedEntry: action.payload,
        status: {
          success: true,
          error: false,
        },
      };

    case UPDATE_ENTRY_ERROR: {
      return {
        ...state,
        status: {
          error: true,
          success: false,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default updateEntryReducer;
