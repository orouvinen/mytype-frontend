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

      this.firstPage = this.firstPage.bind(this);
      this.lastPage = this.lastPage.bind(this);
      this.nextPage = this.nextPage.bind(this);
      this.prevPage = this.prevPage.bind(this);

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

    firstPage() {
      this.props.setPage(0);
    }

    lastPage() {
      this.props.setPage(this.state.numPages - 1);
    }

    render() {
      return (
        <div>
          <WrappedComponent
            page={this.state.page}
            itemsPerPage={itemsPerPage}
            {...this.props} />

          <div style={{ textAlign: "left" }}>
            <button type="button" onClick={() => this.firstPage()}>
              <span className="fa fa-fast-backward"></span>
            </button>
            <button type="button" onClick={() => this.prevPage()}>
              <span className="fa fa-backward"></span>
            </button>
            <span style={{ fontSize: "0.8em" }}> Page {this.state.page + 1} / {this.state.numPages} </span>
            <button type="button" onClick={() => this.nextPage()}>
              <span className="fa fa-forward"></span>
            </button>
            <button type="button" onClick={() => this.lastPage()}>
              <span className="fa fa-fast-forward"></span>
            </button>
          </div>
        </div>);
    }
  };
};

export default paginate;