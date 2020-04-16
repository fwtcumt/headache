import React from 'react';

const guessWordList = [
  {
    word: '化妆棉使用步骤图解',
    rec: true
  },
  {
    word: '护肤小常识',
    rec: false
  },
  {
    word: '曲剧李豁子离婚',
    rec: false
  },
  {
    word: '儿童学画画小视频',
    rec: false
  }
];

class GuessWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { onSelectWord } = this.props;

    return (
      <div className="guessword">
        <div className="guess-tit">猜你想搜</div>
        <div className="guess-list">
          {guessWordList.map(item => (
            <div
              key={item.word}
              className={`guess-item line1 ${item.rec ? 'rec' : ''}`}
              onClick={() => onSelectWord && onSelectWord(item.word)}
            >
              {item.word}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default GuessWord;
