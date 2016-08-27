import expect from 'expect';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { DynamicGraph } from './DynamicGraph'; // named export is not connected to store
import ItemList from './ItemList';
import FetchError from './FetchError';

describe('DynamicGraph', () => {
  it('should render Loading if isFetching and no items', () => {
    const wrapper = shallow(<DynamicGraph
      items={[]}
      isFetching
      fetchItems={() => {}}
    />);

    expect(wrapper.contains(<p>Loading...</p>)).toEqual(true);
  });

  it('should render FetchError if errorMessage and no items', () => {
    const wrapper = shallow(<DynamicGraph
      items={[]}
      isFetching={false}
      fetchItems={() => {}}
      errorMessage={'error'}
    />);

    expect(wrapper.type()).toEqual(FetchError);
  });

  it('should render ItemList if items - even if an errorMessage or isFetching', () => {
    const wrapper = shallow(<DynamicGraph
      items={[{
        sort: 0,
        year: 2012,
        rank: 30,
      }]}
      isFetching
      fetchItems={() => {}}
      errorMessage={'error'}
    />);

    expect(wrapper.type()).toEqual(ItemList);
  });

  it('should fetchItems', () => {
    const props = {
      items: [],
      isFetching: false,
      fetchItems: expect.createSpy(),
    };
    mount(<DynamicGraph {...props} />);

    expect(props.fetchItems.calls.length).toBe(1);
  });
});
