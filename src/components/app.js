import React, { Component } from 'react';

import SearchBar from '../containers/search-bar';
import NavBar from '../components/nav-bar';
//import BookList from '../containers/book-list';
//import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar name="Arthur"/>
        <SearchBar />
      </div>
    );
  }
}
