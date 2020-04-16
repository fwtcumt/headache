import React from 'react';
import FeedSmallPic from 'components/FeedSmallPic';
import FeedThreePic from 'components/FeedThreePic';
import FeedBigPic from 'components/FeedBigPic';
import FeedVideo from 'components/FeedVideo';
import Header from './components/header.js';
import Navbar from './components/navbar.js';
import './index.less';

const placePic = {
  smallPic: 'https://placekitten.com/180/120',
  threePic: 'https://placekitten.com/170/120',
  bigPic: 'https://placekitten.com/630/315',
  videoPic: 'https://placekitten.com/600/310',
};

const feedComponents = {
  smallpic: FeedSmallPic,
  threepic: FeedThreePic,
  bigpic: FeedBigPic,
  feedvideo: FeedVideo
}

const feedList = [
  {
    id: '6815573013170225671',
    title: '习近平：团结合作是国际社会战胜疫情最有力武器',
    info: '中央新闻网 评论 8993 刚刚',
    layout: 'bigpic',
    isTop: true,
    pics: []
  },
  {
    id: '6815586582116958734',
    title: '人民日报和音：特殊时期最宝贵的人权保护',
    info: '人民日报 评论 2466 1分钟前',
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
    pics: [placePic.threePic, placePic.threePic, placePic.threePic]
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
    title: '伊拉克战争，为何萨达姆放着800架战机不用？这是他真正聪明之处',
    info: '央视网新闻 评论 2 8分钟前',
    layout: 'smallpic',
    pics: [placePic.smallPic]
  },
  {
    id: '6815362200710939149',
    title: '26家！美国紧急授权KN95口罩，这些上市公司拿到出口通行证',
    info: '中国经济网 评论 25 6分钟前',
    layout: 'threepic',
    pics: [placePic.threePic, placePic.threePic, placePic.threePic]
  },
  {
    id: '6815537455467332103',
    title: '拿回一大袋葱，好奇的各种闻舔咬。',
    info: '秀外慧中2008 评论 0 18分钟前',
    duration: '01:29',
    layout: 'feedvideo',
    pics: [placePic.videoPic]
  },
  {
    id: '6780199724038225934',
    title: '基于React+Antd打造的后台管理系统示例，不想研究一下吗？',
    info: '涛涛哥哥 1天前',
    layout: 'bigpic',
    isAd: true,
    adLink: 'https://fwtcumt.github.io/system-antd3.0',
    pics: [placePic.bigPic]
  },
  {
    id: '6815902084869653004',
    title: '奥巴马宣布支持美民主党总统竞选人拜登',
    info: '中国新闻网 评论 0 2天前',
    layout: 'bigpic',
    pics: [placePic.bigPic]
  },
  {
    id: '6813595080142619144',
    title: '摸金校尉、尸香魔芋、黑驴蹄子...《鬼吹灯》这些“专业词汇”来自哪里？',
    info: '三联生活周刊 评论 25 04-15 23:58',
    layout: 'threepic',
    pics: [placePic.threePic, placePic.threePic, placePic.threePic]
  },
  {
    id: '6814744443728462350',
    title: 'JavaScript中文网，为了你及时的武装自己',
    info: '鸿儿哥哥 04-15 22:58',
    layout: 'bigpic',
    isAd: true,
    adLink: 'https://www.javascriptcn.com/',
    pics: [placePic.bigPic]
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
          <div className="feed-none">————————— 到底了 —————————</div>
        </div>
      </div>
    );
  }
}

export default Home;
