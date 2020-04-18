import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'components/Modal';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessageModal: false
    }
  }

  handleOpenMessage = () => {
    this.setState(({ showMessageModal }) => {
      return { showMessageModal: !showMessageModal };
    });
  }

  render() {
    const { showMessageModal } = this.state;

    return (
      <header className="header">
        <span className="hd-l" onClick={this.handleOpenMessage} />
        <div className="hd-m" />
        <Link className="hd-r" to="/hot" />

        <Modal
          visible={showMessageModal}
          onClose={() => this.setState({ showMessageModal: false })}
        />
      </header>
    );
  }
}

export default Header;
