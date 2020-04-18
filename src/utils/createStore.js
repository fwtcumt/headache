import React from 'react';

let store = {};

/**
 * @param {string} key 要取哪个数据/取全部
*/
export const getStore = (key) => key ? store[key] : store;

/**
 * @param {object} state 设置哪些数据
*/
export const setStore = (state = {}) => store = {...store, ...state};

/**
 * @param {array} keys 订阅哪些数据
 * @param {component} Component 绑定的组件
*/
export const connect = (keys, Component) => {

  return class Provider extends React.Component {
    constructor(props) {
      super(props);
      const initState = {};
      keys.forEach(key => {
        initState[key] = store[key];
      });
      this.state = initState
    }
  
    dispatch = (state = {}) => {
      store = {...store, ...state};
      this.setState(state);
    }
  
    render() {
      return <Component dispatch={this.dispatch} {...this.state} {...this.props} />;
    }
  }
}