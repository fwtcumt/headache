import React from 'react';
import { createPortal } from 'react-dom';
import './index.less';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    const curNode = document.querySelector('.modal-root');
    this.node = curNode || document.createElement('div');
    if (!curNode) {
      this.node.className = 'modal-root';
      document.body.appendChild(this.node);
    }

    this.state = {
      visible: false,
      hideing: false
    }
  }

  componentDidMount() {
    if (this.props.visible) {
      this.setState({ visible: true });
    }
  }

  componentDidUpdate(preProps) {
    const preVisible = preProps.visible;
    const curVisible = this.props.visible;
    if (preVisible !== curVisible) {
      if (curVisible) {
        this.setState({ visible: true });
      } else {
        this.setState({ visible: false });
      }
    }
  }

  handleHide = () => {
    this.setState({ hideing: true });
    setTimeout(() => {
      this.setState({ hideing: false });
      this.props.onClose();
    }, 300);
  }

  render() {
    const { visible, hideing } = this.state;


    return createPortal(
      <div className={`mask ${visible ? 'show' : 'hide'} ${hideing ? 'hideing' : ''} `}>
        <div className="comtent">
          {visible && <div className="alert">
            <div className="tit">霸气提示</div>
            <div className="cont">这里没有你的消息</div>
            <div className="btns" onClick={this.handleHide}>
              我知道了
            </div>
          </div>}
        </div>
      </div>,
      this.node
    );
  }
}

export default Modal;
