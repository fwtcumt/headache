import React from 'react';
import FeedFlow from 'components/FeedFlow';
import Header from './components/header.js';
import Navbar from './components/navbar.js';
import './index.less';

const placePic = {
  smallPic: 'https://placekitten.com/180/120',
  threePic: 'https://placekitten.com/170/120',
  bigPic: 'https://placekitten.com/630/315',
  videoPic: 'https://placekitten.com/600/310',
  avatarPic: 'https://placekitten.com/100/100'
};

const mockFeedList = [
  {
    id: '6815573013170225671',
    title: '习近平：团结合作是国际社会战胜疫情最有力武器',
    publishTime: '刚刚',
    commentNum: 1,
    feedType: 'bigpic',
    pics: [],
    author: {
      name: '中央新闻网',
      avatar: placePic.avatarPic,
      label: '中央新闻网官方账号',
      vip: true
    },
    isTop: true,
  },
  {
    id: '6815586582116958734',
    title: '人民日报和音：特殊时期最宝贵的人权保护',
    publishTime: '1分钟前',
    commentNum: 14,
    feedType: 'bigpic',
    pics: [],
    author: {
      name: '人民日报',
      avatar: placePic.avatarPic,
      label: '人民日报官方账号',
      vip: true
    },
    isTop: true,
  },
  {
    id: '6815612142201340430',
    title: '中国抗疫图鉴（完整版）',
    publishTime: '3分钟前',
    commentNum: 70,
    feedType: 'threepic',
    pics: [placePic.threePic, placePic.threePic, placePic.threePic],
    author: {
      name: '人民日报',
      avatar: placePic.avatarPic,
      label: '人民日报官方账号',
      vip: true
    },
    isHot: true,
  },
  {
    id: '6815583319925719560',
    title: '林郑月娥：立法会部分议员恶意“拉布”铁证如山不容抵赖',
    publishTime: '3分钟前',
    commentNum: 1,
    feedType: 'bigpic',
    pics: [],
    author: {
      name: '新华网客户端',
      avatar: placePic.avatarPic,
      label: '新华网官方账号',
      vip: true
    },
  },
  {
    id: '6805823214321664515',
    title: '伊拉克战争，为何萨达姆放着800架战机不用？这是他真正聪明之处',
    publishTime: '5分钟前',
    commentNum: 2,
    feedType: 'smallpic',
    pics: [placePic.smallPic],
    author: {
      name: '央视网新闻',
      avatar: placePic.avatarPic,
      label: '央视网新闻官方账号',
      vip: true
    },
    showHead: true,
  },
  {
    id: '6815362200710939149',
    title: '26家！美国紧急授权KN95口罩，这些上市公司拿到出口通行证',
    publishTime: '6分钟前',
    commentNum: 45,
    feedType: 'threepic',
    pics: [placePic.threePic, placePic.threePic, placePic.threePic],
    author: {
      name: '中国经济网',
      avatar: placePic.avatarPic,
      label: '中国经济网官方账号',
      vip: true
    },
  },
  {
    id: '6815537455467332103',
    title: '拿回一大袋葱，好奇的各种闻舔咬。',
    publishTime: '18分钟前',
    commentNum: 233,
    feedType: 'feedvideo',
    duration: '01:29',
    pics: [placePic.videoPic],
    author: {
      name: '秀外慧中2008',
      avatar: placePic.avatarPic,
      label: '优质生活信息创作者'
    },
    showHead: true,
  },
  {
    id: '6780199724038225934',
    title: '基于React+Antd打造的后台管理系统示例，不想研究一下吗？',
    publishTime: '1天前',
    commentNum: 0,
    feedType: 'bigpic',
    adLink: 'https://fwtcumt.github.io/system-antd3.0',
    pics: [placePic.bigPic],
    author: {
      name: '涛涛哥哥',
      avatar: placePic.avatarPic,
      label: '优秀技术领域创作者',
      vip: true
    },
    isAd: true,
  },
  {
    id: '6815902084869653004',
    title: '奥巴马宣布支持美民主党总统竞选人拜登',
    publishTime: '2天前',
    commentNum: 0,
    feedType: 'bigpic',
    pics: [placePic.bigPic],
    author: {
      name: '中国新闻网',
      avatar: placePic.avatarPic,
      label: '中国新闻网官方账号',
      vip: true,
      friend: true
    },
    showHead: true,
  },
  {
    id: '6813595080142619144',
    title: '摸金校尉、尸香魔芋、黑驴蹄子...《鬼吹灯》这些“专业词汇”来自哪里？',
    publishTime: '04-12 22:50',
    commentNum: 10,
    feedType: 'threepic',
    pics: [placePic.threePic, placePic.threePic, placePic.threePic],
    author: {
      name: '三联生活周刊',
      avatar: placePic.avatarPic,
      label: '优质自媒体',
      vip: true
    },
  },
  {
    id: '6814744443728462350',
    title: 'JavaScript中文网，为了你及时的武装自己',
    publishTime: '04-15 22:58',
    commentNum: 0,
    feedType: 'bigpic',
    pics: [placePic.bigPic],
    author: {
      name: '鸿儿哥哥',
      avatar: placePic.avatarPic,
      label: '专业打广告'
    },
    adLink: 'https://www.javascriptcn.com/',
    isAd: true,
    showHead: true,
  },
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navType: 1,
      feedList: mockFeedList
    }
  }

  // 切换频道
  handleChangeNav = (type) => {
    this.setState({ navType: type });
  }

  // 关注作者
  handleFeedFriend = (idx, isFriend) => {
    const { feedList } = this.state;
    feedList[idx].author.friend = !isFriend;
    this.setState({ feedList });
  }

  // 移除广告
  handleFeedRemove = (idx) => {
    const { feedList } = this.state;
    feedList.splice(idx, 1);
    this.setState({ feedList });
  }
   
  render() {
    const { navType, feedList } = this.state;

    return (
      <div className="page-root page-home">
        <Header />
        <Navbar type={navType} onChangeNav={this.handleChangeNav} />
        <div className="feedlist">
          {feedList.map((item, idx) => {
            return (
              <FeedFlow
                key={item.id}
                data={item}
                onFriend={(isFriend) => this.handleFeedFriend(idx, isFriend)}
                onRemove={() => this.handleFeedRemove(idx)}
              />
            );
          })}
          <div className="feed-none">————————— 到底了 —————————</div>
        </div>
      </div>
    );
  }
}

export default Home;
