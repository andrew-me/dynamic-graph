import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions';
import { getItems, getErrorMessage, getIsFetching } from '../reducers';
import ItemList from './ItemList';
import FetchError from './FetchError';

class DynamicGraph extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { fetchItems } = this.props;
    fetchItems();
  }

  render() {
    const { isFetching, errorMessage, items } = this.props;
    if (isFetching && !items.length) {
      return <p>Loading...</p>;
    }
    if (errorMessage && !items.length) {
      return (
        <FetchError
          message={errorMessage}
          onRetry={() => this.fetchData()}
        />
      );
    }

    return (
      <ItemList
        items={items}
      />
    );
  }
}

DynamicGraph.propTypes = {
  errorMessage: PropTypes.string,
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchItems: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isFetching: getIsFetching(state),
  errorMessage: getErrorMessage(state),
  items: getItems(state),
});

DynamicGraph = withRouter(connect(
  mapStateToProps,
  actions
)(DynamicGraph));

export default DynamicGraph;
