import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super (props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    const value = event.target.value;

    this.props.searchBooks(value);
    this.setState({ term: value });
  }

  render() {
    return (
      <div>
        <input value={this.state.term} onChange={this.onInputChange} />
      </div>
    )
  }

}
