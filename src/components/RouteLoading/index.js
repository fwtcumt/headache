import React from 'react';
import loading_pic from 'assets/loading.gif';
import './index.less';

/**
 * @param {string} msg 提示信息
**/
export default ({ msg }) => {
  return (
    <div className="mask-accets-loading">
      <div className="inner-box">
        <img className="img-loading" src={loading_pic} alt=""/>
        <div className="msg-loading">{msg}</div>
      </div>
    </div>
  );
};
