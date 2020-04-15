import React from 'react';

class AssociateWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  getAssociateWord = () => {
    const word = this.props.word;
    return [
      {
        word: `今天是${word}的生日吗`,
        html: <span>今天是<span className="match">{word}</span>的生日吗</span>
      },
      {
        word: `${word}是最美的`,
        html: <span><span className="match">{word}</span>是最美的</span>
      },
      {
        word: `我喜欢${word}`,
        html: <span>我喜欢<span className="match">{word}</span></span>
      },
      {
        word: `我想你了${word}`,
        html: <span>我想你了<span className="match">{word}</span></span>
      },
      {
        word: `除了${word}，我谁都不理`,
        html: <span>除了<span className="match">{word}</span>，我谁都不理</span>
      }
    ];
  }

  render() {
    const { onSelectWord } = this.props;
    const associateWords = this.getAssociateWord();

    return (
      <div className="associatewords">
        {associateWords.map(item => (
          <div
            key={item.word}
            className="word line1"
            onClick={() => onSelectWord && onSelectWord(item.word)}
          >
            {item.html}
          </div>
        ))}
      </div>
    );
  }
}

export default AssociateWord;
