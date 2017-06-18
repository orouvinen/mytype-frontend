import React, { Component } from 'react';

// Paginate: creates a component that adds pagination to a list component of some sort.
//
// Args:
//   WrappedComponent: the component that will be paginated
//   initialPage: page (0..n-1) to display when first rendering the wrapped component
//   totalItems: number of items contained in the component's listing
//   itemsPerPage: how many items to display per page
//   
// In order for the wrapped component to work with pagination provided by this
// component, wrapped component has to accept the props
//
//  "itemsPerPage": how many items to display per page
//  "page" -> current page number to display
//
// and render the correct items based on these.
// 
const paginate = (WrappedComponent, initialPage, totalItems, itemsPerPage) => {
  return class Paginated extends Component {
    constructor() {
      super();
      this.state = {
        page: initialPage,
        numPages: totalItems === 0 ? 1 : Math.ceil(totalItems / itemsPerPage),
      };
    }

    nextPage() {
      const { page, numPages } = this.state;
      if (page < numPages - 1)
        this.props.nextPage();
    }

    prevPage() {
      const { page } = this.state;

      if (page > 0)
        this.props.prevPage();
    }

    render() {
      return (
        <div>
          <WrappedComponent
            page={this.state.page}
            itemsPerPage={itemsPerPage}
            {...this.props} />

          <div style={{ textAlign: "left" }}>
            <button type="button" onClick={this.prevPage.bind(this)}>&lt;</button>
            <span style={{ fontSize: "0.8em" }}> Page {this.state.page + 1} / {this.state.numPages} </span>
            <button type="button" onClick={this.nextPage.bind(this)}>&gt;</button>
          </div>
        </div>);
    }
  };
};

export default paginate;