import React from 'react';

const guessWordList = [
  '化妆棉使用步骤图解',
  '护肤小常识',
  '曲剧李豁子离婚',
  '儿童学画画小视频'
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
          {guessWordList.map(word => (
            <div
              key={word}
              className="guess-item line1 rec"
              onClick={() => onSelectWord && onSelectWord(word)}
            >
              {word}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default GuessWord;
