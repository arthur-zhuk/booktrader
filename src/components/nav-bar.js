import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-primary">Book Trader {this.props.name}</nav>

      </div>
    )
  }
}

export default NavBar;
