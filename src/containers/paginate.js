import React, { Component } from 'react';

// Creates a component that adds pagination to a list component of some sort.
// The wrapped component has to accept the props
// "itemsPerPage": how many items to display per page
// "page" -> current page number to display
const Paginate = (WrappedComponent, totalItems, itemsPerPage) => {
  return class Paginated extends Component {
    constructor() {
      super();
      this.state = {
        page: 0,
        numPages: totalItems === 0 ? 1 : Math.ceil(totalItems / itemsPerPage),
      };
    }
    
    nextPage() {
      const { page, numPages } = this.state;
      if (page < numPages - 1)
        this.setState({ page: page + 1});
    }

    prevPage() {
      const { page } = this.state;

      if (page > 0)
        this.setState({ page: page - 1});
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
            <span style={{fontSize: "0.8em"}}> Page {this.state.page + 1} / {this.state.numPages} </span>
            <button type="button" onClick={this.nextPage.bind(this)}>&gt;</button>
          </div>
        </div>);
    }
  };
};

export default Paginate;