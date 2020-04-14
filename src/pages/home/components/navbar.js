import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="navbar">
        <div className="navlist">
          <span className="nav active">推荐</span>
          <span className="nav">视频</span>
          <span className="nav">热点</span>
          <span className="nav">社会</span>
          <span className="nav">娱乐</span>
          <span className="nav">军事</span>
          <span className="nav">热点</span>
        </div>
        <div className="plusnav" />
      </div>
    );
  }
}

export default NavBar;
