import React from 'react';
import Header from './components/header.js';
import Navbar from './components/navbar.js';
import FeedSmallPic from './components/feedsmallpic';
import FeedThreePic from './components/feedthreepic';
import FeedBigPic from './components/feedbigpic';
import FeedVideo from './components/feedvideo';
import './index.less';

const feedComponents = {
  smallpic: FeedSmallPic,
  threepic: FeedThreePic,
  bigpic: FeedBigPic,
  feedvideo: FeedVideo
}

const feedList = [
  {
    id: '6815573013170225671',
    title: '习近平同塞尔维亚总统武契奇通电话',
    info: '新华网客户端 评论 794 3分钟前',
    layout: 'bigpic',
    isTop: true,
    pics: []
  },
  {
    id: '6815586582116958734',
    title: '习近平同芬兰总统尼尼斯托通电话',
    info: '新华网客户端 评论 51 4分钟前',
    layout: 'bigpic',
    isTop: true,
    pics: []
  },
  {
    id: '6815612142201340430',
    title: '中国抗疫图鉴（完整版）',
    info: '人民日报 评论 785 4分钟前',
    layout: 'threepic',
    isHot: true,
    pics: ['https://p3.pstatp.com/list/pgc-image/Rw9Ygiz2qIbmOE', 'https://p3.pstatp.com/list/pgc-image/Rw9YiYN7e8NBHI', 'https://p3.pstatp.com/list/pgc-image/Rw9YkCP6MJDqPr']
  },
  {
    id: '6815583319925719560',
    title: '林郑月娥：立法会部分议员恶意“拉布”铁证如山不容抵赖',
    info: '新华网客户端 评论 0 5分钟前',
    layout: 'bigpic',
    pics: []
  },
  {
    id: '6805823214321664515',
    title: '保姆被骗 为挽回损失说出一个"秘密" 女主竟被婆婆和丈夫告上法庭',
    info: '央视网新闻 评论 2 8分钟前',
    layout: 'smallpic',
    pics: ['http://p6-tt-ipv6.byteimg.com/img/tos-cn-p-0026/106a0630a44b6357617822e6f4fb5541~tplv-tt-cs0:640:360.jpg']
  },
  {
    id: '6815362200710939149',
    title: '26家！美国紧急授权KN95口罩，这些上市公司拿到出口通行证',
    info: '中国经济网 评论 25 6分钟前',
    layout: 'threepic',
    pics: ['https://p3.pstatp.com/list/pgc-image/Rw5cft6AwrC8EA', 'https://p3.pstatp.com/list/pgc-image/Rw5cfth9jRrvUI', 'https://p3.pstatp.com/list/pgc-image/Rw5cftx7bWGD13']
  },
  {
    id: '6815537455467332103',
    title: '拿回一大袋葱，好奇的各种闻舔咬。',
    info: '秀外慧中2008 评论 0 18分钟前',
    duration: '01:29',
    layout: 'feedvideo',
    pics: ['https://p3.pstatp.com/list/2fdd1000ae2f3180026a4']
  },
  {
    id: '6780199724038225934',
    title: '中国企业是否遭受网络安全疲劳的困扰？请阅读最新报告',
    info: '思科 刚刚',
    layout: 'bigpic',
    isAd: true,
    adLink: 'https://www.chengzijianzhan.com/tetris/page/6780199724038225934/',
    pics: ['https://p6-tt.byteimg.com/img/ad-tetris-site/file/1578902412117/5558a4307a3d2437996c41ad3dd8f9ba~noop.webp']
  },
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
   
  render() {

    return (
      <div className="page-root page-home">
        <Header />
        <Navbar />
        <div className="feedlist">
          {feedList.map(item => {
            const FeedItem = feedComponents[item.layout];
            return <FeedItem key={item.id} data={item} />;
          })}
          <div className="feed-none">------------ 到底了 ------------</div>
        </div>
      </div>
    );
  }
}

export default Home;
