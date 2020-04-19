import React from 'react';
import { createPortal } from 'react-dom';
import './index.less';

function alertFn(config, isConfirm) {
  if (!config) {
    config = { content: config === 0 ? '0' : '' };
  } else if (typeof config !== 'object') {
    config = { content: config.toString() };
  }

  const alertRoot = document.createElement('div');
  alertRoot.className = 'alert-root';
  alertRoot.innerHTML = `
    <div class="alert-mask show">
      <div class="alert-site">
        <div class="alert">
          <div class="alert-content">${config.content}</div>
          <div class="alert-btns">
            ${isConfirm ? `<span class="btn-cancel">${config.cancelText || '取消'}</span>` : ''}
            <span class="btn-ok">${config.okText || '确定'}</span>
          </div>
        </div>
      </div>
    </div>`;
  document.body.appendChild(alertRoot);
  const btnOk = document.querySelector('.alert-root .btn-ok');
  btnOk.onclick = () => {
    config.onOk && config.onOk();
    document.querySelector('.alert-root .alert-mask').className = 'alert-mask hiding';
    setTimeout(() => {
      document.body.removeChild(alertRoot);
    }, 300);
  }
  if (isConfirm) {
    const cancelOk = document.querySelector('.alert-root .btn-cancel');
    cancelOk.onclick = () => {
      config.onCancel && config.onCancel();
      document.querySelector('.alert-root .alert-mask').className = 'alert-mask hiding';
      setTimeout(() => {
        document.body.removeChild(alertRoot);
      }, 300);
    }
  }
}

/**
 * @param {boolean} visible 控制模态框是否显示
 * @param {string} direction 模态框出现的方向，支持3个值：left、right、bottom，默认left
 * @static Modal支持两个静态方法：Modal.alert(config)和Modal.confirm(config)，用于模拟原生的alert和confirm。
 * @description config可以是一个字符串或者一个配置对象。config如果是个对象，其全部参数如下
 ```js
  {
    content: '提示内容',
    okText: '自定义ok按钮文字，默认“确定”',
    cancelText: '自定义cancel按钮文字，默认“取消”',
    onOk: () => {//点击ok按钮触发},
    onCancel: () => {//点击cancel按钮触发}
  }
 ```
 * 
*/
class Modal extends React.Component {
  constructor(props) {
    super(props);
    const oldModalRoot = document.querySelector('.modal-root');
    this.modalRoot = oldModalRoot || document.createElement('div');
    if (!oldModalRoot) {
      this.modalRoot.className = 'modal-root';
      document.body.appendChild(this.modalRoot);
    }
  }

  static alert = (config) => {
    alertFn(config, false);
  }

  static confirm = (config) => {
    alertFn(config, true);
  }

  render() {
    const { visible } = this.props;

    if (!visible) return null;

    return createPortal(
      <div className="modal-mask from-left">
        <div className="modal-site">
          {this.props.children}
        </div>
      </div>,
      this.modalRoot
    );
  }
}

export default Modal;
