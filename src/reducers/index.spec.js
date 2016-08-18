import expect from 'expect';
import deepFreeze from 'deep-freeze';
import reducer from './index.js';

describe('reducer', () => {
  it('should return the initial state', () => {
    const stateBefore = {};
    const action = {};
    const stateAfter = {
      allItems: [],
      isFetching: false,
      errorMessage: null,
    }

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle FETCH_ITEMS_REQUEST', () => {
    const stateBefore = {};
    const action = {
      type: 'FETCH_ITEMS_REQUEST',
    };
    const stateAfter = {
      allItems: [],
      isFetching: true,
      errorMessage: null,
    }

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle FETCH_ITEMS_SUCCESS', () => {
    const response = { hasResponse: true };
    const stateBefore = {
      allItems: [],
      isFetching: true,
      errorMessage: null,
    };
    const action = {
      type: 'FETCH_ITEMS_SUCCESS',
      response: response,
    };
    const stateAfter = {
      allItems: response,
      isFetching: false,
      errorMessage: null,
    }

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle FETCH_ITEMS_FAILURE', () => {
    const message = "error";
    const stateBefore = {
      allItems: [],
      isFetching: true,
      errorMessage: null,
    };
    const action = {
      type: 'FETCH_ITEMS_FAILURE',
      message: message,
    };
    const stateAfter = {
      allItems: [],
      isFetching: false,
      errorMessage: message,
    }

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  });
});
