import React from 'react';
import { connect, getStore, setStore } from 'utils/createStore';
import Modal from 'components/Modal';
import FeedFlow from 'components/FeedFlow';
import Header from './components/header.js';
import Navbar from './components/navbar.js';
import './index.less';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      success: false
    }
  }

  componentDidMount() {
    const { homeFlowList } = this.props;

    if (homeFlowList && homeFlowList.length) {
      return this.setFeedListScroll();
    };

    this.getFeedFlowList();
  }

  // 保存信息流滚动的位置
  saveFeedListScroll = () => {
    setStore({ homeFlowListScrollTop: this.feedListDom.scrollTop });
  }

  // 设置信息流滚动的位置
  setFeedListScroll = () => {
    const homeFlowListScrollTop = getStore('homeFlowListScrollTop');
    if (homeFlowListScrollTop) this.feedListDom.scrollTop = homeFlowListScrollTop;
  }

  // 拉取信息流
  getFeedFlowList = () => {
    const placePic = getStore('placePic');
    const { dispatch } = this.props;

    dispatch({
      homeFlowList: [
        {
          id: '6815573013170225671',
          title: '习近平：团结合作是国际社会战胜疫情最有力武器',
          publishTime: '3天前',
          commentNum: '1597万',
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
          title: '人民日报：特殊时期最宝贵的是人民生命财产保护',
          publishTime: '12小时前',
          commentNum: '899万',
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
          id: '6816866417774690824',
          title: '武汉订正确诊和死亡病例数 世卫表态',
          publishTime: '1分钟前',
          commentNum: '1.0万',
          feedType: 'smallpic',
          pics: [placePic.smallPic],
          author: {
            name: '中国网',
            avatar: placePic.avatarPic,
            label: '中国网官方账号',
            vip: true
          },
          isHot: true,
        },
        {
          id: '6780199724038225934',
          title: '你愿意为知识付费吗？36氪让一部分人先看到未来',
          publishTime: '1分钟前',
          commentNum: 0,
          feedType: 'smallpic',
          adLink: 'https://36kr.com',
          pics: [placePic.smallPic],
          author: {
            name: '36氪',
            avatar: placePic.avatarPic,
            label: '36氪官方头疼号',
            vip: true
          },
          isAd: true,
        },
        {
          id: '6816548336091267588',
          title: '恒大足球场造型引发热议，网友：也太过分了！',
          publishTime: '2分钟前',
          commentNum: '1701',
          feedType: 'smallpic',
          pics: [placePic.smallPic],
          author: {
            name: '中国商网',
            avatar: placePic.avatarPic,
            label: '中国商网官方账号',
            vip: true
          },
        },
        {
          id: '6816953423997436427',
          title: '比起道貌岸然的吴秀波,"装"了23年的李晨,说崩就崩的人生模仿不来',
          publishTime: '2分钟前',
          commentNum: '899',
          feedType: 'smallpic',
          pics: [placePic.smallPic],
          author: {
            name: '八卦娱乐我最星',
            avatar: placePic.avatarPic,
            label: '娱乐领域创作者',
          },
        },
        {
          id: '6815583319925719560',
          title: '林郑月娥：立法会部分议员恶意“拉布”铁证如山不容抵赖',
          publishTime: '3分钟前',
          commentNum: 888,
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
          id: '6815612142201340430',
          title: '中国抗疫图鉴（完整版）',
          publishTime: '4分钟前',
          commentNum: 29898,
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
          id: '6805823214321664515',
          title: '伊拉克战争，为何萨达姆放着800架战机不用？这是他真正聪明之处',
          publishTime: '8分钟前',
          commentNum: 122,
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
          publishTime: '18分钟前',
          commentNum: 3090,
          feedType: 'smallpic',
          pics: [placePic.smallPic],
          author: {
            name: '中国经济网',
            avatar: placePic.avatarPic,
            label: '中国经济网官方账号',
            vip: true
          },
        },
        {
          id: '6815537455467332103',
          title: '数字货币落地，对我们的生活有什么影响？',
          publishTime: '19分钟前',
          commentNum: 301,
          feedType: 'feedvideo',
          duration: '04:49',
          pics: [placePic.videoPic],
          author: {
            name: '烦立停',
            avatar: placePic.avatarPic,
            label: '优质视频作者',
            vip: true
          },
          showHead: true,
        },
        {
          id: '6815902084869653004',
          title: '奥巴马宣布支持美民主党总统竞选人拜登',
          publishTime: '2天前',
          commentNum: 1888,
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
          commentNum: 38800,
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
          title: '在抖音不仅仅看短视频哦，快和全世界一起抖起来吧',
          publishTime: '04-15 22:58',
          commentNum: 0,
          feedType: 'bigpic',
          pics: [placePic.bigPic],
          author: {
            name: '抖音',
            avatar: placePic.avatarPic,
            label: '抖音短视频头疼号',
            vip: true,
          },
          adLink: 'https://www.douyin.com/',
          isAd: true,
          showHead: true,
        },
        {
          id: '6816944419342647822',
          title: '特朗普：解放明尼苏达州！解放密歇根州！解放弗吉尼亚州！',
          publishTime: '04-15 22:50',
          commentNum: 3,
          feedType: 'smallpic',
          pics: [placePic.smallPic],
          author: {
            name: '环球日报',
            avatar: placePic.avatarPic,
            label: '环球日报App',
            vip: true
          },
        },
      ]
    });
  }

  // mock loading
  getRecFlow = () => {
    this.setState({ loading: true });
    this.recTimer1 = setTimeout(() => {
      this.setState({ loading: false, success: true });
      this.recTimer2 = setTimeout(() => {
        this.setState({ success: false });
      }, 2000);
    }, 1000);
  }

  // 切换频道
  handleChangeNav = (type) => {
    this.props.dispatch({ homeNavType: type });
    this.feedListDom.scrollTop = 0;
    this.getRecFlow();
  }

  // 关注作者
  handleFeedFriend = (idx, isFriend) => {
    const { homeFlowList } = this.props;
    homeFlowList[idx].author.friend = !isFriend;
    this.props.dispatch({ homeFlowList });
  }

  // 移除广告
  handleFeedRemove = (idx) => {
    Modal.confirm({
      content: '优质广告，您确定要屏蔽么？屏蔽后，将永不再为您推荐',
      onOk: () => {
        const { homeFlowList } = this.props;
        homeFlowList.splice(idx, 1);
        this.props.dispatch({ homeFlowList });
      }
    });
  }
   
  render() {
    const { loading, success } = this.state;
    const defaults = getStore('defaults');
    const { homeNavType = defaults.homeNavType, homeFlowList = [] } = this.props;

    return (
      <div className="page-root page-home">
        <Header />
        <Navbar type={homeNavType} onChangeNav={this.handleChangeNav} />
        <div className="feedlist" ref={el => this.feedListDom = el} onScroll={this.saveFeedListScroll}>
          {loading && <div className="loading">推荐中...</div>}
          {success && <div className="success">成功为您推荐了10条资讯</div>}
          {homeFlowList.map((item, idx) => {
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

export default connect(['homeNavType', 'homeFlowList'], Home);
