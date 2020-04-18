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
        word: `${word}挂了吗`,
        html: <span><span className="match">{word}</span>挂了吗</span>
      },
      {
        word: `${word}破产了`,
        html: <span><span className="match">{word}</span>破产了</span>
      },
      {
        word: `${word}被列入失信被执行人`,
        html: <span><span className="match">{word}</span>被列入失信被执行人</span>
      },
      {
        word: `美国制裁${word}`,
        html: <span>美国制裁<span className="match">{word}</span></span>
      },
      {
        word: `${word}获得了诺贝尔奖`,
        html: <span><span className="match">{word}</span>获得了诺贝尔奖</span>
      },
      {
        word: `如果以上语句有伤害到你，抱歉`,
        html: <span>如果以上语句有伤害到你，抱歉</span>,
        disabled: true
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
            onClick={() => {
              if (item.disabled) {
                return alert('别搜这个啊');
              }
              onSelectWord && onSelectWord(item.word);
            }}
          >
            {item.html}
          </div>
        ))}
      </div>
    );
  }
}

export default AssociateWord;
