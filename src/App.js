import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Loading from 'components/RouteLoading';
import getRoutes from 'utils/getRoutes';
import { setStore } from 'utils/createStore';
import './App.less';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.getInitData();
  }

  // 获取全局初始依赖数据
  getInitData = () => {
    setStore({
      defaults: {
        homeNavType: 1
      },
      placePic: {
        smallPic: 'https://placekitten.com/180/120',
        threePic: 'https://placekitten.com/170/120',
        bigPic: 'https://placekitten.com/630/315',
        videoPic: 'https://placekitten.com/600/310',
        avatarPic: 'https://placekitten.com/100/100'
      },
      channelList: [
        { id: 1, name: '推荐', include: true }, { id: 2, name: '热点', include: true }, { id: 3, name: '社会' }, { id: 4, name: '娱乐' },
        { id: 5, name: '科技', include: true }, { id: 6, name: '汽车', include: true }, { id: 7, name: '体育' }, { id: 8, name: '财经' },
        { id: 9, name: '军事', include: true }, { id: 10, name: '时尚', include: true }, { id: 11, name: '游戏' }, { id: 12, name: '国际' },
        { id: 13, name: '旅游' }, { id: 14, name: '历史' }, { id: 15, name: '探索' }, { id: 16, name: '美食' },
        { id: 17, name: '育儿' }, { id: 18, name: '养生' }, { id: 19, name: '故事' }, { id: 20, name: '美文' }
      ]
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Loading msg="初始化数据中..." />;
    }
    return (
      <Router basename="/headache">
        {getRoutes('/')}
      </Router>
    )
  }
}

export default App;