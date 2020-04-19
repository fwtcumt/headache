import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'components/Modal';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    }
  }

  handleOpenMessage = () => {
    this.setState({ modalVisible: true });
  }

  render() {

    return (
      <header className="header">
        <span className="hd-l" onClick={this.handleOpenMessage} />
        <div className="hd-m" />
        <Link className="hd-r" to="/hot" />

        {/* 消息盒子 */}
        <Modal
          visible={this.state.modalVisible}
        >
          <div style={{ color: '#fff' }}>
            <h1>
              <button onClick={() => this.setState({ modalVisible: false })}>《 返回</button>
              我的消息盒子
            </h1>
            <p>不开发了，对css烦了=_=!</p>
          </div>
        </Modal>
      </header>
    );
  }
}

export default Header;
