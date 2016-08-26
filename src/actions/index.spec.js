import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import { fetchItems } from './index.js';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('actions', () => {
  it('should return a resolved promise if is already fetching', () => {
    const initialState = { isFetching: true };
    const store = mockStore(initialState);

    return store.dispatch(fetchItems())
      .then(() => { // return of async actions
        expect(store.getActions().length).toEqual(0);
      });
  });

  it('should dispatch FETCH_ITEMS_REQUEST', () => {
    const expectedAction = { type: 'FETCH_ITEMS_REQUEST' };
    const store = mockStore({});

    return store.dispatch(fetchItems())
      .then(() => { // return of async actions
        expect(store.getActions()[0]).toEqual(expectedAction);
      });
  });

  it('should dispatch FETCH_ITEMS_SUCCESS with a JSON response', () => {
    const store = mockStore({});

    return store.dispatch(fetchItems())
      .then(() => { // return of async actions
        expect(store.getActions()[1].type).toEqual('FETCH_ITEMS_SUCCESS');
        expect(store.getActions()[1].response.length).toBeGreaterThan(0);
      });
  });
});
