import React from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import './index.less';

class NotFound extends React.PureComponent {
  constructor(props) {
    super(props);
    this.oldNode = document.getElementsByClassName('page-404')[0];
    this.node = this.oldNode || document.createElement('div');
    this.node.className = 'page-404';
    if (!this.oldNode) {
      document.body.appendChild(this.node);
    }
  }

  componentWillUnmount() {
    document.body.removeChild(this.node);
  }

  render() {

    return createPortal(
      <div className="content">
        <h1>404</h1>
        <Link to="/">Back Home</Link>
      </div>,
      this.node
    );
  }
};

export default NotFound;
