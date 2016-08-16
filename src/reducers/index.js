import { combineReducers } from 'redux';

const allItems = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ITEMS_SUCCESS':
      return action.response;
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_ITEMS_REQUEST':
      return true;
    case 'FETCH_ITEMS_SUCCESS':
    case 'FETCH_ITEMS_FAILURE':
      return false;
    default:
      return state;
  }
};

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_ITEMS_FAILURE':
      return action.message;
    case 'FETCH_ITEMS_REQUEST':
    case 'FETCH_ITEMS_SUCCESS':
      return null;
    default:
      return state;
  }
};

const items = combineReducers({
  allItems,
  isFetching,
  errorMessage,
});


export default items;

export const getItems = (state) => state.allItems;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;
