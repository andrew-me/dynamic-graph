import { fetchRankings } from '../api';
import { getIsFetching } from '../reducers';

export const fetchItems = () => (dispatch, getState) => {
  if (getIsFetching(getState())) {
    return Promise.resolve();
  }

  dispatch({
    type: 'FETCH_ITEMS_REQUEST',
  });

  return fetchRankings().then(
    response => {
      dispatch({
        type: 'FETCH_ITEMS_SUCCESS',
        response,
      });
    },
    error => {
      dispatch({
        type: 'FETCH_ITEMS_FAILURE',
        message: error.message || 'Something went wrong.',
      });
    }
  );
};
