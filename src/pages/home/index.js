import React from 'react';
import FeedSmallPic from 'components/FeedSmallPic';
import FeedThreePic from 'components/FeedThreePic';
import FeedBigPic from 'components/FeedBigPic';
import FeedVideo from 'components/FeedVideo';
import Header from './components/header.js';
import Navbar from './components/navbar.js';
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
    pics: ['https://p6-tt-ipv6.byteimg.com/img/tos-cn-p-0026/106a0630a44b6357617822e6f4fb5541~tplv-tt-cs0:640:360.jpg']
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
  {
    id: '6815902084869653004',
    title: '奥巴马宣布支持美民主党总统竞选人拜登',
    info: '中国新闻网 评论 0 2天前',
    layout: 'bigpic',
    pics: ['http://p29-tt.byteimg.com/img/pgc-image/RpbYHUi6Hgs4Do~tplv-tt-cs0:640:360.jpg']
  },
  {
    id: '6813595080142619144',
    title: '摸金校尉、尸香魔芋、黑驴蹄子...《鬼吹灯》这些“专业词汇”来自哪里？',
    info: '三联生活周刊 评论 25 04-15 23:58',
    layout: 'threepic',
    pics: ['https://p3.pstatp.com/list/pgc-image/817b0f96a1874a21bc963b384a0e1a7c', 'https://p3.pstatp.com/list/dfic-imagehandler/4fbbbb1e-8a60-475a-b914-4a42423fce82', 'https://p3.pstatp.com/list/dfic-imagehandler/1fd91e64-a960-4d9b-b738-f7b174f3dfe8']
  },
  {
    id: '6814744443728462350',
    title: '全新奥迪A4L 做更强大的自己',
    info: '懂车帝优选 04-15 22:58',
    layout: 'bigpic',
    isAd: true,
    adLink: 'https://cars.toutiao.com/zst/audi/20200411dcar/?group_id=6814744443728462350&app=',
    pics: ['http://sf3-ttcdn-tos.pstatp.com/img/web.business.image/202004105d0d90f9465c5aad458f8186~640x0.image']
  },
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navType: 1
    }
  }

  // 切换频道
  handleChangeNav = (type) => {
    this.setState({ navType: type });
  }
   
  render() {
    const { navType } = this.state;

    return (
      <div className="page-root page-home">
        <Header />
        <Navbar type={navType} onChangeNav={this.handleChangeNav} />
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
