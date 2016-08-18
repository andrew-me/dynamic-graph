import { expect } from 'chai';
import reducer from './index.js';

describe('reducer', function() {
  describe('isFetching', function(){
    it('is set to true if action FETCH_ITEMS_REQUEST', function() {
      const stateBefore = {
        isFetching: false,
      };
      const action = {
        type: 'FETCH_ITEMS_REQUEST',
      };

      expect(reducer(stateBefore, action).isFetching).to.equal(true);
    });
  });
});
