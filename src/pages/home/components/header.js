import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleOpenMessage = () => {
    alert('只能在App中查看');
  }

  render() {
    return (
      <header className="header">
        <span className="hd-l" onClick={this.handleOpenMessage} />
        <div className="hd-m" />
        <Link className="hd-r" to="/hot" />
      </header>
    );
  }
}

export default Header;
