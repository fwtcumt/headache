import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <header className="header">
        <Link className="hd-l" to="/message" />
        <div className="hd-m" />
        <Link className="hd-r" to="/search" />
      </header>
    );
  }
}

export default Header;
