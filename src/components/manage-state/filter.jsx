
import React, { Component } from 'react';


class Filter extends Component {
  handleChange = event => {
    const { onChange } = this.props;
    const value = event.target.value;
    onChange(value);
  };

  render() {
    const { searchTerm } = this.props;
    return (
      <input
        className="mitems-search-term"
        value={searchTerm}
        onChange={this.handleChange}
      />
    );
  }
}

export default Filter;